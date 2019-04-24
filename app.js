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
