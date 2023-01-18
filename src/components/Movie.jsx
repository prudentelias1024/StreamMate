    import { Card  } from "@material-tailwind/react";

    import MockMoviesImage from '../mvie.jpg'
    function Movie({movies}) {
        return(
            <div className="movie w-full h-full pl-3">
                
              <img className="rounded-lg h-[15em] object-cover  " src={MockMoviesImage} alt="Movie"/>
           
                   </div>
        );
    }
    export default Movie;