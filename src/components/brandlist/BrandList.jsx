import M1 from './../../assets/brands/adi.svg'
import M2 from './../../assets/brands/columbia.svg'
import M3 from './../../assets/brands/northface.svg'
import M4 from './../../assets/brands/New_Balance.svg'
import M5 from './../../assets/brands/nike.svg'
import M6 from './../../assets/brands/puma.svg'
import M7 from './../../assets/brands/timberland.svg'
import M8 from './../../assets/brands/under armour.svg'



import './BrandList.css'

const BrandList = () => {
  return (
    <div>
        <div className="brands-container">
            <div className="brand">
                <img src={M1} alt="" />
            </div>
            <div className="brand">
                <img src={M2} alt="" />
            </div>
            <div className="brand">
                <img src={M3} alt="" />
            </div>
            <div className="brand">
                <img src={M4} alt="" />
            </div>
            <div className="brand">
                <img src={M8} alt="" />
            </div>
            <div className="brand">
                <img src={M5} alt="" />
            </div>
            <div className="brand">
                <img src={M6} alt="" />
            </div>
            <div className="brand">
                <img src={M7} alt="" />
            </div>
        </div>
    </div>
  );
};
export default BrandList;