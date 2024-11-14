import NavigationCard from '../NavigationCard/NavigationCard'
import FlowCards from '../FlowCards/FlowCards'
import block from '../../assets/blocks.png'
import explore from '../../assets/explore.png'
import model from '../../assets/modelflow.png'
import './introduction.css'
const Introduction = () => {
  return (
    <div className='introduction-container'>
       <div className='introduction-container__header header-introduction-container '>
          <svg className='header-introduction-container__image' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"/></svg>
          <p className='header-introduction-container__text'>Introduction</p>
       </div>
       <div className='introduction-container__user-flow introduction-user-flow-container'>
         <h2 className='introduction-user-flow-container__title'>Welcome</h2>
         <p className='introduction-user-flow-container__text'> Welcome to PLAYAI, a platform to begin your path to achieve your first AI project, follow our steps to decide the model that best fits your problem</p>
         <div className='introduction-user-flow-container__cards cards-introduction-user-flow-container'>
            
            <FlowCards image={block} routes={[{name:"Know the concepts",route:"/home/concepts"}]}></FlowCards>
            <FlowCards image={explore} routes={[{name:"Explore your model",route:"/playground"},{name: "Evaluate the model",route:"/home/models/text-models"}]}></FlowCards>
            <FlowCards image={model} routes={[{name:"Use the model",route:"/models"}]}></FlowCards>
         </div>
       </div>
       <div className='introduction-container__featured featured-introduction-container'>
          <h2 className='featured-introduction-container__h2'>Featured Models</h2>
          <NavigationCard to='/home/text-models'></NavigationCard>
       </div>
    </div>
  )
}

export default Introduction
