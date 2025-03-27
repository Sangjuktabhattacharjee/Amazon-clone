const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelector('.control-prev')
const next_btn = document.querySelector('.control-next')

let a=0;
//sliding prop
function changeSlide(){
  for(let i=0; i<imgs.length; i++){
    imgs[i].style.display="none";
  }
  imgs[a].style.display="block";
}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
  if(a>0){
    a--;
  }else{
    a= imgs.length-1;
  }
  changeSlide();
})
next_btn.addEventListener('click', (e)=>{
  if(a< imgs.length-1){
    a++;
  }else{
    a= 0
  }
  changeSlide();
})
const scrollContainer= document.querySelectorAll('.product')
for(const item of scrollContainer){
  item.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    item.scrollLeft  += evt.deltaY
  })
}
