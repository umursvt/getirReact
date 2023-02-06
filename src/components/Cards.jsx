function Cards() {
  return (
    <div className=" gap-10 mx-auto py-12 container  grid grid-cols-3  ">
      <div className="left bg-white p-5 rounded  ">
        <a href="/">
          <img
            src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
            alt="adad"
            className=" mx-auto py-10 "
          />
        </a>
        <h3 className=" text-center text-brand-color py-3 font-semibold text-[18px]  ">
          Her siparişinize bir kampanya
        </h3>
        <p className=" text-center  text-gray-500  pb-5  ">
          Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
        </p>
      </div>
      <div className="mid  bg-white p-5 rounded">
        <a href="/">
          <img
            src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
            alt="adad"
            className="mx-auto py-10"
          />
        </a>
        <h3 className=" text-center text-brand-color py-3 font-semibold text-[18px] ">
          Dakikalar içinde kapınızda
        </h3>
        <p className="text-center  text-gray-500  pb-5 ">
          Getir’le siparişiniz dakikalar içinde kapınıza gelir.
        </p>
      </div>
      <div className="right  bg-white p-5 rounded">
        <a href="/">
          <img
            src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
            alt="asdasd"
            className="mx-auto py-10"
          />
        </a>
        <h3 className=" text-center text-brand-color py-3 font-semibold text-[18px] ">
          Binlerce çeşit mutluluk
        </h3>
        <p className=" text-center text-gray-500  pb-5 ">
          Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
        </p>
      </div>
    </div>
  );
}

export default Cards;
