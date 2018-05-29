import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MovieService} from '../movie.service';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
  providers:[MovieService]
})
export class PersonDetailsComponent implements OnInit {
	private personDetailsData:any[]=[];
	private personId : number = null;
  constructor(private router : Router,private route: ActivatedRoute,private movieService: MovieService) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
       this.personId = +params['personId']; // (+) converts string 'id' to a number
       this.personDetails(this.personId);
       // In a real app: dispatch action to load the details here.
    });
  console.log(this.personId);
  
  }

  personDetails(id){
  	this.movieService.fetchPersonDetails(id).subscribe(
  	(data:Response)=>{
  		let response=data.json();
  		this.personDetailsData=response;
  		console.log(this.personDetailsData);
  	},
  	(error)=>console.log(error)
  	);
  }

}
