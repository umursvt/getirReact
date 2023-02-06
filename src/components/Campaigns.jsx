import Slider from 'react-slick';
import Banners from '../api/banners.json';
import { useState, useEffect } from 'react';

function Campains() {
  const [banners, setBenners] = useState([]);

  useEffect(() => {
    setBenners(Banners);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
  };
  return (
    <div className=" container mx-auto py-8 ">
      <div className="container mx-auto font-semibold text-sm ">
        <h3 className=" mb-5">Kampanyalar</h3>
      </div>

      <Slider {...settings} className=" -px-2 ">
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className=" block px-3  ">
                <img src={banner.image} alt="adasd" className=" rounded " />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campains;
