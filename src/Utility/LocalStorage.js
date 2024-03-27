// export const saveToLocalStorage = (data) => {
//   const savedData = JSON.parse(localStorage.getItem("books") || []);

//   const existedData = savedData.find((item) => item.id ===data.id);
//   if (!existedData) {
//     savedData.push(data);
//     localStorage.setItem("books", JSON.stringify(savedData));
//     alert("added data successfully...");
//   } else {
//     alert("already added this id...");
//   }
// };


const getStoredBook = () => {
    const storedBook = localStorage.getItem('book')
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return []
}

const saveBook = id => {
    const storedBooks = getStoredBook()
    const exists = storedBooks.find(bookId =>bookId===id)
    if(!exists){
        storedBooks.push(id)
        localStorage.setItem('book', JSON.stringify(storedBooks))
        alert('successfully added the book')
    }
    else{
        alert('already added this book')
    }
}

export {getStoredBook,saveBook}