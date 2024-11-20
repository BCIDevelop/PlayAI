export const handlerClickFilter=()=>{
    const filter = document.querySelector('.filter-model-list-container__wrapper')
    const cardContaienr = document.querySelector('.main-section-model-list-container__cards-container')
    filter?.classList.toggle('filter-model-list-container__wrapper--active')
    cardContaienr?.classList.toggle('main-section-model-list-container__cards-container--active')
}