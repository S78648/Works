const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

document.querySelector('.footer h2').addEventListener('click',()=>{
    scroll.scrollTo(0)
})

function loading(){
    let tl = gsap.timeline()

    tl.to('#yellow1',{
        top:"-100%",
        delay:0.5,
        duration:0.5,
        ease:"expo.out"
    })
    
    tl.from('#yellow2',{
        top:"100%",
        delay:0.5,
        duration:0.5,
        ease:"expo.out"
    },"anime")
    
    tl.to("#loader h1",{
        delay:0.6,
        duration:0.5,
        color:"black"
    },"anime")
    
    tl.to("#loader",{
        opacity:0
    },"hide")

    tl.to("#loader",{
        display:"none"
    },"hide")
    
}

loading();

let elems = document.querySelectorAll('.elem');
let page2 = document.querySelector('#page2');

elems.forEach((ele)=>{
    ele.addEventListener('mouseenter',()=>{
        let dataimg = ele.getAttribute('data-img');
        page2.style.backgroundImage = `url(${dataimg})`;
    });
})


