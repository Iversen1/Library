// Start ved nr 7, local storage

let myLibrary =[];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
         return this.title + this.author + this.pages + this.read ; 
    }

const oathbringer = new Book ("Oathbringer", "Brandon Sanderson", 1210, "not read yet");
let divs = document.getElementById("books");

let submitted = document.getElementById("submit").addEventListener("click", addBookToLibrary, )
let inputRead = [];

let toggle = document.getElementById("toggle-switch")

function addBookToLibrary() {
   
    let inputTitle = document.getElementById("title").value;
    let inputAuthor = document.getElementById("author").value;
    let inputPages = document.getElementById("pages").value;
    // takes the input from the radio button an using "checked" attribute to see which has been checked
     let inputRead = document.querySelector('input[class="read"]:checked').value 

    // Adds a new book and pushes it to the array as an object
    if(inputTitle === "" || inputAuthor === "" || inputPages === "" || inputRead === "") {
        alert("please fill in the form")
    } else {
        const newBook = new Book (inputTitle, inputAuthor, inputPages, inputRead);
        myLibrary.push(newBook)
        displayBooks();
    }
   ;
} 

//displays the books from the myLibrary array on to the webpage 
 function displayBooks() {
        //takes the latest book from library
        let newBook = myLibrary.slice(-1)[0]

        //Delete button
        let btn = document.createElement("button");
        btn.setAttribute("id", "delete-button")
        btn.innerText = "Remove"

        let card = document.createElement("div");
        card.setAttribute("class", "card");
        divs.appendChild(card);

        cardTitle = document.createElement("h5")
        cardTitle.innerText = newBook.title
        card.appendChild(cardTitle)

        cardAuthor = document.createElement("p")
        cardAuthor.innerText = "by " + newBook.author
        card.appendChild(cardAuthor)

        cardPages = document.createElement("p")
        cardPages.innerText = newBook.pages + " pages"
        card.appendChild(cardPages)

        cardRead = document.createElement("p")
        cardRead.innerText = newBook.read

        card.appendChild(cardRead)
        card.appendChild(btn);

        let inputRead = document.querySelector('input[class="read"]:checked').value;

        if(inputRead === "Read") {
            cardRead.style.color = "green"; }
            else if (inputRead === "Not yet read") {
                cardRead.style.color = "red"
            }
        
        // Sets the title as a value to each card in the html
        card.setAttribute("data-value", myLibrary.slice(-1)[0].title)
        card.setAttribute("id", "each-book")

        // Delete function and event listener
        btn.addEventListener("click", function deleteButton(event) {
            if(event.target.id === "delete-button") {
                for( let i = 0; i < myLibrary.length; i++) {
                    if (myLibrary.length < 1) {
                        divs.remove()
                        console.log("removed all")
                   } else if              
                         (card.getAttribute("data-value") === myLibrary[i].title) {
                         myLibrary.splice([i],1)
                         card.remove() + btn.remove();
                     }}  }
        }) }
        



    //Toggle
    //toggle.addEventListener('change', function() {

        //     if (this.checked) {
        //         console.log("read")
        //         inputRead.push("read")
        //     } else {
        //         console.log("not read")
        //         inputRead.push("not read")
        //     }
        // })
//let newRead = document.querySelector('input[class="test-read"]');

        // Adds info from the last book of the myLibrary array
        // let li = document.createElement("li");
        // li.innerText = newBook.title + newBook.author + newBook.pages + newBook.read;
        // card.appendChild(li);



          //console.dir(e.target);
            
            // evt.target
            // Hvordan finder jeg id på det objekt jeg trykker på? 
            // evt. lave en if myLibrary[i].id === data-id : 
          // myLibrary.splice(-1)
    
        // var tidligere under funktionen displaybooks
       // sets an attribute to each li with a random number
        // li.setAttribute("data-id", newBook.id)

        // let deleteBtn = document.getElementById("delete-button")

                //console.log("delete" + li.getAttribute("data-value"))

 //     li.setAttribute("data-id", randomId())
    //    console.log(li.getAttribute("data-id"))
        
  

 //  myLibrary.forEach(element => {
    //     let li = document.createElement("li");
    //      li.innerText = myLibrary[0].info();
    //      divs.appendChild(li);
    
        // for( let i = 0; i < myLibrary.length; i++) {
        //      if (myLibrary[i].title === obj[i].title )
        //         console.log("false");
        //     else {
        //     let li = document.createElement("li");
        //     li.innerText = myLibrary[i].info();
        //     divs.appendChild(li);

            //console.log(myLibrary[i].info());


             //console.log(newBook.info())
    
    // for (let i = 0; i < myLibrary.length; i++) {
    //     if( inputTitle === myLibrary[i].title) {
    //         console.log(inputTitle)
            
    //     }   else {
    //         console.log("does not exist")
            
    //     