const transicao = document.querySelectorAll('.transicao')
const firstTitulo = document.querySelectorAll('.first-titulo')

window.addEventListener('scroll' , () => {
    let scroll = window.pageYOffset
    
    transicao.forEach(element => {
        let velocidade = element.dataset.velocidade;
        element.style.transform = `translateY(${scroll * velocidade}px)`
    })
})