import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProviders/AuthProvider";

const MyToys = () => {
    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(result => result.json())
            .then(data => setMyToys(data))
    }, [user])

    return (
        <div className="overflow-x-auto px-6 py-12 bg-purple-50">
            <table className="table table-compact w-full">
                <thead className="text-center ">
                    <tr>
                        <th className="bg-purple-200 py-5">No.</th>
                        <th className="bg-purple-200 py-5">Name</th>
                        <th className="bg-purple-200">Toy Name</th>
                        <th className="bg-purple-200">Toy category</th>
                        <th className="bg-purple-200">Price</th>
                        <th className="bg-purple-200"> Quantity</th>
                        <th className="bg-purple-200"> Rating</th>
                        <th className="bg-purple-200"></th>
                        <th className="bg-purple-200"></th>

                    </tr>
                </thead>
                {
                    myToys.map((myToy, index) => (
                        <tbody key={myToy.id} className="text-center px-3">
                            <tr>
                                <td>{index + 1}</td>
                                <td>{myToy?.userName}</td>
                                <td>{myToy.toyName}</td>
                                <td>{myToy.status}</td>
                                <td>{myToy.price}</td>
                                <td>{myToy.quantity}</td>
                                <td>{myToy.rating}</td>
                                <td>
                                    <button className=" bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2 py-1 px-2 rounded">Update</button>
                                </td>
                                <td>
                                    <button className=" bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2 py-1 px-2 rounded">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    );
};

export default MyToys;