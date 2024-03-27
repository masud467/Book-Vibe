// import useLocalStorage from "../../Hooks/useLocalStorage";

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../Utility/LocalStorage";
import ListedBookCard from "../../Components/ListedBookCard/ListedBookCard";

const ListedBook = () => {
  //   const { localData } = useLocalStorage();
  //   console.log(localData);

  const books = useLoaderData();

  const [listedBook, setListedBook] = useState([]);
  useEffect(() => {
    const storedBookIds = getStoredBook();
    if (books.length > 0) {
      const bookListed = books.filter((job) => storedBookIds.includes(job.id));
      setListedBook(bookListed);
    }
  }, [books]);
  return (
    <div>
      <h1>listed book: {listedBook.length}</h1>

      <div>
        {listedBook.map((book) => (
          <ListedBookCard key={book.id} book={book}></ListedBookCard>
        ))}
      </div>
    </div>
  );
};

export default ListedBook;
