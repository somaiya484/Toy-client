import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jfif'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img7.jpg'
import img6 from '../../../assets/img8.jpg'
import img7 from '../../../assets/img9.jpg'
import img8 from '../../../assets/img10.jpg'
import img9 from '../../../assets/img-11.jpg'

const Gallery = () => {
    return (
        <div className="my-32 text-4xl font-bold ">
            <h2 className="text-center mb-8">Some Of Our <span className="text-purple-700"> Genius Toys</span> </h2>
            <div className="flex  items-center justify-center  px-12 " data-aos="fade-up"
     data-aos-duration="3000">
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30  h-80  rounded">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img1} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl  text-white">Code-a-Pillar</h1>
                            <p className="mb-3 text-sm font-normal py-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Fun caterpillar toy teaches coding concepts through interactive play.</p>
                            <button className="rounded-full font-medium bg-purple-800 py-2 px-3.5 font-com text-sm capitalize text-white">Buy Now</button>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30  h-80  rounded">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img2} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl  text-white">Snap Circuits</h1>
                            <p className="mb-3 text-sm font-medium py-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Learn electronics by building circuits with safe and easy-to-use components.</p>
                            <button className="rounded-full font-medium bg-purple-800 py-2 px-3.5 font-com text-sm capitalize text-white">Buy Now</button>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30  h-80  rounded">
                        <div className="h-96 w-72">
                            <img className="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img3} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl  text-white">Magna-Tiles Star</h1>
                            <p className="mb-3 text-sm font-medium py-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Magnetic tiles that inspire imaginative play while developing spatial awareness and creativity.</p>
                            <button className="rounded-full font-medium bg-purple-800 py-2 px-3.5 font-com text-sm capitalize text-white">Buy Now</button>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30  h-80  rounded">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img4} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl  text-white">Osmo</h1>
                            <p className="mb-3 text-sm font-medium py-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Interactive learning system that combines physical objects with digital games for hands-on education.</p>
                            <button className="rounded-full font-medium bg-purple-800 py-2 px-3.5 font-com text-sm capitalize text-white">Buy Now</button>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30  h-80  rounded">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img5} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl  text-white"> shape puzzles</h1>
                            <p className="mb-3 text-sm font-medium py-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Develop shape recognition, spatial skills, and problem-solving abilities through tactile play.</p>
                            <button className="rounded-full font-medium bg-purple-800 py-2 px-3.5 font-com text-sm capitalize text-white">Buy Now</button>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30  h-80  rounded">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img6} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl  text-white">  science kits</h1>
                            <p className="mb-3 text-sm font-medium py-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Inspire scientific exploration and discovery of biology, chemistry, and more.</p>
                            <button className="rounded-full font-medium bg-purple-800 py-2 px-3.5 font-com text-sm capitalize text-white">Buy Now</button>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30  h-80  rounded">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img7} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl  text-white">Solar system models</h1>
                            <p className="mb-3 text-sm font-medium py-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Encourage curiosity about the universe with hands-on exploration of planetary systems.</p>
                            <button className="rounded-full font-medium bg-purple-800 py-2 px-3.5 font-com text-sm capitalize text-white">Buy Now</button>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30  h-80  rounded">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img8} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl  text-white">Botley the Coding Robot</h1>
                            <p className="mb-3 text-sm font-medium py-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Programmable robot introducing coding principles through fun, interactive play</p>
                            <button className="rounded-full font-medium bg-purple-800 py-2 px-3.5 font-com text-sm capitalize text-white">Buy Now</button>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30  h-80  rounded">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img9} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl  text-white"> Ward Game</h1>
                            <p className="mb-3 text-sm font-medium py-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Enhance vocabulary, spelling, and critical thinking skills through engaging word challenges.</p>
                            <button className="rounded-full font-medium bg-purple-800 py-2 px-3.5 font-com text-sm capitalize text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;