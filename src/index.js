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


function onSearch(e){
  e.preventDefault();
  newsApiService.query=e.currentTarget.elements.query.value;
 /*  console.log(e.currentTarget.elements.query.value);
  console.log(newsApiService.query); */
  newsApiService.resetPage();
  hitsContainer.innerHTML="";
  newsApiService.fetchArticles().then(appendHitsMarkup);
  


}

function onLoadMore(){
  newsApiService.fetchArticles().then(appendHitsMarkup);

}
function appendHitsMarkup(hits){
  hitsContainer.insertAdjacentHTML('beforeend',imageCard(hits));

}

const element = document.getElementById('.photo-card');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});