import { api } from "./axius.js";

const createElements = (obj) => {
    const li = document.createElement("li");
    const pRua = document.createElement("p");
    const pBairro = document.createElement("p");
    const pCidade = document.createElement("p");
    const pEstado = document.createElement("p");
    const button = document.createElement("button");

    li.classList.add("gap-5","bg-yellow-400","p-5","text-center", "rounded-[8px]")

    button.classList.add("button_delete");
 
    pRua.innerText = `Logradouro: ${obj.data.logradouro}`;
    pBairro.innerText = `Bairro: ${obj.data.bairro}`;
    pCidade.innerText = `Cidade: ${obj.data.localidade}`;
    pEstado.innerText =`Estado: ${obj.data.uf}`;

    li.append(pRua,pBairro,pCidade,pEstado,button);

    return li
}

const renderElements = () => {

    const buttonAdd = document.querySelector(".button_add").addEventListener("click", async() => {
        const input = document.querySelector("input");
            const baseApi = await api.get(`${input.value}/json`)
            console.log(baseApi.data);

            if(baseApi.data.erro !== true){
            const ul = document.querySelector("ul");

            ul.appendChild(createElements(baseApi));


            localStorage.setItem("@buscas", JSON.stringify(baseApi))   
            }else{
            alert("Cep não encontrado")
            }
    })
};

const verifica = () => {
const buscaLocalStorage = JSON.parse(localStorage.getItem("@buscas"));

if(buscaLocalStorage){
   const ul = document.querySelector("ul");

    return ul.appendChild(createElements(buscaLocalStorage))
}
}
renderElements()
verifica()
