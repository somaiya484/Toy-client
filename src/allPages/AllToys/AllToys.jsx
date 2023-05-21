import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchToy, setSearchToy] = useState("")


    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(result => {
                setToys(result)
            })
    }, []);


    const searchHandle = () => {
        fetch(`http://localhost:5000/getToysBySearch/${searchToy}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }

    return (
        <div className="overflow-x-auto px-6 py-12 bg-purple-50">
            <div className="search-box p-2 text-center">
                <input className="border-purple-500 border-2 py-3 px-4 m-2 rounded " placeholder="Toy Name"
                    type="text"
                    onChange={(event) => setSearchToy(event.target.value)}
                />{" "}
                <button onClick={searchHandle} className=" py-1 px-3 border-purple-700 border-2 bg-purple-700 text-white text-sm text-center m-10 rounded mt-4 ml-1 cursor-pointer hover:bg-transparent hover:text-black hover:border-purple-700 ">Search</button>
            </div>
            <table className="table table-compact w-full">
                <thead className="text-center ">
                    <tr>
                        <th className="bg-purple-200 py-5">No.</th>
                        <th className="bg-purple-200 py-5">Name</th>
                        <th className="bg-purple-200">Toy Name</th>
                        <th className="bg-purple-200">Toy category</th>
                        <th className="bg-purple-200">Price</th>
                        <th className="bg-purple-200">Available Quantity</th>
                        <th className="bg-purple-200"></th>

                    </tr>
                </thead>
                {
                    toys.map((toy, index) => (
                        <tbody key={toy.id} className="text-center px-3">
                            <tr>
                                <td>{index + 1}</td>
                                <td>{toy?.userName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.status}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td><button className=" bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2 py-1 px-3 rounded
                                "><Link to="/singleToy">View Details</Link></button></td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    );
};

export default AllToys;