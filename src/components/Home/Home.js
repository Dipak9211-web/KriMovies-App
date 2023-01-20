import { getImdbData } from '../../redux/imdbState/AsyncImdbSlice';
import { useEffect } from 'react';
import './Home.css';
import { useDispatch, useSelector} from 'react-redux'
import Card from '../reUseComponent/Card';
import Loading from '../LoadingComponent/Loading';
//import { getImdbSpecificData } from '../redux/imdbState/AsyncImdbSpecificSlice';

function Home() {
     const dispatch = useDispatch();
     useEffect(()=>{
         dispatch(getImdbData());
      },[]);
      const imdbDatas =  useSelector(state=>state.imdb);
    
  return (
    <>
        <div className="card-container">
               {
                imdbDatas.status==='success'?(
                  imdbDatas.imdbData[0].results.map((movies)=>(
                        <>
                         <Card  movies={movies} remainingMovie={imdbDatas.imdbData[1]} key={movies.id}/>
                         </>
                  ))
                 ):(
                  <Loading/>
                )

               }
               </div>
        </>
  )
}

export default Home