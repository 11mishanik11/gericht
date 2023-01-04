const burgerBtn = document.querySelector('#burger-btn');
const header = document.querySelector('#header');

const scrollBtn = document.querySelectorAll('#scroll-btn');

burgerBtn.onclick = burgerShow;
function burgerShow() {
    header.classList.toggle('active');
    document.body.classList.toggle('hidden');
}


for (let i = 0; i < scrollBtn.length; i++) {
    scrollBtn[i].onclick = scrollToBlock;
}

function scrollToBlock() {
    event.preventDefault();
    let blockId = this.dataset.element;
    let blockElement = document.querySelector(blockId);
    let blockScrollValue = blockElement.offsetTop;
    window.scrollTo({
        top: blockScrollValue,
        behavior: 'smooth'
      });
}