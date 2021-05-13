import './styles.css';
import getData from "./apiService";
import image from "./templates/image.hbs";


const refs = {
  input: document.querySelector('#search-form'),
  gallery: document.querySelector(".gallery"),
  button: document.querySelector(".button"),
  body: document.querySelector("body")
}

refs.input.addEventListener('submit', searchImages);
refs.button.addEventListener('click', fetchHits) ;

function searchImages(e){
    e.preventDefault();
     const form = e.currentTarget;

    getData.query = form.elements.query.value;
    
   getData.resetPage();

   refs.gallery.innerHTML = '' ;

   fetchHits();

    form.reset() ;
}



function fetchHits(){

    getData.fetchApi().then(hits => {
        renderImageCard(hits);


       setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth'
        })
           
       }, 1000);

        }).catch(error=>console.log('sorry, ERROR')).finally(() =>{

        });

}



function renderImageCard(hits){
    const markup = image(hits);

    refs.gallery.insertAdjacentHTML('beforeend', markup)
}
