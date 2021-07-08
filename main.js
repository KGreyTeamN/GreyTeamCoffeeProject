"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;// assigns our list to selectedRoast variable
    var selectedCoffee = coffeeName.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast &&
            coffee.name.toLowerCase().includes(coffees) === selectedCoffee.toLowerCase().includes(coffees)) {//.includes()
            filteredCoffees.push(coffee);
        }
    });
    // var selectedCoffee = coffeeName.value;
    // var filteredNames = [];
    // coffees.forEach(function (coffee) {
    //     if (coffee.name === selectedCoffee.toLowerCase()) {
    //         filteredNames.push(coffee);
    //     }
    // })

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');// grabs info of all our coffees and assigns to tbody
var submitButton = document.querySelector('#submit');// the submit button
var roastSelection = document.querySelector('#roast-selection'); //our ul list
var coffeeName = document.querySelector('#coffeeName');// input box to manually enter coffee names
tbody.innerHTML = renderCoffees(coffees);

// tbody.addEventListener("", )// form, HTML element content display management,
submitButton.addEventListener('click', updateCoffees);// updates coffee search when clicked on
