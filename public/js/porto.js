//navbar fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//open-cv
const cvClicked = document.querySelector('#open-cv');
const viewCV = document.querySelector('#resume');
const btnclose = document.querySelector('#close-cv');

cvClicked.addEventListener('click', function(){
    viewCV.showModal();
});

btnclose.addEventListener('click', function(){
    viewCV.close();
});

//read-more4
const readClicked4 = document.querySelector('#read-more4');
const textClicked4 = document.querySelector('#read-more4-text');
const openModal4 = document.querySelector('#open-read4');
const closeDuniatex = document.querySelector('#close4');

readClicked4.addEventListener('click', function(){
    openModal4.showModal();
});

textClicked4.addEventListener('click', function(){
    openModal4.showModal();
});

closeDuniatex.addEventListener('click', function(){
    openModal4.close();
});


//read-more1
const readClicked1 = document.querySelector('#read-more1');
const textClicked1 = document.querySelector('#read-more1-text');
const openModal1 = document.querySelector('#open-read1');
const closeKadesh = document.querySelector('#close1');

readClicked1.addEventListener('click', function(){
    openModal1.showModal();
});

textClicked1.addEventListener('click', function(){
    openModal1.showModal();
});

closeKadesh.addEventListener('click', function(){
    openModal1.close();
});

//read-more2
const readClicked2 = document.querySelector('#read-more2');
const textClicked2 = document.querySelector('#read-more2-text');
const openModal2 = document.querySelector('#open-read2');
const closeMitra = document.querySelector('#close2');

readClicked2.addEventListener('click', function(){
    openModal2.showModal();
});

textClicked2.addEventListener('click', function(){
    openModal2.showModal();
});

closeMitra.addEventListener('click', function(){
    openModal2.close();
});

//read-more3
const readClicked3 = document.querySelector('#read-more3');
const textClicked3 = document.querySelector('#read-more3-text');
const openModal3 = document.querySelector('#open-read3');
const closeLE = document.querySelector('#close3')

readClicked3.addEventListener('click', function(){
    openModal3.showModal();
});

textClicked3.addEventListener('click', function(){
    openModal3.showModal();
});

closeLE.addEventListener('click', function(){
    openModal3.close();
});
