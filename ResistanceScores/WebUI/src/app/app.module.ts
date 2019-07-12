import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PlayerClient, LeaderboardClient, API_BASE_URL, GameClient, GraphClient } from './services/web-api.service.generated';
import { PlayerEditComponent } from './pages/player/player-edit/player-edit.component';
import { PlayerDetailComponent } from './pages/player/player-detail/player-detail.component';
import { PlayerListingComponent } from './pages/player/player-listing/player-listing.component';
import { PlayerCreateComponent } from './pages/player/player-edit/player-create.component';
import { PlayerComponent } from './pages/player/player.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { AllTimeLeaderboardComponent } from './pages/leaderboard/all-time-leaderboard/all-time-leaderboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GameComponent } from './pages/game/game.component';
import { GameEditComponent } from './pages/game/game-edit/game-edit.component';
import { GameListingComponent } from './pages/game/game-listing/game-listing.component';
import { GameDetailComponent } from './pages/game/game-detail/game-detail.component';
import { GameCreateComponent } from './pages/game/game-edit/game-create.component';
import { ButtonMultiselectComponent } from './shared/button-multiselect/button-multiselect.component';
import { ButtonMultiselectOptionComponent } from './shared/button-multiselect-option/button-multiselect-option.component';
import { DayReviewComponent } from './shared/day-review/day-review.component';
import { ButtonSelectComponent } from './shared/button-select/button-select.component';
import { ButtonSelectOptionComponent } from './shared/button-select-option/button-select-option.component';
import { PercentageGraphComponent } from './shared/percentage-graph/percentage-graph.component';
import { ChartsModule } from 'ng2-charts';
import { GraphComponent } from './graph/graph.component';
import { GraphXGridlineComponent } from './graph/graph-x-gridline.component';
import { GraphYGridlineComponent } from './graph/graph-y-gridline.component';
import { GraphDatalineComponent } from './graph/graph-dataline.component';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    PlayerListingComponent,
    PlayerEditComponent,
    PlayerDetailComponent,
    PlayerCreateComponent,
    PlayerComponent,
    LeaderboardComponent,
    AllTimeLeaderboardComponent,
    GameComponent,
    GameEditComponent,
    GameListingComponent,
    GameDetailComponent,
    GameCreateComponent,
    ButtonMultiselectComponent,
    ButtonMultiselectOptionComponent,
    DayReviewComponent,
    ButtonSelectComponent,
    ButtonSelectOptionComponent,
    PercentageGraphComponent,
    GraphComponent,
    GraphXGridlineComponent,
    GraphYGridlineComponent,
    GraphDatalineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ChartsModule
  ],
  providers: [{ provide: API_BASE_URL, useFactory: getBaseUrl }, PlayerClient, LeaderboardClient, GameClient, GraphClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
