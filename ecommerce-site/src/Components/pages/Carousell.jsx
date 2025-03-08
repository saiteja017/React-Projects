import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Carousell(){
    return (
        <>
                 <Carousel autoPlay={true} infiniteLoop={true} interval={2000} showArrows={false} showIndicators={false} showThumbs={false}>
                <div>
                    <img className="h-[500px]" src="./src/images/clothes-1839935_640.jpg" />
                </div>
                <div>
                    <img className="h-[500px]" src="./src/images/grocery-1232944_960_720.jpg" />
                </div>
                <div>
                    <img className="h-[500px]" src="./src/images/shop-906722_640.jpg" />
                </div>
            </Carousel>
        </>
    )
}
export default Carousell;