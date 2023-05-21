import about from '../../../assets/about.jpeg'

const About = () => {
    return (
        <div className="my-32 text-4xl font-bold ">
            <h2 className="text-center mb-8">About<span className="text-purple-700"> GeniusPlay</span> </h2>
            <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2 w-3/4 m-auto'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img className='rounded' src={about} alt="" />
                </div>
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500" className='w-full'>
                    <p className='text-base align-middle mt-3 font-medium'>
                        At GeniusPlay, we believe that education can be exciting and enjoyable, and our carefully curated collection of toys reflects that belief. We have sourced a wide range of educational toys from trusted manufacturers who prioritize quality, safety, and educational value. From puzzles and building blocks to science kits and coding games, our selection covers various subjects and skills, ensuring there is something for every childs interests and learning style.Thank you for choosing GeniusPlay as your go-to destination for educational and learning toys.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;