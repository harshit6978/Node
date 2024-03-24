import React, { useEffect, useState } from 'react'
import axios from "axios"

const Home = () => {

  const [data, setdata] = useState([])

  const getAllmovie = () => {

    axios.get("http://localhost:4000/v1/movie/getMovie").then((res) => {
      setdata(res.data.data)
    })
  }
  console.log(data);

  useEffect(() => {
    getAllmovie()
  }, [])


  return (
    <>
      <div className="flex flex-wrap ">

       
        {
          data?.map((val) => {
            return (
              <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mb-4 m-6">
                <div className="px-4 py-2">
                  <h2 className="text-gray-800 text-lg font-semibold">{val.Name}</h2>
                  <p className="text-gray-600 mt-1">{val.actor}</p>
                  <p className="text-gray-600 mt-1">{val.director}</p>
                </div>
                <div className="flex items-center  px-4 py-2 bg-gray-900">
                  <h3 className="text-gray-200 font-semibold">{val.price}</h3>
                  <button className="bg-blue-500 text-xs text-white px-2 py-1 rounded uppercase hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add to cart</button>
                </div>
              </div>
            )
          })
        }



      </div>

    </>
  )
}

export default Home