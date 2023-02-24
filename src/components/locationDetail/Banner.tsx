import * as React from "react";

import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Banner(props: any) {
    // console.log(props._site.c_bannerimages,"c_bannerimages") 

    const photos = props._site.c_bannerimages.map((img: any) => (
        <SplideSlide>
            <img src={img.image.url} />
        </SplideSlide>

    ));
    return (
        <>
            <Splide>
                {photos}
            </Splide>
        </>
    );

}



