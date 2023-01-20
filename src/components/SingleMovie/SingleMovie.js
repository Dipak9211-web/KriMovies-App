import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImdbSpecificData } from '../../redux/imdbState/AsyncImdbSpecificSlice'
import Card from '../reUseComponent/Card';

import './singleMovie.css'

function SingleMovie() {
  const dispatch = useDispatch()
  const imdbDatas =  useSelector(state=>state.imdb);
  useEffect(()=>{
      dispatch(getImdbSpecificData())  
  },[])
  const Synopses = useSelector(state=>state.imdbSynopses)
      const SynopsesText = Synopses.imdbSpecificData[0]?.text;
      const shortSynopses =SynopsesText? SynopsesText.substr(0, 1000):"Synopses not available"
   const singleMovieDetails =JSON.parse(localStorage.getItem('singleMovie'))
  
   const filterMovie = imdbDatas.imdbData[0].results.filter((value)=>value.titleType===singleMovieDetails.titleType)

  return (
    <>
    <div className="movie-dtails-container">
        <div className="movie-details">
          <div className="movie-image"><img className='img' src={singleMovieDetails?.image?.url} alt="Avtar" /></div>
          <div className="title-details">
              <h3><b style={{fontFamily:"Cursive"}}> {singleMovieDetails.titleType} Name</b> :{singleMovieDetails?.title}</h3>
              <p>Type: {singleMovieDetails.titleType}</p>
              <h4>Year: {singleMovieDetails?.year}</h4>
          </div>
        </div>
       <div className="movie-synopses">
         <h3 style={{marginTop:"0px", fontFamily:"Cursive"}}>About {singleMovieDetails.titleType}</h3>
          <hr />
        {
          Synopses.status==='success'?<p>Description: {shortSynopses}...</p>:<h3>Loading...</h3>
        }    
        </div> 
    </div>
    <span className='similar-heading'>Similar Movies-</span>
    <div className="similar-movies">
    {
      filterMovie.length?(
        filterMovie.map((movies)=>(
          <Card movies={movies} key={movies.id}/>
        ))
      ):<h3>Loading...</h3>
    }

    </div>
    </>
  )
}

export default SingleMovie