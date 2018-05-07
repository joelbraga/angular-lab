import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MusicService } from './music.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [MusicService]
})
export class SharedModule { }
