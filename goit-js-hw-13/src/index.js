import './styles.css';
import getData from "./apiService";
import image from "./templates/image.hbs";


const refs = {
  input: document.querySelector('#search-form'),
  gallery: document.querySelector(".gallery"),
  buttonLoad: document.querySelector(".button-load"),
  buttonMore: document.querySelector(".button-more"),
  body: document.querySelector("body")
}

refs.input.addEventListener('submit', searchImages);

refs.buttonMore.addEventListener('click', fetchHits) ;

function searchImages(e){
    e.preventDefault();
     const form = e.currentTarget;

    getData.query = form.elements.query.value;
    
   getData.resetPage();

   refs.gallery.innerHTML = '' ;

   fetchHits();

  form.reset();
  show();
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


function  show() {
    refs.buttonMore.classList.remove('is-hidden');
}

