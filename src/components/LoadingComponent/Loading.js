import './loading.css'
import LoadingImg from '../../images/loading-waiting.gif';
function Loading() {
  return (
        <div className="loading-img">
            <img src={LoadingImg} alt="Loading..." />
        </div>
  )
}

export default Loading