const navs= document.querySelector('#navs');

navs.addEventListener('click',(e)=>{
   
    if(e.target.classList.contains('nav-link')){
          document.querySelector('#navItems').classList.toggle("collapse");
}
    
});


document.querySelector('button').addEventListener('click',()=>{
    document.querySelector('#navItems').classList.toggle("collapse");
    document.querySelector("#navItems").classList.add('smooth');
});


// the modal section
const navbar=document.querySelector('nav');
const modal= document.getElementById('modal');
const signNav= document.getElementById('sign');
signNav.addEventListener('click',()=>{
    navbar.style.visibility='hidden';
    navbar.style.pointerEvents='none';
    modal.style.visibility='visible';
    modal.style.pointerEvents='all';
    document.documentElement.style.overflow='hidden';
});

const crossIcon=document.querySelector('.cross');

crossIcon.addEventListener('click',reset);

function reset(){
    navbar.style.visibility='visible';
    navbar.style.pointerEvents='all';
    modal.style.visibility='hidden';
    modal.style.pointerEvents='none';
    document.documentElement.style.overflow='scroll';
    document.documentElement.scrollTop='0';
}
