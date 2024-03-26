import { useEffect, useState } from "react";


const useBookData = () => {

    const [bookData,setBookData] = useState([])


    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch('/data.json')
            const data = await res.json()
            setBookData(data)
        };
        fetchData()
    },[])
    return {bookData}

};

export default useBookData;