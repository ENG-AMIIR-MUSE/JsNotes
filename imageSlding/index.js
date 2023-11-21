let sliders  = document.querySelectorAll(".slide")
let counter = 0;
let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
console.log(sliders)
sliders.forEach((slides,index)=>{
    slides.style.left =  `${index * 100}%`
})

const slideImage  = ()=>{
    sliders.forEach((slide,index)=>{
        slide.style.transform =  `translateX(-${counter * 100}%)`
        console.log('index',index)
        console.log(`${counter} * 100 = ${counter * 100}` )
    })
}
const goNext  = ()=>{
    // alert()
    counter++ 
    slideImage()
}
const goPrev = ()=>{
    counter-- 
    slideImage()
}