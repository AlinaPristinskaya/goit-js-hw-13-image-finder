import './sass/main.scss';

import NewsApiService from "./apiServis";
import imageCard from "./template/imageCard.hbs";






const searchForm=document.querySelector('.search-form');
const loadMoreBtn=document.querySelector('[data-action="load-more"]');
const hitsContainer=document.querySelector('.gallery');
searchForm.addEventListener('submit',onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

const newsApiService =new NewsApiService();
console.log(newsApiService);
let length='';

function onSearch(e){
  
  e.preventDefault();
  console.log(newsApiService);
  newsApiService.query=e.currentTarget.elements.query.value;
 
  newsApiService.resetPage();
  hitsContainer.innerHTML="";
 
  newsApiService.fetchArticles().then(appendHitsMarkup);
  


}

function onLoadMore(){
  if(length===12){
    newsApiService.fetchArticles().then(appendHitsMarkup);
  }
    

}
function appendHitsMarkup(hits){
 
  hitsContainer.insertAdjacentHTML('beforeend',imageCard(hits));
 length=hits.length;
  if(hits.length <12 ){
    
    element.textContent="Это были все варианты.Попробуйте сделать другой запрос"
  } else{
    
    element.textContent=""
  }
  console.log(length)
  return length;  
 

}
const element = document.getElementById("box");

var hiddenElement = document.getElementById("box");
var btn = document.querySelector('.label');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "end", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);