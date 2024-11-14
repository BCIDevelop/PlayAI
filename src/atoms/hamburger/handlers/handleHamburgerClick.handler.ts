export const hamburgerClicked = ()=>{
    const hamburger = document.querySelector('.navbar-brand__hamburger') as HTMLElement
    hamburger.classList.toggle('navbar-brand__hamburger--active')
    const navSection = document.querySelector('.nav-section-container')
    navSection?.classList.toggle('nav-section-container--active')
}