export const handleClickCaveat = ()=>{
    const dropDown = document.querySelector('.user-container-navbar__dropdown')  as HTMLElement
    dropDown.classList.toggle('user-container-navbar__dropdown--active')
}