import * as React from "react"
export default function Services(props: any) {
    //console.log(props.service,"c_servicesdata")
    return (
        <>
            <div className="flex w-full" style={{ backgroundColor: "white" }}>
                {/* <div className="flex w-full"> */}
                <div className="flex w-full">
                    {props.service && props.service?.map((s: any) => {
                        return (
                            <>
                                <div className="container">
                                    <div className="nearby-sec-inner">
                                        <div className="nearby-card">
                                            {s.label ? (<a href="#"><h2>{s.label}</h2></a>) : ("")}
                                            <br />
                                            {s.link ? (<img src={s.link} style={{ width: "100%", height: "70%" }} />) : ("")}

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