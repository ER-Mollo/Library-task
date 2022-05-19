// document.getElementById("drama").style.visibility = "grid";

let strArray = localStorage.getItem("users");
let user = JSON.parse(strArray);
let link = user[0].img;

document.getElementById("user").innerHTML = user[0].name;

document.getElementById("userImg").src = link;

class books {
    constructor(title, genre, author,book){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.book = book;
    }}

    let b1 = new books("The Lion and The Witch","Horror","C.S Lewis","./images/b2.jpg");
    let b2 = new books("The Lion and The Witch","Horror","C.S Lewis","./images/b2.jpg");
    let b3 = new books("The Lion and The Witch","Horror","C.S Lewis","./images/b2.jpg");

    let d1 = new books("The Alchemist","Drama","Paulo Coelho","./images/b6.jpg");
    let d2 = new books("The Alchemist","Drama","Paulo Coelho","./images/b6.jpg");
    let d3 = new books("The Alchemist","Drama","Paulo Coelho","./images/b6.jpg");

    let h1 = new books("A Brief History of Time","History","Alex Michealedis","./images/b5.jpg");
    let h2 = new books("A Brief History of Time","History","Alex Michealedis","./images/b5.jpg");
    let h3 = new books("A Brief History of Time","History","Alex Michealedis","./images/b5.jpg");
   
    let a1 = new books("The patient silent","Action","Alex Michealedis","./images/b4.jpg");
    let a2 = new books("The patient silent","Action","Alex Michealedis","./images/b4.jpg");
    let a3 = new books("The patient silent","Action","Alex Michealedis","./images/b4.jpg");
   
    let m1 = new books("The patient silent","Mistery","Alex Michealedis","./images/b3.jpg");
    let m2 = new books("The patient silent","Mistery","Alex Michealedis","./images/b3.jpg");
    let m3 = new books("The patient silent","Mistery","Alex Michealedis","./images/b3.jpg");
    

    let book = [];

    book.push(b1, b2, b3, d1, d2, d3, a1, a2, a3, h1, h2, h3, m1, m2, m3);

    localStorage.setItem("Books", JSON.stringify(book));

    function drama(){
        document.getElementById("right").style.display = "none";
        document.getElementById("drama").style.display = "grid";
        document.getElementById("mb").style.background = "none";
        document.getElementById("c").style.background = "rgb(250, 235, 215)";

        let strArray = localStorage.getItem("Books");

        let items = JSON.parse(strArray);

        let drama = document.getElementById("drama");
        drama.innerHTML = "<h1></h1>";
        for(let i = 0; i<drama.children.length; i++){
            drama.removeChild(drama.children[i]);
        }

            for(let i = 0; i<items.length; i++){
                if(items[i].genre === "Drama"){
                    //creating a div for a single book
                    let book = document.createElement("div");
                    book.Class = "book";

                    //create an image
                    let img = document.createElement("img");
                    let title = document.createElement("h1");
                    let author = document.createElement("p");
                    img.src = items[i].book;
                    let t = document.createTextNode(items[i].title);
                    let a = document.createTextNode(items[i].author);

                        
                    title.appendChild(t);

                    //add image to book
                    book.appendChild(img);
                    book.appendChild(title);
                    book.appendChild(author);
                    ///adding the book to the div
                    drama.appendChild(book);
                }
            }

    }


    function history(){
        document.getElementById("right").style.display = "none";
        document.getElementById("drama").style.display = "grid";
        document.getElementById("mb").style.background = "none";
        document.getElementById("c").style.background = "rgb(250, 235, 215)";

        let strArray = localStorage.getItem("Books");

        let items = JSON.parse(strArray);

        let drama = document.getElementById("drama");
        drama.innerHTML = "<h1></h1>";
        for(let i = 0; i<drama.children.length; i++){
            drama.removeChild(drama.children[i]);
        }

            for(let i = 0; i<items.length; i++){
                if(items[i].genre === "History"){
                    //creating a div for a single book
                    let book = document.createElement("div");
                    book.Class = "book";

                    //create an image
                    let img = document.createElement("img");
                    let title = document.createElement("h1");
                    let author = document.createElement("p");
                    img.src = items[i].book;
                    let t = document.createTextNode(items[i].title);
                    let a = document.createTextNode(items[i].author);

                        
                    title.appendChild(t);

                    //add image to book
                    book.appendChild(img);
                    book.appendChild(title);
                    book.appendChild(author);
                    ///adding the book to the div
                    drama.appendChild(book);
                }
            }

    }


    function action(){
        document.getElementById("right").style.display = "none";
        document.getElementById("drama").style.display = "grid";
        document.getElementById("mb").style.background = "none";
        document.getElementById("c").style.background = "rgb(250, 235, 215)";

        let strArray = localStorage.getItem("Books");

        let items = JSON.parse(strArray);

        let drama = document.getElementById("drama");
        drama.innerHTML = "<h1></h1>";
        for(let i = 0; i<drama.children.length; i++){
            drama.removeChild(drama.children[i]);
        }

            for(let i = 0; i<items.length; i++){
                if(items[i].genre === "Action"){
                    //creating a div for a single book
                    let book = document.createElement("div");
                    book.Class = "book";

                    //create an image
                    let img = document.createElement("img");
                    let title = document.createElement("h1");
                    let author = document.createElement("p");
                    img.src = items[i].book;
                    let t = document.createTextNode(items[i].title);
                    let a = document.createTextNode(items[i].author);

                        
                    title.appendChild(t);

                    //add image to book
                    book.appendChild(img);
                    book.appendChild(title);
                    book.appendChild(author);
                    ///adding the book to the div
                    drama.appendChild(book);
                }
            }

    }


    function mistery(){
        document.getElementById("right").style.display = "none";
        document.getElementById("drama").style.display = "grid";
        document.getElementById("mb").style.background = "none";
        document.getElementById("c").style.background = "rgb(250, 235, 215)";

        let strArray = localStorage.getItem("Books");

        let items = JSON.parse(strArray);

        let drama = document.getElementById("drama");
        drama.innerHTML = "<h1></h1>";
        for(let i = 0; i<drama.children.length; i++){
            drama.removeChild(drama.children[i]);
        }

            for(let i = 0; i<items.length; i++){
                if(items[i].genre === "Mistery"){
                    //creating a div for a single book
                    let book = document.createElement("div");
                    book.Class = "book";

                    //create an image
                    let img = document.createElement("img");
                    let title = document.createElement("h1");
                    let author = document.createElement("p");
                    img.src = items[i].book;
                    let t = document.createTextNode(items[i].title);
                    let a = document.createTextNode(items[i].author);

                        
                    title.appendChild(t);

                    //add image to book
                    book.appendChild(img);
                    book.appendChild(title);
                    book.appendChild(author);
                    ///adding the book to the div
                    drama.appendChild(book);
                }
            }

    }


    function horror(){
        document.getElementById("right").style.display = "none";
        document.getElementById("drama").style.display = "grid";
        document.getElementById("mb").style.background = "none";
        document.getElementById("c").style.background = "rgb(250, 235, 215)";

        let strArray = localStorage.getItem("Books");

        let items = JSON.parse(strArray);

        let drama = document.getElementById("drama");
        drama.innerHTML = "<h1></h1>";
        for(let i = 0; i<drama.children.length; i++){
            drama.removeChild(drama.children[i]);
        }

            for(let i = 0; i<items.length; i++){
                if(items[i].genre === "Horror"){
                    //creating a div for a single book
                    let book = document.createElement("div");
                    book.Class = "book";

                    //create an image
                    let img = document.createElement("img");
                    let title = document.createElement("h1");
                    let author = document.createElement("p");
                    img.src = items[i].book;
                    let t = document.createTextNode(items[i].title);
                    let a = document.createTextNode(items[i].author);

                        
                    title.appendChild(t);

                    //add image to book
                    book.appendChild(img);
                    book.appendChild(title);
                    book.appendChild(author);
                    ///adding the book to the div
                    drama.appendChild(book);
                }
            }

    }

  

    function myboard(){
        document.getElementById("right").style.display = "grid";
        document.getElementById("drama").style.display = "none";
        document.getElementById("mb").style.backgroundColor ="rgb(250, 235, 215)";
        document.getElementById("c").style.background = "none";
    }
    function collection(){
        document.getElementById("right").style.display = "none";
        document.getElementById("drama").style.display = "grid";
        document.getElementById("mb").style.background = "none";
        document.getElementById("c").style.background = "rgb(250, 235, 215)";

        let strArray = localStorage.getItem("Books");

        let items = JSON.parse(strArray);

        let drama = document.getElementById("drama");
        drama.innerHTML = "<h1></h1>";
        for(let i = 0; i<drama.children.length; i++){
            drama.removeChild(drama.children[i]);
        }

            for(let i = 0; i<items.length; i++){
                if(items[i].genre === "Drama"){
                    //creating a div for a single book
                    let book = document.createElement("div");
                    book.Class = "book";

                    //create an image
                    let head = document.createElement("h2");
                    let tn = document.createTextNode("Drama")
                    head.appendChild(tn);
                    let img = document.createElement("img");
                    let title = document.createElement("h1");
                    let author = document.createElement("p");
                    img.src = items[i].book;
                    let t = document.createTextNode(items[i].title);
                    let a = document.createTextNode(items[i].author);

                        
                    title.appendChild(t);

                    //add image to book
                    book.appendChild(head);
                    book.appendChild(img);
                    book.appendChild(title);
                    book.appendChild(author);
                    ///adding the book to the div
                    drama.appendChild(book);

                }
                
            }


            for(let i = 0; i<items.length; i++){
                if(items[i].genre === "Horror"){
                    //creating a div for a single book
                    let book = document.createElement("div");
                    book.Class = "book";

                    //create an image
                    let head = document.createElement("h2");
                    let tn = document.createTextNode("Horror")
                    head.appendChild(tn);
                    let img = document.createElement("img");
                    let title = document.createElement("h1");
                    let author = document.createElement("p");
                    img.src = items[i].book;
                    let t = document.createTextNode(items[i].title);
                    let a = document.createTextNode(items[i].author);

                        
                    title.appendChild(t);

                    //add image to book
                    book.appendChild(head);
                    book.appendChild(img);
                    book.appendChild(title);
                    book.appendChild(author);
                    ///adding the book to the div
                    drama.appendChild(book);

                }
                
            }

            for(let i = 0; i<items.length; i++){
                if(items[i].genre === "History"){
                    //creating a div for a single book
                    let book = document.createElement("div");
                    book.Class = "book";

                    //create an image
                    let head = document.createElement("h2");
                    let tn = document.createTextNode("History")
                    head.appendChild(tn);
                    let img = document.createElement("img");
                    let title = document.createElement("h1");
                    let author = document.createElement("p");
                    img.src = items[i].book;
                    let t = document.createTextNode(items[i].title);
                    let a = document.createTextNode(items[i].author);

                        
                    title.appendChild(t);

                    //add image to book
                    book.appendChild(head);
                    book.appendChild(img);
                    book.appendChild(title);
                    book.appendChild(author);
                    ///adding the book to the div
                    drama.appendChild(book);

                }
                
            }

    }

    myboard();



