import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import math1 from '../../../assets/c-1.jpg'
import math2 from '../../../assets/c-2.jpg'
import math3 from '../../../assets/c-3.jpg'
import { FaStar } from 'react-icons/fa';




const Category = () => {
    return (
        <div className='w-3/4 m-auto'>
            <Tabs className='text-center'>
                <TabList className='bg-purple-500 rounded text-white font-medium '>
                    <Tab>Knowledgeable Toys</Tab>
                    <Tab>Science Toys</Tab>
                    <Tab>Math Toys</Tab>
                </TabList>
                {/* <TabList className="tabs">
                    <Tab className="tab tab-bordered border-purple-700">Tab 1</Tab>
                    <Tab className="tab tab-bordered tab-active border-purple-700">Tab 2</Tab>
                    <Tab className="tab tab-bordered border-purple-700">Math Toys</Tab>
                </TabList> */}


                <TabPanel>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-full bg-base-100 shadow-lg my-10">
                            <figure className="px-10 pt-10">
                                <img src={math3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Magnetic Math</h2>
                                <p>A toy that combines magnetic numbers and operations to make math  and enjoyable.</p>
                                <p className="font-medium">Price: 200</p>
                                <p className="font-medium">Quantity: 20</p>
                                <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >4.5</span> </p>
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-lg my-10">
                            <figure className="px-10 pt-10">
                                <img src={math3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Magnetic Math</h2>
                                <p>A toy that combines magnetic numbers and operations to make math  and enjoyable.</p>
                                <p className="font-medium">Price: 200</p>
                                <p className="font-medium">Quantity: 20</p>
                                <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >4.5</span> </p>
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-lg my-10">
                            <figure className="px-10 pt-10">
                                <img src={math3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Magnetic Math</h2>
                                <p>A toy that combines magnetic numbers and operations to make math  and enjoyable.</p>
                                <p className="font-medium">Price: 200</p>
                                <p className="font-medium">Quantity: 20</p>
                                <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >4.5</span> </p>
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>



                <TabPanel>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-full bg-base-100 shadow-lg my-10">
                            <figure className="px-10 pt-10">
                                <img src={math3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Toy microscope</h2>
                                <p>A compact and fascinating educational tool that brings the wonders of science into childrens hands.</p>
                                <p className="font-medium">Price: 1200</p>
                                <p className="font-medium">Quantity: 8</p>
                                <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >5</span> </p>
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-lg my-10">
                            <figure className="px-10 pt-10">
                                <img src={math3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Electric Wiggler Kinetic</h2>
                                <p>A mesmerizing kinetic toy that wiggles and dances to the sound of music.</p>
                                <p className="font-medium">Price: 2000</p>
                                <p className="font-medium">Quantity: 5 </p>
                                <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >4.9</span> </p>
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-lg my-10">
                            <figure className="px-10 pt-10">
                                <img src={math3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Building Blocks Set</h2>
                                <p>Unlock endless creativity and imagination with this versatile and colorful construction toy for all ages.	</p>
                                <p className="font-medium">Price: 600</p>
                                <p className="font-medium">Quantity: 20</p>
                                <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >4.1</span> </p>
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>



                <TabPanel>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-full bg-base-100 shadow-lg my-10">
                            <figure className="px-10 pt-10">
                                <img src={math1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Geometric Stacker</h2>
                                <p>A captivating toy that enhances spatial awareness and motor skills by stacking colorful shapes.</p>
                                <p className="font-medium">Price: 1000</p>
                                <p className="font-medium">Quantity: 8</p>
                                <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >4.5</span> </p>
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-lg my-10">
                            <figure className="px-10 pt-10">
                                <img src={math2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Bubble Push</h2>
                                <p>A delightful push toy that encourages early walking and fine motor skills development.</p>
                                <p className="font-medium">Price: 500</p>
                                <p className="font-medium">Quantity: 30</p>
                                <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >4.5</span> </p>
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-lg my-10">
                            <figure className="px-10 pt-10">
                                <img src={math3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Magnetic Math</h2>
                                <p>A toy that combines magnetic numbers and operations to make math  and enjoyable.</p>
                                <p className="font-medium">Price: 200</p>
                                <p className="font-medium">Quantity: 20</p>
                                <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >4.5</span> </p>
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;


{/* <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
<div className="card w-full bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
        <img src="https://www.edsys.in/wp-content/uploads/41VuoZwCdL._AC_SY400_.jpg" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
</div>
<div className="card w-full bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
</div>
<div className="card w-full bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
</div>
</div> */}