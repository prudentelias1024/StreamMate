import Movie from "./Movie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopMovie from "./Movie";
 function Top10Movies(props) {
   const {options} = props
    return(  
        <div className="hot ml-12">
            <p className="font-[Mulish] font-bold text-2xl mb-2 ml-4">Top 10 Movies</p>
           <Carousel partialVisible={true} swipeable={true} responsive={options} className>

            <Movie  />
            <Movie  />
            <Movie  />
            <Movie  />
            <Movie  />
            <Movie  />
            <Movie  />
            <Movie  />
            <Movie  />
            <Movie  />
           </Carousel>

        </div>
  
   );
   
}
export default Top10Movies;