import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import Categories from '../src/components/Categories';
import Campaigns from '../src/components/Campaigns';
import Favorites from '../src/components/Favorites';
import MobileApp from '../src/components/MobileApp';
import Cards from '../src/components/Cards';
import Footer from '../src/components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <Favorites />
      <div className=" bg-slate-100 ">
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
