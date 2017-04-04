import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { masterFireBaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { StayIslandComponent } from './stay-island/stay-island.component';
import { EndGameComponent } from './end-game/end-game.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCgq1MxlijZtXRWGNYMi98v4NVdD9sjC1A",
    authDomain: "stories-cba06.firebaseapp.com",
    databaseURL: "https://stories-cba06.firebaseio.com",
    projectId: "stories-cba06",
    storageBucket: "stories-cba06.appspot.com",
    messagingSenderId: "771799282916"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StayIslandComponent,
    EndGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
