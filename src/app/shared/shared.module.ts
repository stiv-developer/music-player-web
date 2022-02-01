import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { RouterModule } from '@angular/router';
import { CardSectionComponent } from './components/card-section/card-section.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';
@NgModule({
  declarations: [
    SideBarComponent,
    CardPlayerComponent,
    CardSectionComponent,
    MediaPlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IvyCarouselModule
  ],
  exports: [
    SideBarComponent,
    CardPlayerComponent,
    CardSectionComponent,
    MediaPlayerComponent
  ]
})
export class SharedModule { }
