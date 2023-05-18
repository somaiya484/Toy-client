import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner-1.jpg'
import banner3 from '../../../assets/banner-3.jpg'


const BannerSec = () => {
    return (
        <div className="carousel w-full  h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#5c22e0c4] to-[#faf9fa19]">
                    <div className='text-[#1a1818] space-y-7 pl-20 w-3/4 '>
                        <h2 className='text-6xl font-bold leading-tight'>Explore the World <br />of Knowledge with Our Toys!</h2>
                        <p className='w-3/4 text-#727272'>At Genius Play, we believe in the power of play to spark curiosity and foster a love for learning. <br /> Each toy is thoughtfully crafted to provide an enriching experience that combines fun and education.</p>
                      
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full h-4/4" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h2>Unlock the Power of Imagination with our Knowledge-Boosting Toys!</h2>
                    <p>
                        Discover Endless Adventures with Educational Toys! Prepare for exciting journeys of knowledge with our collection of educational toys. From interactive maps that teach geography and history to building sets that develop engineering and critical thinking skills, our toys open up a world of possibilities. Watch as your child embarks on thrilling adventures, solving puzzles, conducting experiments, and expanding their understanding of the world around them. With our educational toys, learning becomes an immersive and captivating experience.
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h2>Discover Endless Adventures with Educational Toys!</h2>
                    <p>
                        Unlock the Power of Imagination with our Knowledge-Boosting Toys! Imagination is the gateway to creativity and innovation. Our knowledge-boosting toys are designed to fuel the imagination and inspire children to dream big. From imaginative playsets that transport them to different professions and cultures to storytelling kits that encourage language and communication skills, our toys provide a platform for self-expression and exploration. Let your child ids imagination soar as they build, create, and embark on imaginative journeys, all while gaining valuable knowledge along the way.
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerSec;