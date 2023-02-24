import * as React from "react";
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
//   } from 'react-accessible-accordion';
// import AccordionItem from "../locationDetail/AccordianItem";


export default function FAQs(props: any) {
    console.log(props.faqs, "c_featuredFAQs")
    return (
        <>
            <div className="flex w-full" style={{ backgroundColor: "white" }}>
                <div className="flex w-full">
                    {props.faqs && props.faqs?.map((j: any) => {
                        return (
                            <>
                                <div className="flex w-full" style={{ fontSize: "20px", marginTop: "40px" }}>
                                    <div className="nearby-sec-inner">
                                        <div className="nearby-card">
                                            {j.name}
                                            <br />
                                            <br />
                                            {j.answer}
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



