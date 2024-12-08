
import './progressBar.css'

const ProgressBar = ({numberQuestion,currentQuestion}:{numberQuestion:number,currentQuestion:number|null}) => {
   

  return (
    <div className='progress-bar-container'>
        {Array.from({length:currentQuestion!}).map((_,index)=><div  style={{ width: `calc((100% - 5px * ${numberQuestion-1}) / ${numberQuestion})` }} key={`progress-bar-${index}`} className='progress-bar-container__element'></div>) }
      
    </div>
  )
}

export default ProgressBar
