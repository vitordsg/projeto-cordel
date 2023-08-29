const transicao = document.querySelectorAll('.transicao')
const first_Titulo = document.querySelector('.first-titulo')
const header = document.querySelector('header')
const sombra = document.querySelector('.sombra')
const content = document.querySelector('.content')
const section = document.querySelector('.exemplo')
const img_container = document.querySelector('.imgContainer')
const opacidade = document.querySelectorAll('.opacity')
const border = document.querySelector('.border')

let header_height = header.offsetHeight
let section_height = section.offsetHeight

window.addEventListener('scroll' , () => {
    let scroll = window.pageYOffset
    let sectionY = section.getBoundingClientRect()

    transicao.forEach(element => {
        let velocidade = element.dataset.velocidade;
        element.style.transform = `translateY(${scroll * velocidade}px)`
    })

    opacidade.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height)
    })

    first_Titulo.style.opacity = - scroll / (header_height / 2 ) + 1
    sombra.style.height = `${scroll * 0.5 + 300}px`

    // content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`
    // img_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * - 50 + 50}px)`

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`
})