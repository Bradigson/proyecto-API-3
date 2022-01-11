let inputPokemon = document.querySelector("#input-pokemon");
let pokemonImg = document.querySelector(".pokemon-img");

let btnSearch = document.querySelector("#btn-search");
btnSearch.addEventListener("click",()=>{
  let inputPokemonChange = inputPokemon.value.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${inputPokemonChange}`;
  fetch(url)
  .then(data=>data.json())
  .then(data1=>{
    
    if(inputPokemonChange == ""){
      alert("Pokemon's name cannot be empty");
    inputPokemon.value =""; 

    }else{
      
    let img = document.createElement('img');
    img.src = data1.sprites.front_default;
    pokemonImg.appendChild(img);
    //name
    let ulName = document.createElement("ul");
    let liName = document.createElement('li');
    liName.innerHTML = data1.species.name;
    ulName.appendChild(liName);
    pokemonImg.appendChild(ulName);
    inputPokemon.value =""; 
    // delete Pokemon
    let btnDeletePokemon = document.createElement("button");
    btnDeletePokemon.innerHTML = "X";
    btnDeletePokemon.classList.add("btnDeletePokemon");
    pokemonImg.appendChild(btnDeletePokemon);
    btnDeletePokemon.onclick = function(){
      pokemonImg.removeChild(img);
      pokemonImg.removeChild(ulName);
      btnDeletePokemon.style.display = "none";
    }
    }
  })
  .catch(error=>{
    
      alert("Pokemon not found")
      console.log(error);
    inputPokemon.value =""; 

    
  })



})