import useBookData from "../../Hooks/useBookData";
import BookCard from "../BookCard/BookCard";


const BookList = () => {
    const {bookData} =useBookData()
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-10">Books</h1>

             <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
                {
                    bookData.map(item=> <BookCard key={item.id} item={item}></BookCard>)
                }
             </div>
        </div>
    );
};

export default BookList;