import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css'],
  providers:[MovieService]
})
export class TvshowsComponent implements OnInit {
	private tvShows:any[]=[];
  constructor(private movieservice : MovieService) { }

  ngOnInit() {
  this.loadTvShows();
  }

  loadTvShows(){
  	this.movieservice.fetchTvShows().subscribe(
  	(data:Response)=>{
  		let response=data.json();
  		this.tvShows=response['results'];
  	},
  	(error)=>console.log(error)
  	)
  }

}
