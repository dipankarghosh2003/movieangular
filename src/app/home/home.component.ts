import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {MovieService} from '../movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[MovieService]
})
export class HomeComponent implements OnInit {
	private movies:any[]=[];
  constructor(private movieService : MovieService) { }

  ngOnInit() {
  //let data=this.movieService.fetchTopRated();
  //console.log(data);
  this.fetchTopMovies();
  }

  fetchTopMovies(){
  	this.movieService.fetchTopRated().subscribe(
  	(data:Response)=>{
  	console.log(data.json());
  	let dataval = data.json();
  	this.movies=dataval['results'];
  	//console.log(this.movies);
  	},
  	(error)=>console.log(error)
  	);
  }

}
