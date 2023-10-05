import {fetchBreeds, fetchCatByBreed} from './сat-api';

const menuSelect = document.querySelector('.breed-select');
const infoBox = document.querySelector('.cat-info');
menuSelect.addEventListener("change", handler);



fetchBreeds().then(cats => {
    createMarkupOptions(cats);
    
    })
    .catch(error => console.log(error))


function handler(evt) {
    const breedId = evt.currentTarget.value
    console.dir(breedId) //достукались до ід вибраного кота
    fetchCatByBreed(breedId).then(cat => createMarkupCard(cat)//console.log(data)//createMarkupCard(cat)
    )    
    .catch(error => console.log(error))
}


    
//fetchCatByBreed(breedId)}
    




//розмітка опцій в селекті
function createMarkupOptions(array) {
    const markup = array.map(({ id, name }) => `<option value=" ${id}"> ${name} </option>`).join('');
        return menuSelect.insertAdjacentHTML('beforeend',markup)
}

//створення розмітки картки вибраного кота
function createMarkupCard(array) {
    const markup = array.map(({ name, temperament, description}) => `<h2>${name}</h2>
      <p>${description}</p>
      <p><b>Temperament:</b>${temperament}</Temperament:b> </p>`).join('');
    return infoBox.insertAdjacentHTML('beforeend',markup)
}