// jquery

// ao carregar o documento
$(document).ready(() => {

    // ao rolar a página
    $(window).scroll(() => {
       changeBackgroundHeader();
    });
 
    // ao alterar as proporções do browser
    $(window).resize(() => {
       changeBackgroundHeader();
    });
 
    changeBackgroundHeader();
 });
 
 // efeito background header (Jquery)
 function changeBackgroundHeader() {
    const header = $('header');
    const offesetY = $(window).scrollTop();
    const mlt = 0.5;
 
    if (offesetY > (header.height() * mlt)) {
       header.addClass('--background-black');
       return;
    }
 
    header.removeClass('--background-black');
 }
 
 
 // javascript puro
 
 // window.addEventListener('load', () => {
 //    changeBackgroundHeaderJs();
 // });
 
 // window.addEventListener('resize', () => {
 //    changeBackgroundHeaderJs();
 // });
 
 // window.addEventListener('scroll', () => {
 //    changeBackgroundHeaderJs();
 // });
 
 // function changeBackgroundHeaderJs() {
 //    const header = document.getElementsByTagName('header')[0];
 //    const offesetY = document.documentElement.scrollTop || document.body.scrollTop;
 //    const mlt = 0.5;
 
 //    if (offesetY > (header.clientHeight * mlt)) {
 //       header.classList.add('--background-black');
 //       return;
 //    }
 
 //    header.classList.remove('--background-black');
 // }
 