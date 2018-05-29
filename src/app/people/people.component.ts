import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers:[MovieService]
})
export class PeopleComponent implements OnInit {
  private peopleList:any[]=[];
  constructor( private movieservice: MovieService) { }

  ngOnInit() {
  	this.fetchPeopleList();
  }
  fetchPeopleList(){
  	this.movieservice.fetchPeopleList().subscribe(
  	(data:Response)=>{
  	 let result=data.json();
  	 this.peopleList=result['results'];

  	},
  	(error)=>console.log(error)
  	)
  }

}
