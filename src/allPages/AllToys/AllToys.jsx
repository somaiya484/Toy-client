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
        <div className="overflow-x-auto px-6 py-12">
            <table className="table table-compact w-full">
                <thead className="text-center">
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Toy category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>

                    </tr>
                </thead>
                {
                    toys.map(toy => (
                        <tbody key={toy.id} className="text-center">
                            <tr>
                                <td>{toy.sellerEmail}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.userName}</td>
                                <td>{toy.price}</td>
                                <td><button className=" bg-purple-700 text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2 py-1 px-3 rounded
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