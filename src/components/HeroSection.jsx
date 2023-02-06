import { useState } from 'react';
import Slider from 'react-slick';
import { BsFacebook } from 'react-icons/bs';
import ReactFlagsSelect from 'react-flags-select';

function HeroSection() {
  const [selected, setSelected] = useState('TR');
  const phones = {
    US: '+1',
    DE: '+2',
    TR: '+90',
    IT: '+4',
    IN: '+15',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
  };
  return (
    <div className=" h-[500px] relative bg-gradient-to-r before:from-primary-brand-color before:to-brand-color  before:absolute before:inset-0 before:z-10 before:w-full before:h-full  ">
      <Slider {...settings}>
        <div>
          <img
            className="w-full  h-[500px] object-cover "
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt="getir1"
          />
        </div>
        <div>
          <img
            className="w-full   h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt="getir2"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover "
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt="getir3"
          />
        </div>
      </Slider>
      <div className=" container absolute top-0 left-1/2 -translate-x-1/2 h-full z-20 text-white flex justify-between items-center ">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="logo"
          />

          <h3 className="mt-5 text-4xl font-semibold text-white ">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className=" w-[400px] rounded-lg bg-gray-50 p-6 ">
          <h4 className=" text-primary-brand-color text-center font-semibold ">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-2">
            <div className="flex gap-x-2 ">
              <div>
                <ReactFlagsSelect
                  countries={Object.keys(phones)}
                  customLabels={phones}
                  className=" text-black flag-select "
                  onSelect={(code) => setSelected(code)}
                  selected={selected}
                />
              </div>

              <label className="flex-1 relative block ">
                <input
                  required
                  type="text"
                  className=" text-black text-center font-bold rounded-lg w-full h-14 border-solid border-2 outline-none text-sm pt-2  focus:border-orange-200 peer "
                />
                <span className="absolute top-0 left-0 h-full px-4   flex items-center  text-sm  text-gray-500 peer-focus:h-7 peer-valid:h-7 transition-all peer-focus:text-primary-brand-color peer-valid:text-primary-brand-color peer-focus:text-xs peer-valid:text-xs  ">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="transition-colors bg-brand-yellow  text-primary-brand-color hover:bg-primary-brand-color hover:text-brand-yellow  w-full flex justify-center items-center rounded-md h-12 text-sm font-semibold ">
              Telefon numarası ile devam et
            </button>
            <hr className=" h-[1px] bg-gray-300 my-2 " />
            <button className="transition-colors bg-blue-900  text-blue700 hover:text-brand-yellow  w-full flex justify-start px-16 gap-2 items-center rounded-md h-12 text-sm font-semibold ">
              <BsFacebook size={20} className=" mx-2" />
              Facebook ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
