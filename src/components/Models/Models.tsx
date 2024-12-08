import { useParams } from "react-router-dom";
import { FetchedAITags } from "../../types/aiTags/fetchedAITags.type";
import { capitalizeText } from "../../utils/capitalizeText";
import './models.css'
import { useEffect, useRef, useState } from "react";
import useRequest from "../../hook/useRequest";
import { handleFetchModel } from "./handlers/handleFetchModel.handler";
const Models = () => {
  type ImageKeys = "TextModels" | "ImageModels" | "AudioModels" | "DefaultModels";
  const images: Record<ImageKeys, JSX.Element> = {
    TextModels: <svg className='nav-section-element__icon model-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"/></svg>,
    ImageModels: <svg className='nav-section-element__icon model-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>,
    AudioModels: <svg className='nav-section-element__icon model-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6C-16 328.4-7.6 409.4 47.5 464.5s136.1 63.5 180.9 18.7c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>,
    DefaultModels: <svg className='nav-section-element__icon model-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"/></svg>,
  };
    const { name } = useParams();
    const controllerRef= useRef<AbortController|null>(null)
    const {navigator,removeUser,showToast} = useRequest()
    let textCapitalized =capitalizeText(name!.replace('-',' '))
    const [data,setData] = useState<FetchedAITags|undefined>(undefined)
  useEffect(()=>{
    textCapitalized =capitalizeText(name!.replace('-',' '))
    handleFetchModel(controllerRef,textCapitalized,navigator,removeUser,showToast,setData)
    return()=>{
      controllerRef.current?.abort()
    }

  },[name])

  return (
    <div className="models-main-container">
      <div className="models-main-container__title-container title-model-container">
        {images[textCapitalized.replace(' ','') as ImageKeys]?images[textCapitalized.replace(' ','') as ImageKeys]:images["DefaultModels"]}
        <h1 className="title-model-container__h1">{data?.name}</h1>
      </div>
      <div className="models-main-container__description description-model-container">
        <h2 className="description-model-container__h2">Overview</h2>
        <p className="description-model-container__description">{data?.description}</p>
        <p className="description-model-container__description">{`For example ${textCapitalized} can be used to:` }</p>
        <ul className="description-model-container__lists lists-model-container">
          {data?.applications.map((element,index) => <li key={`tag${data._id}${index}`} className="lists-model-container__element">{element}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Models
