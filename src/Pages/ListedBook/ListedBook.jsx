// import useLocalStorage from "../../Hooks/useLocalStorage";

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../Utility/LocalStorage";
import ListedBookCard from "../../Components/ListedBookCard/ListedBookCard";
import { Button } from "@material-tailwind/react";

const ListedBook = () => {
  //   const { localData } = useLocalStorage();
  //   console.log(localData);

  const books = useLoaderData();

  const [listedBook, setListedBook] = useState([]);
  const [displayBook,setDisplayBook] = useState([])

  const handleBookFilter=(filter) =>{
    if(filter==='Rating'){
        setDisplayBook(listedBook)
    }
  }

  useEffect(() => {
    const storedBookIds = getStoredBook();
    if (books.length > 0) {
      const bookListed = books.filter((job) => storedBookIds.includes(job.id));
      setListedBook(bookListed);
      setDisplayBook(bookListed)
    }
  }, [books]);
  return (
    <div>
      <h1 className="bg-gray-200 text-center text-3xl font-bold py-5 rounded-xl max-w-7xl mx-auto mt-10">
        Books
      </h1>
      <div className="text-center mt-10">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">Sort by <span><img src="/images/sort.png" alt="" /></span></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>handleBookFilter('Rating')}>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="mt-20 max-w-7xl mx-auto border-b-2 ">
        <Button variant="outlined" className="mr-4">
          Read Books{" "}
        </Button>
        <Button variant="outlined">Wishlist Books </Button>
      </div>

      <div className="flex flex-col gap-10 mb-12 mt-5 max-w-7xl mx-auto">
        {displayBook.map((book) => (
          <ListedBookCard key={book.id} book={book}></ListedBookCard>
        ))}
      </div>
    </div>
  );
};

export default ListedBook;
