import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBookData from "../../Hooks/useBookData";
import {  saveBook} from "../../Utility/LocalStorage";

const BookDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const idInt = parseInt(id);
  const { bookData,loading } = useBookData();
  //   console.log(id, singleData);

  const handleListedReadBook = () => {
    saveBook(idInt)
    // saveToLocalStorage(singleData)
    // console.log('clicked.......')
  }

  useEffect(() => {
    const singleData = bookData.find((item) => item.id === idInt);
    // console.log(singleData);
    setSingleData(singleData);
  }, [bookData, idInt]);

  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleData || {};

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Card className="w-full  flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover rounded-lg"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {bookName}
          </Typography>
          <Typography>By: {author}</Typography>
          <hr></hr>
          <Typography>{category}</Typography>
          <hr></hr>
          <Typography color="gray" className="mb-8 font-normal">
            <span>Review:</span> {review}
          </Typography>
          <Typography>
            <div className=" md:flex gap-9 mb-5 mt-3">
              <p className="flex items-center  text-xl font-bold gap-1">Tag:<span className="flex  btn text-green-500">#{tags}</span></p>
              {/* {
              tags.map((element, index) => (
                <p
                  className="text-green-500 btn rounded-full px-4 font-bold"
                  key={index} 
                >
                  #{element}
                </p>
              ))} */}
            </div>
          </Typography>
          <hr></hr>
          <div className="flex flex-col">
            <div className="flex gap-20">
              <p>Number of Pages:</p>
              <span className=" font-bold">{totalPages}</span>
            </div>
            <div className="flex gap-[136px]">
              <p>Publisher:</p>
              <span className=" font-bold">{publisher}</span>
            </div>
            <div className="flex gap-16">
              <p>Years of Publishing:</p>
              <span className=" font-semibold">{yearOfPublishing}</span>
            </div>
            <div className="flex gap-40">
              <p>Rating:</p>
              <span className=" font-bold">{rating}</span>
            </div>
          </div>
          
            <div className="flex gap-8 mt-5">
            <Button onClick={handleListedReadBook} variant="text" className="flex items-center gap-2 border-2 text-xl font-semibold  ">
              Read
              
            </Button>
            <Button onClick={handleListedReadBook} size="lg" variant="text" className="flex items-center gap-2 border-2 bg-blue-400 text-white text-xl font-semibold">
            Wishlist
              
            </Button>
            </div>
        
        </CardBody>
      </Card>
    </div>
  );
};

export default BookDetails;
