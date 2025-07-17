// Sample Array of 10 Books
const books = [
    { bookName: "The Alchemist", bookImageUrl: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg", bookPrice: 250, bookAuthor: "Paulo Coelho" },
    { bookName: "1984", bookImageUrl: "https://i.pinimg.com/originals/31/9c/10/319c10af24704e18d9300ce43a817d89.png", bookPrice: 300, bookAuthor: "George Orwell" },
    { bookName: "To Kill a Mockingbird", bookImageUrl: "https://wallpapers.com/images/featured/to-kill-a-mockingbird-pictures-q1qq2daadh6wlvwf.jpg", bookPrice: 270, bookAuthor: "Harper Lee" },
    { bookName: "Brave New World", bookImageUrl: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg", bookPrice: 280, bookAuthor: "Aldous Huxley" },
    { bookName: "Sapiens", bookImageUrl: "https://tse1.mm.bing.net/th/id/OIP.ydvFTzKwEg49msfAgBzViAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", bookPrice: 400, bookAuthor: "Yuval Noah Harari" },
    { bookName: "Animal Farm", bookImageUrl: "https://tse4.mm.bing.net/th/id/OIP.yNcSl6Ijv0vdyQchC1qH1QHaLd?rs=1&pid=ImgDetMain&o=7&rm=3", bookPrice: 150, bookAuthor: "George Orwell" },
    { bookName: "The Power of Habit", bookImageUrl: "https://tse1.mm.bing.net/th/id/OIP.4HluzlgQFBdvf67Ee7MwrgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", bookPrice: 320, bookAuthor: "Charles Duhigg" },
    { bookName: "The Book Thief", bookImageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg", bookPrice: 290, bookAuthor: "Markus Zusak" },
    { bookName: "Think and Grow Rich", bookImageUrl: "https://tse2.mm.bing.net/th/id/OIP.w-p58zUnPxoAD19WAb64kgHaKI?rs=1&pid=ImgDetMain&o=7&rm=3", bookPrice: 350, bookAuthor: "Napoleon Hill" },
    { bookName: "Atomic Habits", bookImageUrl: "https://media.shortform.com/covers/png/atomic-habits-cover@8x.png", bookPrice: 330, bookAuthor: "James Clear" },
  ];
  
  let displayedBooks = [...books];
  
  const mainContainer = document.getElementById("mainContainer");
  
  const authorFilter = document.getElementById("authorFilter");
  const authors = Array.from(new Set(books.map(book => book.bookAuthor)));
  authors.forEach(author => {
    const option = document.createElement("option");
    option.value = author;
    option.textContent = author;
    authorFilter.appendChild(option);
  });
  
  function displayBooks(bookList) {
    mainContainer.innerHTML = "";
    bookList.forEach(book => {
      const card = document.createElement("div");
      card.className = "book-card";
  
      const img = document.createElement("img");
      img.src = book.bookImageUrl;
  
      const name = document.createElement("h3");
      name.textContent = book.bookName;
  
      const author = document.createElement("p");
      author.textContent = `Author: ${book.bookAuthor}`;
  
      const price = document.createElement("p");
      price.textContent = `Price: ₹${book.bookPrice}`;
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(author);
      card.appendChild(price);
      mainContainer.appendChild(card);
    });
  }

  function filterBooksByAuthor() {
    const selectedAuthor = authorFilter.value;
    displayedBooks = selectedAuthor === "All" ? [...books] : books.filter(b => b.bookAuthor === selectedAuthor);
    sortBooksByPrice(); 
  }
  
  function sortBooksByPrice() {
    const sortValue = document.getElementById("priceSort").value;
    if (sortValue === "asc") {
      displayedBooks.sort((a, b) => a.bookPrice - b.bookPrice);
    } else if (sortValue === "desc") {
      displayedBooks.sort((a, b) => b.bookPrice - a.bookPrice);
    } else {
      displayedBooks = [...(authorFilter.value === "All" ? books : books.filter(b => b.bookAuthor === authorFilter.value))];
    }
    displayBooks(displayedBooks);
  }

  displayBooks(displayedBooks);
  