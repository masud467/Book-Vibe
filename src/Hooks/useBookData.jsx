import { useEffect, useState } from "react";


const useBookData = () => {

    const [bookData,setBookData] = useState([])
    const [loading,setLoading] =useState(true)


    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch('/data.json')
            const data = await res.json()
            setBookData(data)
            setLoading(false)
        };
        fetchData()
    },[])
    return {bookData,loading}

};

export default useBookData;