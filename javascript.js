// Almost works. Took a break because struggling with the toggle function, works on the last book added, and doesnt change the read status in the library array


let myLibrary =[];

function Book(title, author, pages, read, key) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.key = key;
}

Book.prototype.info = function() {
         return this.title + this.author + this.pages + this.read ; 
    }

Book.prototype.toggleRead = function(str) {
   if ( str === "Yes") {
       this.read === true;
   } else if (str === "No") {
       this.read === false;
   }
}

function uniqueKey () {
    return Math.floor((Math.random() * 1000000) + 1)
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
    if(inputTitle === "" || inputAuthor === "" || inputPages === ""|| inputRead === "") {
        alert("please fill in the form")
    } else {
        const newBook = new Book (inputTitle, inputAuthor, inputPages, inputRead, uniqueKey());
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

    //Toggle test
        cardToggle = document.createElement("input");
        cardToggle.setAttribute("type", "checkbox")
        cardToggle.setAttribute("id", "read-checkbox")
       
        card.appendChild(cardToggle); 

    // Function works - but it has to take the value from the book prototype, 
    //now it just spits out read or not read
    // find a way to set the prototype to read, and how to read it,
    // and this is where the testToggle gets it read

        cardRead = document.createElement("p")
        cardRead.innerText = newBook.read

        card.appendChild(cardRead)
        card.appendChild(btn);

        let inputRead = document.querySelector('input[class="read"]:checked').value;

        if(inputRead === "Yes") {
            cardRead.style.color = "green"; }
            else if (inputRead === "No") {
                cardRead.style.color = "red"
            }

        // Sets the title as a value to each card in the html
         card.setAttribute("data-value", myLibrary.slice(-1)[0].title)
        card.setAttribute("id", "each-book")
        card.setAttribute("data-key", myLibrary.slice(-1)[0].key )
            

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
        }) 
    
 //should change the testToggle
// Only works on the first book, the next books doesnt function
        cardToggle.addEventListener('click', function testing(event) {
           
                if(this.checked) 
        { for( let i = 0; i < myLibrary.length; i++) {
            if ( cardTitle.innerText === myLibrary[i].title)
            {   myLibrary[i].read  = "yes";
                console.log("found it" + myLibrary[i].title )
                cardRead.style.color = "green";
            } 
            else {myLibrary[i].read = "No";
        }
         } 
            }
            else {console.log("not found")
            cardRead.style.color = "red"}
            
           
        
        })
    }
    
 
           
    // cardToggle.addEventListener('click', function testing(event) {   
    //     if(this.checked) {
                         
    //                     console.log("found it")
    //                      cardRead.style.color = "green";
        
    // }    else {console.log("not found")
    //          this.style.color = "red"}

    
    // })
 



        // if (testToggle.checked === True) {
        //     console.log("checked")
        // }
        // else {
        //     console.log("not checked")
        // }


            // testToggle.addEventListener("click", function() {
    //     if (testToggle.checked) {
    //     readToggle = document.createElement("p");
    //     readToggle.innerText = "read";
    //     card.appendChild(readToggle);
    //     }
    //     else {
    //         readToggle = document.createElement("p");
    //         readToggle.innerText = "not read";
    //         card.appendChild(readToggle);
    //     }
    // })

       // let toggle = document.getElementById("read-checkbox").addEventListener("click", function () {
            
        // })
