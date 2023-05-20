import Category from "../../Others/Category/Category";
import Gallery from "../../Others/Gallery/Gallery";
import BannerSec from "../BannerSec/BannerSec";



const Banner = () => {
    return (
        <div className="bg-purple-100">
            <BannerSec></BannerSec>
            <Gallery></Gallery>
            <Category></Category>
            
        </div>
    );
};

export default Banner;