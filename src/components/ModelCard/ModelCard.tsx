import { FetchedAIModelsType } from "../../types/aiModels/fetchedAIModels.type"
import './modelCard.css'

const ModelCard = ({model}:{model:FetchedAIModelsType}) => {
  console.log(model)
  return (
    <div className="model-card-container">
      <div className="model-card-container__title title-model-card-container">
        <h2 className="title-model-card-container__h2">{model.name}</h2>
        <p className="title-model-card-container__p">{model.purpose}</p>

      </div>
      <div className="model-card-container__information information-model-card-container">
        <div>
        <p className="information-model-card-container__type">Model Type</p>
        <p className="information-model-card-container__tag tag-information-model-card"> {model.tags[0]} </p>
        </div>
       
        <p className="information-model-card-container__p">{model.typeAI}</p>
        <div className="information-model-card-container__circle circle-model-card-container">
        <svg className="circle-model-card-container__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </div>
      </div>
    </div>
  )
}

export default ModelCard