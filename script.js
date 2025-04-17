const url="https://openlibrary.org/search.json?title=the+lord+of+the+rings&limit=50";
const searchbutton = document.querySelector("#search-button");
const main = document.querySelector("main");
const btnauthorKey= document.querySelector("#btnauthorKey");
const btnauthorName= document.querySelector("#btnauthorName");
const btneditionCount= document.querySelector("#btneditionCount");
const btnfirstEdition= document.querySelector("#btnfirstEdition");
const inputbookRange = document.querySelector("#inputbookRange");
const displaybookRange = document.querySelector("#displaybookRange");
const inputbookName = document.querySelector("#inputbookName");
var docs = [];
// var sortMethod = "";
// var numberOfbook = 12;
// var filter = "";
async function fetchBooks(){
    const request = await fetch(url);
    const response = await request.json();
    docs = response.docs;
    
}

fetchBooks();
    





        