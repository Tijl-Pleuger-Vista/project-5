// Display index
(async()=>{let t=await (await fetch("https://raw.githubusercontent.com/Tijl-Pleuger-Vista/project-5/main/app/assets/js/data.txt")).text();Form.innerHTML=t})();

var ID
var itemList
var pokemonList, numb = 0,
limit = 12;
var v = 100;
// OG Display index
let pokedex = () => {  
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`).then(i => i.json()).then(i => {
    i.results.forEach(function(s, a) {
        setTimeout(function() {
            var v = i.results[numb].name;
            numb++, fetch(`https://pokeapi.co/api/v2/pokemon/${v}`).then(i => i.json()).then(i => {
                console.log(i)
            var s = i.sprites.front_default,
            a = "";
                if (i.types[0]) {
                var d = i.types[0].type.name;
                if ("normal" == d) var a = "<div class='normal'>" + d + "</div>";
                if ("fire" == d) var a = "<div class='fire'>" + d + "</div>";
                if ("grass" == d) var a = "<div class='grass'>" + d + "</div>";
                if ("water" == d) var a = "<div class='water'>" + d + "</div>";
                if ("ice" == d) var a = "<div class='ice'>" + d + "</div>";
                if ("electric" == d) var a = "<div class='electric'>" + d + "</div>";
                if ("fighting" == d) var a = "<div class='fighting'>" + d + "</div>";
                if ("flying" == d) var a = "<div class='flying'>" + d + "</div>";
                if ("bug" == d) var a = "<div class='bug'>" + d + "</div>";
                if ("ghost" == d) var a = "<div class='ghost'>" + d + "</div>";
                if ("rock" == d) var a = "<div class='rock'>" + d + "</div>";
                if ("ground" == d) var a = "<div class='ground'>" + d + "</div>";
                if ("steel" == d) var a = "<div class='steel'>" + d + "</div>";
                if ("dark" == d) var a = "<div class='dark'>" + d + "</div>";
                if ("psychic" == d) var a = "<div class='psychic'>" + d + "</div>";
                if ("fairy" == d) var a = "<div class='fairy'>" + d + "</div>";
                if ("dragon" == d) var a = "<div class='dragon'>" + d + "</div>";
                if ("poison" == d) var a = "<div class='poison'>" + d + "</div>"
            }
        var r = "";
            if (i.types[1]) {
                var c = i.types[1].type.name;
                if ("normal" == c) var r = "<div class='normal'>" + c + "</div>";
                if ("fire" == c) var r = "<div class='fire'>" + c + "</div>";
                if ("grass" == c) var r = "<div class='grass'>" + c + "</div>";
                if ("water" == c) var r = "<div class='water'>" + c + "</div>";
                if ("ice" == c) var r = "<div class='ice'>" + c + "</div>";
                if ("electric" == c) var r = "<div class='electric'>" + c + "</div>";
                if ("fighting" == c) var r = "<div class='fighting'>" + c + "</div>";
                if ("flying" == c) var r = "<div class='flying'>" + c + "</div>";
                if ("bug" == c) var r = "<div class='bug'>" + c + "</div>";
                if ("ghost" == c) var r = "<div class='ghost'>" + c + "</div>";
                if ("rock" == c) var r = "<div class='rock'>" + c + "</div>";
                if ("ground" == c) var r = "<div class='ground'>" + c + "</div>";
                if ("steel" == c) var r = "<div class='steel'>" + c + "</div>";
                if ("dark" == c) var r = "<div class='dark'>" + c + "</div>";
                if ("psychic" == c) var r = "<div class='psychic'>" + c + "</div>";
                if ("fairy" == c) var r = "<div class='fairy'>" + c + "</div>";
                if ("dragon" == c) var r = "<div class='dragon'>" + c + "</div>";
                if ("poison" == c) var r = "<div class='poison'>" + c + "</div>";
                if ("" == c) var r = "<div></div>"
            }
                Form.innerHTML += 
                    `
                    <div id="${v}" class="card poke-card ${d} ${c} visible" onclick="updatGIF()">
                    <img id="${v}" class="p-img" src="${s}" alt="" style="width: 128px; height: 128px;"><div class="p-name">${v}</div><div class="row type">${a}${r}</div>
                    </div>
                    `
                })
            }, a * v)
        })
    })
};
pokedex();

    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(pokeInfo => pokeInfo.json())
    .then(pokeInfo => {
        var icon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
        var shadow = "https://raw.githubusercontent.com/Tijl-Pleuger-Vista/project-5/main/app/assets/content/shadow.png"
        var ability0 = pokeInfo.abilities[0].ability.name;
        var ability1 = pokeInfo.abilities[1].ability.name;
        var id = pokeInfo.id;
        var stat0 = pokeInfo.stats[0].stat.name;
        var stat1 = pokeInfo.stats[1].stat.name;
        var stat2 = pokeInfo.stats[2].stat.name;
        var stat3 = pokeInfo.stats[3].stat.name;
        var stat4 = pokeInfo.stats[4].stat.name;
        var stat5 = pokeInfo.stats[5].stat.name;
        var _stat0 = pokeInfo.stats[0].base_stat;
        var _stat1 = pokeInfo.stats[1].base_stat;
        var _stat2 = pokeInfo.stats[2].base_stat;
        var _stat3 = pokeInfo.stats[3].base_stat;
        var _stat4 = pokeInfo.stats[4].base_stat;
        var _stat5 = pokeInfo.stats[5].base_stat;
        var type1 = ''
        var type0 = pokeInfo.types[0].type.name;
            if (pokeInfo.types[1]) {
                var type1 = pokeInfo.types[1].type.name;
        }
        if("normal"==type0)var _type0="<div class='normal'>"+type0+"</div>";if("fire"==type0)var _type0="<div class='fire'>"+type0+"</div>";if("grass"==type0)var _type0="<div class='grass'>"+type0+"</div>";if("water"==type0)var _type0="<div class='water'>"+type0+"</div>";if("ice"==type0)var _type0="<div class='ice'>"+type0+"</div>";if("electric"==type0)var _type0="<div class='electric'>"+type0+"</div>";if("fighting"==type0)var _type0="<div class='fighting'>"+type0+"</div>";if("flying"==type0)var _type0="<div class='flying'>"+type0+"</div>";if("bug"==type0)var _type0="<div class='bug'>"+type0+"</div>";if("ghost"==type0)var _type0="<div class='ghost'>"+type0+"</div>";if("rock"==type0)var _type0="<div class='rock'>"+type0+"</div>";if("ground"==type0)var _type0="<div class='ground'>"+type0+"</div>";if("steel"==type0)var _type0="<div class='steel'>"+type0+"</div>";if("dark"==type0)var _type0="<div class='dark'>"+type0+"</div>";if("psychic"==type0)var _type0="<div class='psychic'>"+type0+"</div>";if("fairy"==type0)var _type0="<div class='fairy'>"+type0+"</div>";if("dragon"==type0)var _type0="<div class='dragon'>"+type0+"</div>";if("poison"==type0)var _type0="<div class='poison'>"+type0+"</div>";
        if("normal"==type1)var _type1="<div class='normal'>"+type1+"</div>";if("fire"==type1)var _type1="<div class='fire'>"+type1+"</div>";if("grass"==type1)var _type1="<div class='grass'>"+type1+"</div>";if("water"==type1)var _type1="<div class='water'>"+type1+"</div>";if("ice"==type1)var _type1="<div class='ice'>"+type1+"</div>";if("electric"==type1)var _type1="<div class='electric'>"+type1+"</div>";if("fighting"==type1)var _type1="<div class='fighting'>"+type1+"</div>";if("flying"==type1)var _type1="<div class='flying'>"+type1+"</div>";if("bug"==type1)var _type1="<div class='bug'>"+type1+"</div>";if("ghost"==type1)var _type1="<div class='ghost'>"+type1+"</div>";if("rock"==type1)var _type1="<div class='rock'>"+type1+"</div>";if("ground"==type1)var _type1="<div class='ground'>"+type1+"</div>";if("steel"==type1)var _type1="<div class='steel'>"+type1+"</div>";if("dark"==type1)var _type1="<div class='dark'>"+type1+"</div>";if("psychic"==type1)var _type1="<div class='psychic'>"+type1+"</div>";if("fairy"==type1)var _type1="<div class='fairy'>"+type1+"</div>";if("dragon"==type1)var _type1="<div class='dragon'>"+type1+"</div>";if("poison"==type1)var _type1="<div class='poison'>"+type1+"</div>";if(""==type1)var _type1="<div></div>";
        infoCard.innerHTML +=
        `
        <img class="p-img-info" src="${icon}" alt="" style="width: 192px; height: 192px;">
        <img class="p-img-shadow" src="${shadow}">
        <div class="row type type-info">${_type0}${_type1}</div>
        <div class="row"><h3>Pokémon id:</h3>  <h3 class="stat">${id}</h3></div>
        <div class="row"><h3>Abilities:</h3>
            <div class="column">
                <div><h3 class="stat">${ability0}</h3></div>
                <div><h3 class="stat">${ability1}</h3></div>
            </div>
        </div>
        <div class="row"><h3>Stats:</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat0}</h3><h3 class="stat">${_stat0}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat1}</h3><h3 class="stat">${_stat1}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat2}</h3><h3 class="stat">${_stat2}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat3}</h3><h3 class="stat">${_stat3}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat4}</h3><h3 class="stat">${_stat4}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat5}</h3><h3 class="stat">${_stat5}</h3></div>
        `
    })
