function Show()
{
    let movies=[
        {
          "MovieName": "The Great Adventure",
          "ActorName": "John Smith",
          "ReleaseDate": "2023-01-15"
        },
        {
          "MovieName": "Mystery in the Woods",
          "ActorName": "Emily Johnson",
          "ReleaseDate": "2022-09-28"
        },
        {
          "MovieName": "Love and Destiny",
          "ActorName": "Michael Brown",
          "ReleaseDate": "2023-05-02"
        },
        {
          "MovieName": "City of Shadows",
          "ActorName": "Sophia Williams",
          "ReleaseDate": "2023-03-12"
        },
        {
          "MovieName": "The Last Stand",
          "ActorName": "William Davis",
          "ReleaseDate": "2022-11-07"
        },
        {
          "MovieName": "Echoes of Time",
          "ActorName": "Olivia Wilson",
          "ReleaseDate": "2022-12-19"
        }
      ]

    
      //1. List the movie name along with the actor name of those movies released in the year 2022

      /*const Mdate= movies.filter(x=> x.ReleaseDate.substring(0,4) === '2022');
      const Mname =Mdate.map(x => ({ MovieTitle: x.MovieName, Actorname: x.ActorName}));
      console.log("1. Movie name along with the actor name of those movies released in the year 2022");
      console.log(Mname);*/

      //OR
      console.log("1. Movie name along with the actor name of those movies released in the year 2022");
      
      /*const moviesIn2022 = movies.filter(movie => {
        const releaseDate = new Date(movie.ReleaseDate).getFullYear() === 2022;
        return releaseDate;
      });
      const movieNamesActors = moviesIn2022.map(movie => ({
        "MovieName": movie.MovieName,
        "ActorName": movie.ActorName
      }));
      console.log(movieNamesActors);*/

      const moviesIn_2022 = movies.filter(movie => {
        const releaseDate = new Date(movie.ReleaseDate).getFullYear() === 2022;
        return releaseDate;
      }).map(movie => ({
        "MovieName": movie.MovieName,
        "ActorName": movie.ActorName
      }));
      console.log(moviesIn_2022);

      //OR
      console.log("OR");
      const movies_2022 = movies.filter(x => new Date(x.ReleaseDate).getFullYear() === 2022);                         // Filter the movies released in 2022
      const movie_names_actors = movies_2022.map(x=> `Movie Name : ${x.MovieName} , Actor Name : ${x.ActorName}`);    // Create an array of movie name and actor name
      console.log(movie_names_actors);



      //2. List the movie names released in the year 2023 where the actor is William Davis.

      /*console.log("2. Movie names released in the year 2023 where the actor is William Davis.");
      const Movdate=movies.filter(x=> x.ReleaseDate.substring(0,4) === '2023' && x.ActorName === 'William Davis');
      const Actor=Movdate.map(x => x.MovieName);
      console.log(Actor);*/

      //OR
      console.log("2. Movie names released in the year 2023 where the actor is William Davis.");
      const william_davis_movies_2023 = movies.filter(y=> 
        (new Date(y.ReleaseDate).getFullYear() === 2023 && y.ActorName === "William Davis")
      );     
      const movie_names = william_davis_movies_2023.map(x => x.MovieName);
      console.log(movie_names);
      

      //3. Retrieve the Actor name and release date of the movie “The Last Stand”
      console.log("3. Retrieve the Actor name and release date of the movie The Last Stand ");
      const theLastStand = movies.find(m => m.MovieName === 'The Last Stand');
      if (theLastStand) 
      {
        console.log(`Actor name: ${theLastStand.ActorName}, Release date: ${theLastStand.ReleaseDate}`);
      } 
      else
      {
        console.log('');
      }

      //4. Check whether there is any movie in the list with actor name “John Doe”
      console.log("4. Checking whether there is any movie in the list with actor name John Doe");
      const JohnDoeMovie = movies.some(x => x.ActorName === 'John Doe');
      if (JohnDoeMovie) 
      {
        console.log('John Doe movie found');
      }
      else
      {
        console.log('Movie not found');
      }   
      //OR

      /*const j=movies.find(x => x.ActorName === 'John Doe')
      if (j) 
      {
        console.log(x => x.MovieName);
      }
      else
      {
        console.log('Movie not found');
      }*/


      //5. Display the count of movies where the actor name is "Sophia Williams"
      console.log("5. Display the count of movies where the actor name is Sophia Williams");
      const sophia=movies.filter(x => x.ActorName === 'Sophia Williams');
      console.log("Count=" ,`${sophia.length}`);

      //6. Insert an element as last element
      let NewElement= 
      {
   			"MovieName": "The Final Stage",
    		"ActorName": "John Doe",
   	 		"ReleaseDate": "2022-08-11"
      };
      movies.push(NewElement);
      console.log("6. After insertion",movies);


      //7. Check whether there exists any duplicate movie names present in the array
      console.log("7. Check whether there exists any duplicate movie names present in the array")
      let duplicateFound = false;
      const uniqueMovieNames = [];
      movies.forEach(movie => {
        if (!uniqueMovieNames.includes(movie.MovieName))
        {
          uniqueMovieNames.push(movie.MovieName);    
        }
        else
        {
            duplicateFound = true;        
            console.log("Duplicate movie names found:");
        }
      });

      if (!duplicateFound)        //if value is still false
       {
        console.log("No duplicate movie names found.");
      }


      //8.Create a new array starting from the movie "City of Shadows"
      console.log("8. New array starting from the movie City of Shadows");
      const cityofshadowsIndex=movies.findIndex(x=> x.MovieName === 'City of Shadows');
      if(cityofshadowsIndex > -1)
      {
        const newArray=movies.slice(cityofshadowsIndex);
        console.log(newArray);
      }
      else
      {
        console.log("No movie named 'City of Shadows'!");
      }


      //9. List the distinct actor names in array
      function DistinctActor(movies)
      {
        let unique=[];       //initiallly empty array
        movies.forEach(element => {
            if(!unique.includes(element.ActorName))
            {
                unique.push(element.ActorName);
            }
        });
        return unique;
      }
      console.log("9. Distinct Actors=",DistinctActor(movies));



      //10. Insert an element as next element to movie “Love and Destiny”
      let anotherElement= 
      {
              "MovieName": "Rich & Poor",
              "ActorName": "Johnie Walker",
              "ReleaseDate": "2023-08-11"
      }
      const index=movies.findIndex(x=> x.MovieName === 'Love and Destiny');
      if(index > -1)
      {
        const newArray1= movies.splice(index+1,0,anotherElement);
        console.log("10. After inserting",movies);
      }
      else
      {
        console.log("No movie named 'Love and Destiny. So cannot insert!");
      }
      

      //11. Display the count of distinct actor names in array
      console.log("11. Count of distinct actor names")
      let unique1=[];       //initiallly empty array
        movies.forEach(element => {
            if(!unique1.includes(element.ActorName))
            {
                unique1.push(element.ActorName)
            }
        });
      const actorCount=unique1.length;
      console.log(actorCount);
  

      //12. Remove the movie named  "The Last Stand"
      const i=movies.findIndex(x=> x.MovieName === 'The Last Stand');
      if(i > -1)
      {
        const removemovie=movies.splice(i,1);
        console.log("After removing",movies);
      }
      else
      {
        console.log("Cannot remove because no such movie exists!")
      }
      

      //13. Check whether all the movies are released after 2021 Dec 31
      const checkmovie = movies.every(x => new Date(x.ReleaseDate) > new Date('2021-12-31'));
      console.log("13. Does all the movies are released after 2021 Dec 31?",checkmovie );



      //14. Update movie named "City of Shadows" ‘s release date as  "2023-03-13"
      
      /*const COS=movies.find(x=> x.MovieName === 'City of Shadows');
      if (COS)
      {
        COS.ReleaseDate="2023-03-13";
        console.log("14. Updated release date of City of Shadows=",COS.ReleaseDate);
      }
      else
      {
        console.log('Movie not found');
      }*/

      //OR

      const movieIndex = movies.findIndex(movie => movie.MovieName === 'City of Shadows');
      if (movieIndex) 
      {
        movies[movieIndex].ReleaseDate = '2023-03-13';
        console.log(`Updated release date of ${movies[movieIndex].MovieName} is ${movies[movieIndex].ReleaseDate}`);
      } 
      else 
      {
        console.log('Movie not found.');
      }

      //15. Create a new array of movie names whose movie name length is greater than 10.
      const longMovieNames = movies.filter(x => x.MovieName.length > 10).map(x=> x.MovieName);
      console.log("15. Movie names whose length greater than 10",longMovieNames);

   
}