import About from "../../Others/About/About";
import Category from "../../Others/Category/Category";
import Gallery from "../../Others/Gallery/Gallery";
import Testimonials from "../../Others/Testimonials/Testimonials";
import BannerSec from "../BannerSec/BannerSec";




const Banner = () => {
    return (
        <div className="">
            <BannerSec></BannerSec>
            <About></About>
            <Gallery></Gallery>
            <Category></Category>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Banner;