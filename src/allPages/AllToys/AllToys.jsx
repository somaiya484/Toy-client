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
        <div className="overflow-x-auto px-6">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => (
                            <div key={toy.id}>
                                <tr>
                                    <td>{toy.sellerEmail}</td>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.userName}</td>
                                    <td>{toy.price}</td>
                                </tr>
                            </div>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;