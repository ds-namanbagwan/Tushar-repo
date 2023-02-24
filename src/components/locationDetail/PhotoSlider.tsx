import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PhotoSlider = (props: any) => {
  const { banners } = props;

  const photo = banners && banners?.map((img: any) => (
    
    <SplideSlide>
    <div style={{position:"relative"}}>
    <img src={img.image.url} ></img>
    <div style={{position:"absolute",top:"0",color:"rgb(194 216 250)",textAlign:"center",marginTop:"8.5%",marginLeft:"38%",fontSize:"5%",fontStyle:"italic"}}><p style={{fontSize:"50px"}}>{img.description}</p>
    {/* <div><a style={{fontSize:"15px"}} href="#">READ MORE</a></div>   */}
    </div>
  
    
  
    </div>
</SplideSlide>
  ));
  return (
    <>
      <Splide>
        {photo}
      </Splide>
    </>
  );



};

export default PhotoSlider;
