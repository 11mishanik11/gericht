let burgerBtn = document.querySelector('#burger-btn');
let header = document.querySelector('#header');
let scrollBtn = document.querySelectorAll('#scroll-btn');

// -------------------
window.onscroll = headerFixed;

// -------------------
burgerBtn.onclick = () => {
    addClassHeader('active', true);
};

// -------------------
for (let i = 0; i < scrollBtn.length; i++) {
    scrollBtn[i].onclick = scrollToBlock;
}


// Добавление класса в шапку
function addClassHeader(className, hiddenBody = false) {
    header.classList.toggle(className);

    // Если второй аргумент "true"
    if(hiddenBody) {
        document.body.classList.toggle('hidden');
    }
}

// Скролл до блока по нажатию
function scrollToBlock(event) {
    event.preventDefault();
    let blockId = this.dataset.element;
    let blockElement = document.querySelector(blockId);
    let blockScrollValue = blockElement.offsetTop - header.offsetHeight;
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
