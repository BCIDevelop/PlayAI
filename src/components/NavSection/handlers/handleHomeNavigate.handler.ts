import { NavigateFunction } from "react-router-dom";

export const hanldeHomeNavigate = <T extends HTMLElement,>(navigator:NavigateFunction, e: React.MouseEvent<T>)=>{
    const element = e.currentTarget as T
    const textsElements = document.querySelectorAll('.nav-section-container p')
    const svgElement = element.querySelector('svg')
    const svgElements = document.querySelectorAll('svg')
    const textElement = element.querySelector('p')
    const routes = ['/home','/home/models/text-models','/home/models/image-models','/home/models/audio-models','/home/concepts']
    svgElements.forEach((svg)=>{
        svg.classList.remove('nav-section-container-image--active')
    })
    textsElements.forEach((text,index)=>{
        if(text === textElement) {
            textsElements[index].classList.add('nav-section-containe-text--active')
            navigator(routes[index])
        }
        else{
            textsElements[index].classList.remove('nav-section-containe-text--active')
        }
    })
    svgElement?.classList.add('nav-section-container-image--active')

}