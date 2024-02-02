import Im1 from './../../assets/img/bb1.jpg'
import Im2 from './../../assets/img/bb2.jpg'
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  width:'100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const MiniCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} autoplay>
      <div>
        <img src={Im1} alt="" style={contentStyle}/>
      </div>
      <div>
        <img src={Im2} alt="" style={contentStyle}/>
      </div>
    </Carousel>
  );
};
export default MiniCarousel;