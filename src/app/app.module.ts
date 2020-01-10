import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeInjectables } from './youtube-search/youtube-injectables';
import { SearchBoxComponent } from './youtube-search/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [YoutubeInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
