export default class NewsApiService{
    constructor(){
        this.searchQuery='';
        this.page=1;
    }
    fetchArticles(){
        console.log(this);
        const MY_KEY=`21851027-176a1d26dd1c513dea811d525`;
        const url =`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${MY_KEY}`;
        return fetch(url).then(r=>r.json())
         .then(data=>{
             this.incrementPage();
             return data.hits;
            });
        }

    incrementPage(){
        this.page+=1;
    }
    resetPage(){
        this.page=1;
    }

    get query(){
        return this.searchQuery;
    }
    set query(newQyery){
        this.searchQuery=newQyery;

    }
}


 
 
 
 
  