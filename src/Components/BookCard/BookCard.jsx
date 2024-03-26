/* eslint-disable react/prop-types */

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  
} from "@material-tailwind/react";

const BookCard = ({ item }) => {
  const {
    id,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = item;
  return (
    <div>
      <Card className="mt-6 w-96 p-4">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <div>{tags}</div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {bookName}
          </Typography>
          <p> By: {author}</p>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="flex justify-between">
            <p>{category}</p>
            <div className="flex gap-2">
              <p>{rating}</p>
              <img src="/images/rating.png" alt="" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookCard;
