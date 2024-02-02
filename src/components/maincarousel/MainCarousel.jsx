import { Carousel } from 'antd';
import Banner1 from './../../assets/img/mb.jpg'
import Banner2 from './../../assets/img/mb1.jpg'
import Banner3 from './../../assets/img/mb2.jpg'
const contentStyle = {
  margin: 0,
  height: '260px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const MainCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} autoplay>
      <div>
        <img style={contentStyle} src={Banner1} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={Banner2} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={Banner3} alt="" />
      </div>
    </Carousel>
  );
};
export default MainCarousel;