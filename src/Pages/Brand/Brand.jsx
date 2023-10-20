import { useLoaderData } from "react-router-dom";
import BrandItem from "../../components/BrandItem";



const Brand = () => {

    const brands = useLoaderData()
    console.log(brands);

    const img1 = brands[0]?.photo
    const img2 = brands[1]?.photo
    const img3 = brands[2]?.photo
    const img4 = brands[3]?.photo
    return (

        // carousel
        <div>
           <div>

           <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
           </div>
          <div className="grid grid-cols-2 gap-4">
          {
            brands.map(item => <BrandItem key={item._id} item={item}></BrandItem>)
           }
          </div>
        </div>
    );
};

export default Brand;