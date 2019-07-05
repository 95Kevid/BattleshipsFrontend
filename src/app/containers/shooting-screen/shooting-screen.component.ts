import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import {Observable, zip} from 'rxjs';
import {GameStatusRequestAction} from '../../store/game/game.actions';
import {Cell} from '../../models/cell';
import {Ship} from '../../models/ship';
import {map} from 'rxjs/operators';
import {ShootRequest} from '../../models/shoot-request';

@Component({
  selector: 'app-shooting-screen',
  templateUrl: './shooting-screen.component.html',
  styleUrls: ['./shooting-screen.component.scss']
})
export class ShootingScreenComponent implements OnInit {

  private store: Store<AppState>;
  private gameId: number;
  private gameId$: Observable<number>;
  private playersToShotPositions$: Observable<Map<string, Cell>>;
  private playersToSunkShips$: Observable<Map<string, Ship>>;
  private playerInfoList$: Observable<any>;

  constructor(store: Store<AppState>) {
    this.store = store;
  }

  ngOnInit() {
    this.gameId$ = this.store.select(state => state.gameState.gameId);
    this.gameId$.subscribe(state => this.gameId = state);
    this.playersToShotPositions$ = this.store.select(state => state.gameState.playersToShotPositions);
    this.playersToSunkShips$ = this.store.select(state => state.gameState.playersToSunkShips);
    this.playerInfoList$ = zip(this.playersToSunkShips$, this.playersToShotPositions$)
      .pipe(
        map(result => {
          if (result[0] && result[1]) {
            const names = Object.keys(result[0]);
            return names.map(name => {
              return {name: name, sunk: result[0][name], shot: result[1][name]};
            });
          } else {
            return [];
          }
        }));
  }

  shoot(shootRequest: ShootRequest) {
    this.store.dispatch(new ShootRequestAction());
  }
  pollForGameStatus() {
    this.store.dispatch(new GameStatusRequestAction(this.gameId));
    console.log('Game Id is' + this.gameId);
  }
}
