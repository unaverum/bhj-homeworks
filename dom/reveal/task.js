window.onscroll = showBlock;

function showBlock() {
  const revealBlocks = document.querySelectorAll(`.reveal`);
  const viewport = window.innerHeight;
  revealBlocks.forEach(section => {
    let topBorder = section.getBoundingClientRect().top;
    if (topBorder < viewport) {
        section.classList.add(`reveal_active`);
    } else { 
        section.classList.remove(`reveal_active`);
    }
  })
}