let url = localStorage.getItem('url');
console.log(url);
fetch(url)
    .then(response => response.json()) 
    .then(function(data){
    anychart.onDocumentReady(function () {
        
        // our data from bulbapedia
        let mname = data.forms[0].name;
        let hp = data.stats[0].base_stat;
        let attack = data.stats[1].base_stat;
        let defense = data.stats[2].base_stat;
        let spattack = data.stats[3].base_stat;
        let spdefense = data.stats[4].base_stat;
        let speed = data.stats[5].base_stat;

        if(data.types.length == 2){
            var type = `${data.types[0].type.name}, ${data.types[1].type.name}`;
        }
        else{
            var type = `${data.types[0].type.name}`;
        }

        if(data.abilities.length == 2){
            var ability = `${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}`;
        }
        else{
            var ability = `${data.abilities[0].ability.name}`;
        }
        var data1 = [
            {x: "Speed", value: speed},
            {x: "HP", value: hp},
            {x: "Defense", value: defense},
            {x: "Special Defense", value: spdefense},
            {x: "Special Attack", value: spattack},
            {x: "Attack", value: attack}
        ];
        
        
        // create radar chart
        var chart = anychart.radar();
        
        // set chart yScale settings
        chart.yScale()
            .minimum(1)
            .maximum(200)
            .ticks({'interval':40});
        
        // color alternating cells
        chart.yGrid().palette(["gray 0.1", "gray 0.2"]);
        
        // create first series
        chart.area(data1).name(``).markers(true).fill("#5BC0EB", 0.3).stroke("#5BC0EB")
        
        // set container id for the chart
        chart.container('container');
        // initiate chart drawing
        chart.draw();
        console.log(data.sprites.other["official-artwork"].front_default);
        var y = `<img class="center-sprite" src=${data.sprites.other["official-artwork"].front_default} alt="sprite">`;
        $('section').prepend(y);
        $('section').append(`<div><h1><b>Pokédex data</b></h1><div>National No.: ${data.id}</div><div>Type(s):  ${type}</div><div>Abilities: ${ability}</div></div>`);
        })
    });
