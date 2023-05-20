import { useEffect, useState } from "react";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(result => {
                setToys(result)
            })
    }, [])

    return (
        <div className="overflow-x-auto px-6 py-12 bg-purple-50">
            <table className="table table-compact w-full">
                <thead className="text-center ">
                    <tr>
                        <th className="bg-purple-200 py-5">Seller</th>
                        <th className="bg-purple-200">Toy Name</th>
                        <th className="bg-purple-200">Toy category</th>
                        <th className="bg-purple-200">Price</th>
                        <th className="bg-purple-200">Available Quantity</th>
                        <th className="bg-purple-200"></th>

                    </tr>
                </thead>
                {
                    toys.map(toy => (
                        <tbody key={toy.id} className="text-center px-3">
                            <tr>
                                <td>{toy?.userName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.status}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td><button className=" bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2 py-1 px-3 rounded
                                ">View Details</button></td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    );
};

export default AllToys;