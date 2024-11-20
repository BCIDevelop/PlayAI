
import { useNavigate } from 'react-router-dom'
import { hanldeHomeNavigate } from './handlers/handleHomeNavigate.handler'
import NavModelCard from '../NavModelCard/NavModelCard'
import './navSection.css'
import useFetch from '../../hook/useFetch'
import { FetchedAITags } from '../../types/aiTags/fetchedAITags.type'
const NavSection = () => {
    const navigator = useNavigate()
    const [data] = useFetch<FetchedAITags[]>({fetchOptions:{
        context:"tags",
        method:"GET",
        data:{},
        hasCredentials:true,
        bodyFormat:"row"
    }})
  return (
    <div className='nav-section-container'>
        <div onClick={(e)=>hanldeHomeNavigate<HTMLDivElement>(navigator,e )} className='nav-section-container__intro-container'>
            <svg className='nav-section-element__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"/></svg>
            <p>Introduction</p>
        </div>
        <div className='nav-section-container__models models-nav-section'>
            <h3 className='models-nav-section__h3'>Model Overview</h3>
            <ul className='models-nav-section__list nav-section-list'>
                {data && data.length > 0 && data!.map((element=> <NavModelCard key={element._id} data= {element}></NavModelCard>))}
            </ul>
        </div>
        <div className='nav-section-container__models models-nav-section'>
            <h3 className='models-nav-section__h3'>Glossary</h3>
            <div onClick={(e)=>hanldeHomeNavigate<HTMLDivElement>(navigator,e )} className='nav-section-list__element'>
                <div className='nav-section-element__container'>

                    <svg className='nav-section-element__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                    <p className='nav-section-element__text'> Concepts</p>  
                </div>
            </div>
          
        </div>
       
    </div>
  )
}

export default NavSection
