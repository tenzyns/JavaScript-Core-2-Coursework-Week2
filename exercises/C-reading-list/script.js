function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  unorderedList.style.display = "flex";
  unorderedList.style.flexWrap = "wrap";
  unorderedList.style.marginTop = 100;
  unorderedList.style.listStyle = "none";

  books.forEach(book => {
    let bookList = document.createElement("li");
    unorderedList.appendChild(bookList);
    bookList.style.margin = 20;
    bookList.style.padding = 20;
  
    if (book.alreadyRead === true) {
      bookList.style.backgroundColor = "green";
    } else {
      bookList.style.backgroundColor = "red";
    };
    let para = document.createElement("p");
    para.innerText = `${book.title} by ${book.author}`;
    bookList.appendChild(para);
    let image = document.createElement("img");
    image.style.width = 200;
    image.style.height = 250;
    if (book.title === "The Design of Everyday Things") {
      image.src = "https://media.shortform.com/covers/png/the-design-of-everyday-things-cover@8x.png";
    } else if (book.title === "The Most Human Human") {
      image.src = "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"
    } else {
      image.src = "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg"
    }
    bookList.appendChild(image);
  });

  
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);