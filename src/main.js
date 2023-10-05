import { fetchBreeds, fetchCatByBreed } from "./сat-api";


const menuSelect = document.querySelector('.breed-select');
const infoBox = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorMassage = document.querySelector('.error');

menuSelect.addEventListener("change", handler);


//створюємо опції в меню селекта
fetchBreeds().then(cats => {
    createMarkupOptions(cats);
    })
    .catch(error => console.log(error))




function handler(evt) {
    loader.classList.remove('is-hidden')
    errorMassage.classList.add('is-hidden')
    infoBox.classList.add('is-hidden')
    const breedId = evt.currentTarget.value.trim()
    fetchCatByBreed(breedId).then(cat => { 
        infoBox.innerHTML = createMarkupCard(cat)
        loader.classList.add('is-hidden')
        infoBox.classList.remove('is-hidden')
    })    
        .catch(error => {
            errorMassage.classList.remove('is-hidden');
            loader.classList.add('is-hidden');
            menuSelect.classList.add('is-hidden')
            //setTimeout(() => {menuSelect.classList.remove('is-hidden')}, 2000) //не зрозуміла з тз, чи треба при помилці зовати селект
            return console.log(error)
        })
}
    




//розмітка опцій в селекті
function createMarkupOptions(array) {
    const markup = array.map(({ id, name }) => `<option value=" ${id}"> ${name} </option>`).join('');
        return menuSelect.insertAdjacentHTML('beforeend',markup)
}

//створення розмітки картки вибраного кота
function createMarkupCard(array) {
    return array.map(({ url, breeds
    }) =>
        `<img src="${url}" alt="${breeds[0].name}" width="500"><h2>${breeds[0].name}</h2>
      <p class="text">${breeds[0].description}</p>
      <p class="text"><b>Temperament:</b>${breeds[0].temperament}</Temperament:b> </p>`).join('');
}