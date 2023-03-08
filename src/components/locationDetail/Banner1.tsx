import * as React from "react";
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Banner1(props: any) {
    // console.log(props._site.c_bannerimages,"c_bannerimages") 

    const photos = props._site.c_bannerimages.map((img: any) => (
        <SplideSlide>
            <div style={{ position: "relative" }}>
            <div style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.4)"
                        }}>
                        </div>
                <img src={img.image.url} ></img>
                <div style={{ position: "absolute", top: "0", color: "rgb(225 225 225)", textAlign: "center", marginTop: "4%", marginLeft: "38%", fontSize: "5%", fontStyle: "italic" }}><p style={{ fontSize: "50px" }}>{img.description}</p></div>
                <div style={{ position: "absolute", top: "0", color: "rgb(225 225 225)", marginRight: "13%", marginTop: "9%", marginLeft: "13%", textAlign: "center", fontSize: "16px" }}><p>{img.image.alternateText}</p></div>
                {/* <div style={{ position: "absolute", top: "0", marginTop: "16%", marginLeft: "47.5%", color: "rgb(225 225 225)" }}><button>Read More</button></div> */}
            </div>
        </SplideSlide>

    ));
    // console.log(photos[3],"hujhgjudhujdhgishfghdsifghdjhds")
    return (
        <>
            <div style={{ position: "relative" }}>
                <div>
                    <Splide>
                        {photos}
                    </Splide>
                </div>
            </div>
        </>
    );

}



