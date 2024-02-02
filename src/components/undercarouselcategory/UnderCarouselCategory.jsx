import IM1 from './../../assets/img/1.jpg'
import IM2 from './../../assets/img/2.jpg'
import IM3 from './../../assets/img/3.jpg'
import IM4 from './../../assets/img/4.jpg'
import IM5 from './../../assets/img/5.png'
import IM6 from './../../assets/img/6.png'
import IM7 from './../../assets/img/7.png'
import IM8 from './../../assets/img/8.png'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './UnderCarouselCategory.css'
function UnderCarouselCategory() {
  return (
    <div>
        <div className="under-carousel-category">
            <div className="under-carousel-category-cards">
                <div className="circle-card">
                    <div className="image">
                        <img src={ IM1 } />
                    </div>
                    <div className="card-content">
                        <p>
                            <span>
                                <FiberManualRecordIcon fontSize='small'/>
                            </span>
                            Shoes
                        </p>
                    </div>
                </div>
                <div className="circle-card">
                    <div className="image">
                        <img src={ IM2 } />
                    </div>
                    <div className="card-content">
                        <p>
                            <span>
                                <FiberManualRecordIcon fontSize='small'/>
                            </span>
                            Clothing
                        </p>
                    </div>
                </div>
                <div className="circle-card">
                    <div className="image">
                        <img src={ IM3 } />
                    </div>
                    <div className="card-content">
                        <p>
                            <span>
                                <FiberManualRecordIcon fontSize='small'/>
                            </span>
                            Accessories
                        </p>
                    </div>
                </div>
                <div className="circle-card">
                    <div className="image">
                        <img src={ IM4 } />
                    </div>
                    <div className="card-content">
                        <p>
                            <span>
                                <FiberManualRecordIcon fontSize='small'/>
                            </span>
                            Equipment
                        </p>
                    </div>
                </div>
                <div className="circle-card">
                    <div className="image">
                        <img src={ IM5 } />
                    </div>
                    <div className="card-content">
                        <p>
                            <span>
                                <FiberManualRecordIcon fontSize='small'/>
                            </span>
                            Bikes
                        </p>
                    </div>
                </div>
                <div className="circle-card">
                    <div className="image">
                        <img src={ IM6 } />
                    </div>
                    <div className="card-content">
                        <p>
                            <span>
                                <FiberManualRecordIcon fontSize='small'/>
                            </span>
                            Swimware
                        </p>
                    </div>
                </div>
                <div className="circle-card">
                    <div className="image">
                        <img src={ IM7 } />
                    </div>
                    <div className="card-content">
                        <p>
                            <span>
                                <FiberManualRecordIcon fontSize='small'/>
                            </span>
                            Bestsellers
                        </p>
                    </div>
                </div>
                <div className="circle-card">
                    <div className="image">
                        <img src={ IM8 } />
                    </div>
                    <div className="card-content">
                        <p>
                            <span>
                                <FiberManualRecordIcon fontSize='small'/>
                            </span>
                            Sale
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UnderCarouselCategory