import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';
import { TrackService } from '../services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  trackTrending: Array<TrackModel> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll();
  }

  async loadDataAll(): Promise<any> {
    this.trackTrending = await this.trackService.getAllTracks$().toPromise()
  }

}
