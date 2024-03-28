/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import useBookData from "../../Hooks/useBookData";
// import useLocalStorage from "../../Hooks/useLocalStorage";

import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



// import { useParams } from "react-router-dom";

const PagesToRead = () => {
//   const { bookData } = useBookData();
//   const { localData } = useLocalStorage();
//   const [chart,setChart] = useState({})
//   const {id} = useParams()
//   const idInt =parseInt(id)

  
//   useEffect(() => {
//     const singleData = bookData.map((item) => item.id === idInt);
//     // console.log(singleData);
//     setChart(singleData);
//   }, [bookData,idInt]);

//  const {bookName,totalPages} = chart

 const [chart,setChart]= useState([])

 useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data =>{
        const chartData =data
        const chartFakeData = chartData.map(book=>{
            const obj ={
                name: book.bookName,
                pages:book.totalPages
            }
            return obj
        })
        console.log(chartFakeData)
        setChart(chartFakeData)
    })
    
 },[])

 
  

  return (
    <div className="text-center mt-10  ">

       <BarChart className="mx-auto lg:max-w-7xl " width={600} height={400} data={chart}>
          <Bar dataKey="pages" fill="#8884d8" />
          <XAxis   dataKey="name"></XAxis>
          <YAxis dataKey="pages"></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
    


    </div>
  );
};

export default PagesToRead;
