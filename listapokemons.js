function getPokemons() {
    return [
        {
            nome: 'Pikachu',
            tipo: 'eletric',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
        },
        {
            nome: 'Raichu',
            tipo: 'eletric',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png'
        },
        {
            nome: 'Caterpie',
            tipo: 'bug',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png'
        },
        {
            nome: 'Weedle',
            tipo: 'bug',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png'
        },
        {
            nome: 'Pidgey',
            tipo: 'normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png'
        },
        {
            nome: 'Pidgeotto',
            tipo: 'normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png'
        },
        {
            nome: 'Squirtle',
            tipo: 'water',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
        },
        {
            nome: 'Blastoise',
            tipo: 'water',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'
        },
       
        {
            nome: 'Bulbasaur',
            tipo: 'grass',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        },
        {
            nome: 'Ivysaur',
            tipo: 'grass',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
        },
        {
            nome: 'Charmander',
            tipo: 'fire',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
        },
        {
            nome: 'Charizard',
            tipo: 'fire',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
        },
        {
            nome: 'Vulpix',
            tipo: 'fire',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png'
        },
        {
            nome: 'Meowth',
            tipo: 'normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
        },
        {
            nome: 'Eevee',
            tipo: 'normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png'
        },
        {
            nome: 'Rattata',
            tipo: 'normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png'
        },
        {
            nome: 'Clefairy',
            tipo: 'fairy',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png'
        },
        {
            nome: 'Jigglypuff',
            tipo: 'fairy',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
        }
    ]
}

var listaPokemons = getPokemons();
var cardTemplate = document.getElementById('cardTemplate');
var container = document.getElementById('container')
const filter = document.getElementById('filter')


function allPokemons(){
 
 for (let index = 0; index < listaPokemons.length; index++) {
    var pokemon = listaPokemons[index];

    var card = cardTemplate.content.cloneNode(true).getElementById('card').outerHTML;
    card = card.replace(/{{nome}}/g, pokemon.nome);
    card = card.replace(/{{tipo}}/g, pokemon.tipo);
    card = card.replace(/{{imagem}}/g, pokemon.imagem);
    container.innerHTML += card;   
    }     
}


function clean(){
    return document.getElementById('container').innerHTML='';
}


function PokemonFilter() {
    
    clean();

    if(filter.value === 'todos') {
        allPokemons();
    }

    for (let index = 0; index < listaPokemons.length; index++) {
        var pokemon = listaPokemons[index];
        var card = cardTemplate.content.cloneNode(true).getElementById('card').outerHTML;
         
            if(filter.value === pokemon.tipo){ 
            card = card.replace(/{{nome}}/g, pokemon.nome);
            card = card.replace(/{{tipo}}/g, pokemon.tipo);
            card = card.replace(/{{imagem}}/g, pokemon.imagem);
            container.innerHTML += card;        
        }
    }      
}  
 






