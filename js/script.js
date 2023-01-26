let burgerBtn = document.querySelector('#burger-btn');
let header = document.querySelector('#header');
let scrollBtn = document.querySelectorAll('[data-btn-scroll]');

// -------------------
window.onscroll = headerFixed;

// -------------------
burgerBtn.onclick = () => {
    header.classList.toggle('active');
    document.querySelector('body').classList.toggle('hidden')
};

// -------------------
for (let i = 0; i < scrollBtn.length; i++) {
    scrollBtn[i].onclick = scrollToBlock;
}

// Скролл до блока по нажатию
function scrollToBlock(event) {
    event.preventDefault();
    let blockId = this.dataset.btnScroll;
    let block = document.querySelector(blockId)
    let blockScrollValue = block.offsetTop - header.offsetHeight;

    header.classList.remove('active')
    document.body.classList.remove('hidden')
    
    window.scrollTo({
        top: blockScrollValue,
        behavior: 'smooth'
    });
}

// Fixed header
function headerFixed() {
    let scrollTopCount = window.scrollY;
    let heightHeader = header.offsetHeight;

    if(scrollTopCount >= heightHeader) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}











// JQuery ---------------------------------------------------
$( window ).on( "load", function() { 

// Slick slider
    $('.slider-intro').slick({
        fade: true,
        arrows: false,

        autoplay: true,
        autoplaySpeed: 5000,
        swipe: false,
        draggable: false,

        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 15,

        dots: true,
        appendDots: (".intro__wrapper")
      });
 });
