import Gallery from "../../Others/Gallery/Gallery";
import BannerSec from "../BannerSec/BannerSec";



const Banner = () => {
    return (
        <div className="bg-purple-100">
            <BannerSec></BannerSec>
            <Gallery></Gallery>
        </div>
    );
};

export default Banner;