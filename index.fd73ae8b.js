!function(){//export { fetchBreeds, fetchCatByBreed };
let e="https://api.thecatapi.com/v1",s="live_dUrCbvWl3gvkPdcDZGQpldZZUJrft6N4eeuhRFreMQE1flDI0IVlKPsxLUR1Pu5X",t=document.querySelector(".breed-select"),i=document.querySelector(".cat-info"),d=document.querySelector(".loader"),n=document.querySelector(".error");t.addEventListener("change",function(r){d.classList.remove("is-hidden"),n.classList.add("is-hidden"),i.classList.add("is-hidden");let a=r.currentTarget.value.trim();fetch(`${e}/images/search?api_key=${s}&breed_ids=${a}`).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>{if(0===e.length)throw Error();i.innerHTML=e.map(({url:e,breeds:s})=>`<img src="${e}" alt="${s[0].name}" width="500"><h2>${s[0].name}</h2>
      <p class="text">${s[0].description}</p>
      <p class="text"><b>Temperament:</b>${s[0].temperament}</Temperament:b> </p>`).join(""),d.classList.add("is-hidden"),i.classList.remove("is-hidden")}).catch(e=>(n.classList.remove("is-hidden"),d.classList.add("is-hidden"),t.classList.add("is-hidden"),setTimeout(()=>{t.classList.remove("is-hidden")},2e3),console.log(e)))}),fetch(`${e}/breeds?api_key=${s}`).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>{//розмітка опцій в селекті
(function(e){let s=e.map(({id:e,name:s})=>`<option value=" ${e}"> ${s} </option>`).join("");t.insertAdjacentHTML("beforeend",s)})(e),t.classList.remove("is-hidden"),d.classList.add("is-hidden")}).catch(e=>{n.classList.remove("is-hidden"),d.classList.add("is-hidden"),t.classList.add("is-hidden"),console.log(e)})}();//# sourceMappingURL=index.fd73ae8b.js.map

//# sourceMappingURL=index.fd73ae8b.js.map