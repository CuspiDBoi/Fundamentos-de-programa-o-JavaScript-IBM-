let books = [];

function addBook(){
    const bookName = document.getElementByIdbookName("bookNamebookName");
    const authorName = document.getElementById("authorName");
    const bookDescription = document.getElementById("bookDescription");
    const pagesNumber = document.getElementById("pagesNumber");

    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else{
        alert('Por favor, preencha todos os campos corretamente.')
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Número do livro: ${index + 1}</h1>
        <p><strong>Nome do Livro: </strong>${book.name}</p>
        <p><strong>Nome do Autor:</strong> ${book.authorName}</p>
        <p><strong>Descrição do Livro:</strong> ${book.bookDescription}</p>
        <p><strong>Nº de Páginas:</strong> ${book.pagesNumber} página(s)</p>
        <button onclick="editbook(${index})">Editar</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index){
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('AuthorName').value = book.name;
    document.getElementById('bookDescription').value = book.bookDescription;
    Document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); //remove a entrada antiga

    showbooks(); //atualiza a lista
}