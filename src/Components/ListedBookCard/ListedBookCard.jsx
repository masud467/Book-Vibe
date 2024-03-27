/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ListedBookCard = ({book}) => {
    const {
        id,
        bookName,
        author,
        image,
        rating,
        category,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
      } = book|| {};
    return (
        <div>
            <Card className="w-full  flex-row ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-56 w-56  object-cover rounded-lg"
        />
      </CardHeader>
      <CardBody>
       
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {bookName}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          By : {author}
        </Typography>
        <Typography className="flex gap-7" >
           <div className="flex gap-7">
           Tag: {tags.map(tag=><p key={tag.id}>#{tag}</p>)}
           </div>
           <div>
            <img src="/images/publish.png" alt="" />
            <p>Year of Publishing: {yearOfPublishing}</p>
           </div>
        </Typography>
        <Typography className="flex gap-7">
            <p>Publisher: {publisher}</p>
            <p>Pages {totalPages}</p>
        </Typography>
        <Typography className="flex gap-8">
            <p>Category:{category}</p>
            <p>Rating: {rating}</p>
            <Link to={`/book-details/${id}`}><Button className="bg-green-500 rounded-full">View Details</Button></Link>
        </Typography>
        
      </CardBody>
    </Card>
        </div>
    );
};

export default ListedBookCard;