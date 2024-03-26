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

const BookDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const idInt = parseInt(id);
  const { bookData } = useBookData();
  //   console.log(id, singleData);

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
  } = singleData;

  return (
    <div className="max-w-7xl mx-auto">
      <Card className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
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
              <span className="flex items-center text-xl font-bold">Tag</span>
              {tags.map((element, index) => (
                <p
                  className="text-green-500 btn rounded-full px-4   font-bold"
                  key={index}
                >
                  #{element}
                </p>
              ))}
            </div>
          </Typography>
          <hr></hr>
          <div className="flex flex-col">
            <div className="flex gap-20">
              <p>Number of Pages:</p>
              <span>{totalPages}</span>
            </div>
            <div className="flex gap-[136px]">
              <p>Publisher:</p>
              <span>{publisher}</span>
            </div>
            <div className="flex gap-16">
              <p>Years of Publishing:</p>
              <span>{yearOfPublishing}</span>
            </div>
            <div className="flex gap-40">
              <p>Rating:</p>
              <span>{rating}</span>
            </div>
          </div>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2 border-2">
              Read
              
            </Button>
            <Button variant="text" className="flex items-center gap-2 border-2">
              Read
              
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default BookDetails;
