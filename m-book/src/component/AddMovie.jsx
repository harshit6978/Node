import React from 'react'

const AddMovie = () => {

    

    return (
        <>
            <div className='addfood'>
                <div class="w-full mx-auto p-[155px] bg-slate-200">
                    <form className=" ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5" >

                        <div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">


                            <input type="text" placeholder="Enter Movie Name" name="name" class="input input-bordered shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

                            <input type="file" name='myFile' accept=" .jpeg, .png, .jpg" className="file-input  bg-red-500 file-input-md text-white file-input-bordered w-full max-w-xs" />

                            <input type="Number" placeholder="Enter Price" name="price" class=" shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />


                            <input type="Number" placeholder="Enter Actor Name" name="weight" class=" shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <input type="Number" placeholder="Enter Director" name="qty" class=" shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

                            <input type="text" placeholder="Enter Location" name="location" class=" shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

                            <textarea name='description' className="textarea col-span-2 textarea-ghost  shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Description"></textarea>
                        </div>


                        <button class=" bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center mb-3 mt-5" type="submit">
                            Add Movie
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default AddMovie