import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class MovieService
{
	
	constructor(private http : Http){
		
	}
	
	fetchTopRated(){
		
		return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=65de186cb5d37d6bff223b903dabf97b&language=en-US&page=1');
	}
	fetchTvShows(){
		return this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=65de186cb5d37d6bff223b903dabf97b&language=en-US&page=1');
	}
	fetchPeopleList(){
		return this.http.get('https://api.themoviedb.org/3/person/popular?api_key=65de186cb5d37d6bff223b903dabf97b&language=en-US&page=1');
	}
	fetchPersonDetails(id){
		console.log(id);
		return this.http.get('https://api.themoviedb.org/3/person/'+id+'?api_key=65de186cb5d37d6bff223b903dabf97b&language=en-US');
		
		//https://api.themoviedb.org/3/person/16851?api_key=65de186cb5d37d6bff223b903dabf97b&language=en-US

	}
	
}