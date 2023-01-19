import HotMovies from './HotMovies';
import NavBackgroundVideo from './NavBackgroundVideo';
import Navbar from './Navbar'; 
import TrendingMovies from './TrendingMovies';
import PopularMovies from './Popular';
import MyListedMovies from './MyListedMovies';
import OldiesMovies from './OldiesMovies';
import Top10Movies from './Top10Movies';
export default function Browse() {
    const responsive = {
        superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
            items: 5,
            partialVisibilityGutter: 40
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            partialVisibilityGutter: 35
          },
          tablet: {
            breakpoint: { max: 1024, min: 320 },
            items: 3,
            partialVisibilityGutter: 25
          },
          mobile: {
            breakpoint: { max: 320, min: 0 },
            items: 2,
            partialVisibilityGutter: 20
          }
       }
    return(
        <>
         <div className="Streammate flex flex-col">
      <Navbar/>
      {/* <NavBackgroundVideo/> */}
      <div class="flex flex-col gap-12">
      
      <Top10Movies options={responsive}/>
      <HotMovies options={responsive}/>

   <TrendingMovies options={responsive}/>
   <PopularMovies options={responsive} />
   <MyListedMovies options={responsive} />
   <OldiesMovies options={responsive} />
      </div>

     
    </div>
        </>
    );
}