let pokemarket = () => {

    fetch(`https://pokeapi.co/api/v2/item/poke-ball`)
    .then(itemList => itemList.json())
    .then(itemList => {
        // console.log(itemList)
        var name = itemList.name;
        var cost = itemList.cost;
        var sprite = itemList.sprites.default;
        marketplace.innerHTML +=
        `
        <div class="card poke-card-plus">
            <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
            <div class="p-name">${name}</div>
            <div class="p-name">${cost} Poké-yen</div>
            <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
        </div>
        `
});
fetch(`https://pokeapi.co/api/v2/item/great-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/master-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name} (Gen 1)</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button id="MasterBall" class="button button-buy" onclick="getPokemon(this.id)"><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/ultra-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/safari-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/net-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/dive-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/nest-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/repeat-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/timer-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/luxury-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/premier-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/dusk-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/heal-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})

fetch(`https://pokeapi.co/api/v2/item/quick-ball`)
.then(itemList => itemList.json())
.then(itemList => {
    // console.log(itemList)
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML +=
    `
    <div class="card poke-card-plus">
        <img  class="p-img" src="${sprite}" alt="" style="width: 128px; height: 128px;">
        <div class="p-name">${name}</div>
        <div class="p-name">${cost} Poké-yen</div>
        <button class="button button-buy" onclick=""><div class="row"><h1>Buy    </h1></div></button>
    </div>
    `
})
}; pokemarket();

// function game(){
//     placegame.innerHTML = 
//     `
//     `
// };

// place div for the your personal pokedex


function mew() {
var myHeaders = new Headers();
myHeaders.append("Cookie", "user=06edf5fb-f37e-461a-b3cf-74b2fa74d3de");

var formdata = new FormData();

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
};
let x = document.cookie;

fetch(`http://pokedexauth.ddns.net:5000/getpokemon/?key=${x}`, requestOptions)
.then(response => response.json())
.then(response => {

    var name = response[1];

    console.log(response)
    // yourForm.innerHTML += 
    // `
    // <div id="" class="card poke-card yourcard visible" onclick="updatGIF()">
    // <img id="" class="p-img" src="" alt="" style="width: 128px; height: 128px;"><div class="p-name"></div><div class="row type">${name}</div>
    // </div>
    // `






    numb++, fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(i => i.json()).then(i => {
        console.log(i)
    var s = i.sprites.front_default,
    a = "";
        if (i.types[0]) {
        var d = i.types[0].type.name;
        if ("normal" == d) var a = "<div class='normal'>" + d + "</div>";
        if ("fire" == d) var a = "<div class='fire'>" + d + "</div>";
        if ("grass" == d) var a = "<div class='grass'>" + d + "</div>";
        if ("water" == d) var a = "<div class='water'>" + d + "</div>";
        if ("ice" == d) var a = "<div class='ice'>" + d + "</div>";
        if ("electric" == d) var a = "<div class='electric'>" + d + "</div>";
        if ("fighting" == d) var a = "<div class='fighting'>" + d + "</div>";
        if ("flying" == d) var a = "<div class='flying'>" + d + "</div>";
        if ("bug" == d) var a = "<div class='bug'>" + d + "</div>";
        if ("ghost" == d) var a = "<div class='ghost'>" + d + "</div>";
        if ("rock" == d) var a = "<div class='rock'>" + d + "</div>";
        if ("ground" == d) var a = "<div class='ground'>" + d + "</div>";
        if ("steel" == d) var a = "<div class='steel'>" + d + "</div>";
        if ("dark" == d) var a = "<div class='dark'>" + d + "</div>";
        if ("psychic" == d) var a = "<div class='psychic'>" + d + "</div>";
        if ("fairy" == d) var a = "<div class='fairy'>" + d + "</div>";
        if ("dragon" == d) var a = "<div class='dragon'>" + d + "</div>";
        if ("poison" == d) var a = "<div class='poison'>" + d + "</div>"
    }
var r = "";
    if (i.types[1]) {
        var c = i.types[1].type.name;
        if ("normal" == c) var r = "<div class='normal'>" + c + "</div>";
        if ("fire" == c) var r = "<div class='fire'>" + c + "</div>";
        if ("grass" == c) var r = "<div class='grass'>" + c + "</div>";
        if ("water" == c) var r = "<div class='water'>" + c + "</div>";
        if ("ice" == c) var r = "<div class='ice'>" + c + "</div>";
        if ("electric" == c) var r = "<div class='electric'>" + c + "</div>";
        if ("fighting" == c) var r = "<div class='fighting'>" + c + "</div>";
        if ("flying" == c) var r = "<div class='flying'>" + c + "</div>";
        if ("bug" == c) var r = "<div class='bug'>" + c + "</div>";
        if ("ghost" == c) var r = "<div class='ghost'>" + c + "</div>";
        if ("rock" == c) var r = "<div class='rock'>" + c + "</div>";
        if ("ground" == c) var r = "<div class='ground'>" + c + "</div>";
        if ("steel" == c) var r = "<div class='steel'>" + c + "</div>";
        if ("dark" == c) var r = "<div class='dark'>" + c + "</div>";
        if ("psychic" == c) var r = "<div class='psychic'>" + c + "</div>";
        if ("fairy" == c) var r = "<div class='fairy'>" + c + "</div>";
        if ("dragon" == c) var r = "<div class='dragon'>" + c + "</div>";
        if ("poison" == c) var r = "<div class='poison'>" + c + "</div>";
        if ("" == c) var r = "<div></div>"
    }
        yourForm.innerHTML = 
            `
            <div id="${name}" class="card poke-card yourcard ${d} ${c} visible" onclick="updatGIF()">
            <img id="${name}" class="p-img" src="${s}" alt="" style="width: 128px; height: 128px;"><div class="p-name">${name}</div><div class="row type">${a}${r}</div>
            </div>
            `
        })
})
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}