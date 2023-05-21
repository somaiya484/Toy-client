import { useEffect, useState } from "react";

const SingleToy = () => {
    const [singleToys, setSingleToys] = useState({});

    useEffect(() => {
        fetch(`https://toy-shop-server-sepia.vercel.app/singleToy/6467d9921bff4065c244b99d`)
            .then((res) => res.json())
            .then((data) => setSingleToys(data));
    }, [])

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;