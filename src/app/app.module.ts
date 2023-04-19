import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CubeComponent } from './components/cube/cube.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardGlowComponent } from './components/card-glow/card-glow.component';
import { ActivitypageComponent } from './pages/activitypage/activitypage.component';
import { CardMandatoryActivityComponent } from './components/card-mandatory-activity/card-mandatory-activity.component';
import { ChosenActivitiesPageComponent } from './pages/chosen-activities-page/chosen-activities-page.component';
import { ReflectionPageComponent } from './pages/reflection-page/reflection-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    HomepageComponent,
    CardGlowComponent,
    ActivitypageComponent,
    CardMandatoryActivityComponent,
    ChosenActivitiesPageComponent,
    ReflectionPageComponent,
    IntroPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
