import BrandsList from "../components/brandlist/BrandList"
import MainCarousel from "../components/maincarousel/MainCarousel"
import MiniCarousel from "../components/minicarousel/MiniCarousel"
import UnderCarouselCategory from "../components/undercarouselcategory/UnderCarouselCategory"
import ShopBySport from "../components/shopbysport/ShopBySport"
import Footer from "../components/footer/Footer"

function Home() {
  return (
    <div>
      <div className="home">
        <div className="container">
          <MainCarousel auto="True" />
          <UnderCarouselCategory />
          <h1>Top Trending Brands</h1>
          <BrandsList />
          <MiniCarousel />
          <h1>Shop By Sport</h1>
          <ShopBySport />
          <MiniCarousel />
          <UnderCarouselCategory />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home