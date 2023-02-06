function Footer() {
  return (
    <div className=" container mx-auto grid grid-cols-5 ">
      <div className="first">
        <div>
          <h3 className=" text-brand-color my-8 "> Getir'i indirin! </h3>
        </div>
        <div>
          <a href="/">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </a>
        </div>
        <div className=" my-4 ">
          <a href="/">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="/">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="second">
        <h3 className="   text-brand-color my-8 ">Getir'i keşfedin</h3>
        <div>
          <a href="/" className=" text-sm ">
            <p className=" pb-5 ">Hakkımızda</p>
            <p className=" pb-5 ">Kariyer</p>
            <p className=" pb-5 ">Teknoloji Kariyerleri</p>
            <p className=" pb-5 ">Sosyal Sorumluluk Projeleri</p>
          </a>
        </div>
      </div>
      <div className="third pb-10 ">
        <h3 className=" text-brand-color my-8 ">Yardıma mı ihtiyacınız var?</h3>
        <div>
          <a href="/" className=" text-sm ">
            <p className=" pb-3 ">Sıkça Sorulan Sorular</p>
            <p className=" pb-3 ">Kişisel Verilerin Korunması</p>
            <p className=" pb-3 ">Gizlilik Politikası</p>
            <p className=" pb-3 ">Kullanım Koşulları</p>
            <p className=" pb-3 ">Çerez Politikası</p>
          </a>
        </div>
      </div>
      <div className="fourth">
        <h3 className=" text-brand-color my-8">İş Ortağımız Olun</h3>
        <div>
          <a href="/">
            <p className=" pb-3 text-sm  ">Bayimiz Olun</p>
            <p className=" pb-3 text-sm ">Deponuzu Kiralayın</p>
            <p className=" pb-3 text-sm ">GetirYemek Restoranı Olun</p>
            <p className=" pb-3 text-sm ">GetirÇarşı İşletmesi Olun</p>
            <p className=" pb-3 text-sm ">Zincir Restorantlar</p>
          </a>
        </div>
      </div>
      <div className="fifth container ">
        <a href="/">
          <img
            src="https://cdn.getir.com/getirweb-images/common/etbis.png"
            alt="adad"
            className=" w-20 mx-auto py-5  "
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
