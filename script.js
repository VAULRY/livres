const url="data.json";
const main = document.querySelector("main");
const authorKey= document.querySelector("#authorKey");
const authorName= document.querySelector("#authorName");
const editionCount= document.querySelector("#editionCount");
const firstEdition= document.querySelector("#firstEdition");
const inputbookRange = document.querySelector("#inputbookRange");
const displaybookRange = document.querySelector("#displaybookRange");
const inputbookName = document.querySelector("#inputbookName");
var docs = [];
var sortMethod = "";
var numberOfbook = 12;
var filter = "";

const fetchbook = async () => {
    const request = await fetch(url);
    book = await request.json();
    updateMain();
  };
  
  const updateMain = () => {
    main.innerHTML = "";
    book

    filter((book) => {
      if (filter === "") return true;
      return book.title.toLowerCase().includes(filter.toLowerCase());
      return book;
    }

}