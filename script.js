//selecting popup-box, popup overlay, button
var popupover = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopbtn = document.getElementById("add-popup-btn");
addpopbtn.addEventListener("click",function()
{
    popupover.style.display="block";
    popupbox.style.display="block";
});

//select cancel button
var cancelbtn = document.getElementById("cancel-popup");
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupover.style.display="none";
    popupbox.style.display="none";    
})

//select container,add-book,book-title-input,book-author-input,book-description-input
var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");
var booktitle = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author-input");
var bookdescribe = document.getElementById("book-description-input");
addBook.addEventListener("click",function()
{
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML = `<h1>${booktitle.value}</h1>
    <h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescribe.value}</p>
    <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);
    popupover.style.display="none";
    popupbox.style.display="none"; 
})

function deletebook(event)
{
    event.target.parentElement.remove()
}