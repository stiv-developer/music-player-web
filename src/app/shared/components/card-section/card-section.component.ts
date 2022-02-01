import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit {

  // @Input() track: TrackModel = {_id:0,name:'',album:'',url:'',cover:''}
  @Input() track:TrackModel[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
