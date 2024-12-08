import microsoft from '../../assets/microsoft.png'
import meta from '../../assets/meta.jpg'
import chatgpt from '../../assets/chatgpt.png'
import google from '../../assets/google.svg'
import logo from '../../assets/playAILogo.svg'
import Search from '../../atoms/search/Search'
import './modelList.css'
import useFetch from '../../hook/useFetch'
import { FetchedAIModelsType } from '../../types/aiModels/fetchedAIModels.type'
import ModelCard from '../../components/ModelCard/ModelCard'
import Filter from '../../components/Filter/Filter'
import { handlerClickFilter } from './handlers/handlerClickFilter.handler'
import Button from '../../atoms/button/Button'

const ModelList = () => {
    const [data,setData] = useFetch<FetchedAIModelsType[]>({fetchOptions:{
        context:"models",
        method:"GET",
        data:{},
        hasCredentials:true,
        bodyFormat:"row"
    }})

  return (
    <div className='model-list-container'>
      <div className='model-list-container__hero hero-model-list-container'>
                <div className='hero-model-list-container__images images-hero-model-container'>
                    <figure className='images-hero-model-container__figure figure-container-hero-model figure-container-hero-mode--microsoft'>
                        <img className='figure-container-hero-model__img' src={microsoft} alt="microsoft" />
                    </figure>
                    <figure className='images-hero-model-container__figure figure-container-hero-model figure-container-hero-mode--chat-gpt'>
                        <img className='figure-container-hero-model__img' src={chatgpt} alt="chatgpt" />
                    </figure>
                    <figure className='images-hero-model-container__figure figure-container-hero-model--logo'>
                        <img className='figure-container-hero-model__img figure-container-hero-model__img--logo' src={logo} alt="logo" />
                    </figure>
                    <figure className='images-hero-model-container__figure figure-container-hero-model figure-container-hero-mode--google'>
                        <img className='figure-container-hero-model__img ' src={google} alt="google" />
                    </figure>
                    <figure className='images-hero-model-container__figure figure-container-hero-model figure-container-hero-mode--meta'>
                        <img className='figure-container-hero-model__img' src={meta} alt="meta" />
                    </figure>
                </div>

                <h1 className='hero-model-list-container__h1'>Explore AI Models</h1>
                <p className='hero-model-list-container__p'>Choose the appropiate model from the list</p>
      </div>
      <div className='model-list-container__main main-section-mdeol-list-container'>
        <div className='main-section-model-list-container__filter filter-model-list-container'>
            <div className='filter-model-list-container__search-container'>
            <Search setData={setData} data={data!} target="name"></Search>
            </div>
            <svg onClick={()=>handlerClickFilter()} className='filter-model-list-container__logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg>
            <div className='filter-model-list-container__wrapper filter-model-list-wrapper-container'>
                <Filter setData={setData}></Filter>
                <div onClick={handlerClickFilter} className='filter-model-list-wrapper-container__button'>

                <Button buttonText='Confirm'></Button>
                </div>
            </div>
        </div>
        <div className='main-section-model-list-container__cards-container'>
            {data && data.length>0 && data.map(element => <ModelCard key={element._id} model={element}></ModelCard>)}
        </div>
      </div>
      
    </div>
  )
}

export default ModelList
