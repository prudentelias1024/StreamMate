
import './App.css';
import HotMovies from './components/HotMovies';
import NavBackgroundVideo from './components/NavBackgroundVideo';
import Navbar from './components/Navbar'; 
import TrendingMovies from './components/TrendingMovies';
import PopularMovies from './components/Popular';
import MyListedMovies from './components/MyListedMovies';
import OldiesMovies from './components/OldiesMovies';
import Top10Movies from './components/Top10Movies';
function App() {
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
  return (
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
  );
}

export default App;
