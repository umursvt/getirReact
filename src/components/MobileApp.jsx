function MobileApp() {
  return (
    <div className="flex p-10 gap-2 rounded-md my-8 container mx-auto bg-primary-brand-color ">
      <div className=" flex flex-col justify-between ">
        <div>
          <h3 className=" text-white font-bold text-[26px] py-5  ">
            Getir'i indirin!
          </h3>
          <p className=" text-white font-extrabold text-[20px] my-5 py-3 ">
            İstediğiniz ürünleri dakikalar içinde kapınıza getirrelim.
          </p>
        </div>

        <nav className="   flex justify-start gap-5 mx-5 ">
          <a href="/">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt="adads"
            />
          </a>
          <a href="/">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt="adasd"
            />
          </a>
          <a href="/">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt="asdasda"
            />
          </a>
        </nav>
      </div>

      <div className=" ">
        <a href="/">
          <img
            src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
            alt="adas"
          />
        </a>
      </div>
    </div>
  );
}

export default MobileApp;
