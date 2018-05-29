import { Pipe, PipeTransform } from '@angular/core';  
@Pipe({name: 'searchMovie',
pure : false
}) 

export class SearchMovieFilter implements PipeTransform { 
     transform(movies: any, key: string){
   
	  if(movies.length==0)
	  return movies;
	  const movieFilterArray = [];
	  for(let p of movies){
	  
	  	if(p.title ==key){
	  		movieFilterArray.push(p)
	  	}
	  	console.log(movieFilterArray);
	  }
	  return movieFilterArray;
   }
} 