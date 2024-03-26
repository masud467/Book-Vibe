/* eslint-disable react/prop-types */

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BookCard = ({ item }) => {
  const { id, bookName, author, image, rating, category, tags } = item;
  return (
    <Link to={`/book-details/${id}`}>
      <Card className="mt-6 w-full p-4 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <div className=" md:flex gap-9 mb-5 mt-3">
            {tags.map((element, index) => (
              <p className="text-green-500 btn rounded-full px-7" key={index}>
                {element}
              </p>
            ))}
          </div>
          <Typography variant="h5" color="blue-gray" className="my-5">
            {bookName}
          </Typography>
          <p className="text-[16px] font-semibold "> By: {author}</p>
        </CardBody>
        <div className=" border border-gray-400 border-dashed"></div>
        <CardFooter className="pt-0">
          <div className="flex justify-between mt-5">
            <p>{category}</p>
            <div className="flex gap-2">
              <p>{rating}</p>
              <img src="/images/rating.png" alt="" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BookCard;
