import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CubeComponent } from './components/cube/cube.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardGlowComponent } from './components/card-glow/card-glow.component';
import { ActivitypageComponent } from './pages/activitypage/activitypage.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    HomepageComponent,
    CardGlowComponent,
    ActivitypageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
