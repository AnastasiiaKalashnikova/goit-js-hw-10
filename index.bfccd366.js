//export { fetchBreeds, fetchCatByBreed };
const e="https://api.thecatapi.com/v1",t="live_dUrCbvWl3gvkPdcDZGQpldZZUJrft6N4eeuhRFreMQE1flDI0IVlKPsxLUR1Pu5X",s=document.querySelector(".breed-select"),i=document.querySelector(".cat-info"),r=document.querySelector(".loader"),n=document.querySelector(".error");s.addEventListener("change",function(d){r.classList.remove("is-hidden"),n.classList.add("is-hidden"),i.classList.add("is-hidden");let a=d.currentTarget.value.trim();fetch(`${e}/images/search?api_key=${t}&breed_ids=${a}`).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>{i.innerHTML=e.map(({url:e,breeds:t})=>`<img src="${e}" alt="${t[0].name}" width="500"><h2>${t[0].name}</h2>
      <p class="text">${t[0].description}</p>
      <p class="text"><b>Temperament:</b>${t[0].temperament}</Temperament:b> </p>`).join(""),r.classList.add("is-hidden"),i.classList.remove("is-hidden")}).catch(e=>(n.classList.remove("is-hidden"),r.classList.add("is-hidden"),s.classList.add("is-hidden"),console.log(e)))}),fetch(`${e}/breeds?api_key=${t}`).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>{//розмітка опцій в селекті
(function(e){let t=e.map(({id:e,name:t})=>`<option value=" ${e}"> ${t} </option>`).join("");s.insertAdjacentHTML("beforeend",t)})(e)}).catch(e=>console.log(e));//# sourceMappingURL=index.bfccd366.js.map

//# sourceMappingURL=index.bfccd366.js.map
