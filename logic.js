const progress = document.getElementById('progress')   /* me busca en el html para llamarlo a j.s */
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')  /* los llamo por clase con query.selector y con all para traerlos todos y me devuelve un array */

let counterSteps = 1

next.addEventListener('click', () => {
    counterSteps++                               /* me le suma una osea contador =1 + 1*/
    if (counterSteps > circles.lenght) {         /*lenght la longitud de mi array*/
        counterSteps = circles.lenght
    }
    update()
})

prev.addEventListener('click', () => {
    counterSteps--                              /* me resta una osea contador =1 + 1*/
    if (counterSteps < 1) {         /*lenght la longitud de mi array*/
        counterSteps = 1
    }
    update()
})

function update() {

    circles.forEach((circle, id) => {
        if(id < counterSteps){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')  


    progress.style.width = (actives.length -1) / (circles.length-1) * 100 + '%'


    if (counterSteps === 1) {

        prev.disabled = true

    } else if (counterSteps === circles.length) {
        next.disabled = true

    } else {
        prev.disabled = false
        next.disabled = false
    }

}





