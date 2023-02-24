import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Menuitem1(props: any) {
    console.log(props.c_menuphoto, "c_menuphoto")
    return (
        <>
            <div className="flex w-full" style={{ backgroundColor: "white" }}>
                <div className="flex w-full">
                    {props.c_menuphoto.map((m: any) => {
                        return (
                            <>
                                <div className="flex w-full" style={{ fontSize: "20px" }}>
                                    <div className="container">
                                        <div className="nearby-sec-inner">
                                            <div className="nearby-card" style={{ textAlign: "center" }}>
                                                <a href="#">{m.alternateText}</a>
                                                <img src={m.url} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>

            </div>
        </>
    )
}


