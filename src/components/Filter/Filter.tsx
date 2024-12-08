import { useEffect, useState } from "react"
import { handleFilter } from "./handlers/handleFilter.handler"
import useRequest from "../../hook/useRequest"
import './filter.css'
const Filter = <T,>({setData}:{setData:React.Dispatch<React.SetStateAction<T[] | null>>}) => {
    const [selectTag,setSelectedTag]= useState<string[]>([])
    const [selectArchitecture,setSelectedArchitecture]= useState<string[]>([])
    const {showToast,removeUser,navigator,controllerRef} = useRequest()
    useEffect(()=>{
      return ()=> {
        controllerRef.current?.abort()
      }
    },[])
  return (
    <div className="filter-container">
      <div className="filter-container__tags tags-filter-container">
        <p className="filter-container__p">Models Type</p>
        <form className="filter-container__form form-tags-filter-container" id='form-filter-tag' onChange={(e )=>handleFilter(e ,setSelectedTag,selectTag,selectArchitecture,setData,showToast,removeUser,navigator,controllerRef)}>
         
            <label htmlFor="Audio Generation">
            <input type="checkbox" name="Audio Generation"/>
            Audio Generation
            </label>
            <label htmlFor="Image Models">
            <input type="checkbox" name="Image Models"/>
            Image Models
            </label>
            <label htmlFor="Object Detection">
            <input type="checkbox" name="Object Detection"/>
            Object Detection
            </label>
            <label htmlFor="Generative Models">
            <input type="checkbox" name="Generative Models"/>
            Generative Models
            </label>
            <label htmlFor="Text Models">
            <input type="checkbox" name="Text Models"/>
            Text Models
            </label>
        </form>
      </div>
      <div className="filter-container__architecture architecture-filter-container">
        <p className="filter-container__p">Architecture Type</p>

        <form className="filter-container__form" id='form-filter-architecture' onChange={(e)=>handleFilter(e,setSelectedArchitecture,selectTag,selectArchitecture,setData,showToast,removeUser,navigator,controllerRef)}>
         
            <label htmlFor="CNN">
            <input type="checkbox" name="CNN"/>
            CNN
            </label>
            <label htmlFor="RNN">
            <input type="checkbox" name="RNN"/>
            RNN
            </label>
            <label htmlFor="Transformers">
            <input type="checkbox" name="Transformers"/>
            Transformers
            </label>
        </form>
      </div>
    </div>
  )
}

export default Filter
