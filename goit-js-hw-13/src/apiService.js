const apiKey = '21551993-ac0c953930521d8ec489a1c57' ;

export default {
    searchQuery: '',
    page: 1,
     fetchApi(){
    
        const url = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal' ;
      
        return fetch(`${url}&q=${this.searchQuery}&page=${this.page}&per_page=6&key=${apiKey}`)
        .then(response=>response.json())
        .then(({hits}) => {
            this.page += 1 ;
            return hits;
        }).catch(error =>console.log(error))
        
    },
    resetPage(){
        this.page = 1;
    },
    get query(){
        return this.searchQuery;
    },
    set query(value){
        this.searchQuery = value;
    }

}

