//import { getSynopses } from '../../redux/imdbState/AsyncImdbSpecificSlice';
import { useNavigate } from 'react-router-dom';

function Card({movies}) {
     const navigate = useNavigate();
    const getSpecificMovie = (movieDetails)=>{
          if(localStorage.singleMovie){
              localStorage.removeItem('singleMovie')
          }
         localStorage.setItem("singleMovie",JSON.stringify(movieDetails))
          navigate("/single-movie");
    }
  return (
    <div className="movie-card" key={movies?.id}  onClick={()=>getSpecificMovie(movies)}>
       <div className="movie-img"><img src={movies?.image?.url}  alt="movies" /></div>
       <h3 className='movie-title'>{movies?.title}</h3>
       <span className="movie-title-type">{movies?.titleType}</span>
    </div>
  )
}

export default Card