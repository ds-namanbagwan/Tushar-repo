import * as React from "react"

export default function Header1(props: any) {
    // console.log(props._site,"_site")
    return (
        <>

            <div className="flex w-full" style={{ backgroundColor: "white" }}>
                <div style={{ width: "260px" }}>
                    {props._site.c_restroimage.map((img: any) => {
                        return (
                            <>
                                <img src={img.url} />
                            </>
                        )
                    })}

                </div>
                {/* <div className="flex w-full" style={{width:"100px",marginTop:"50px"}} > */}
                <div className="flex w-full" style={{marginTop:"10px"}}>
                    {props._site.c_headerLink.map((res: any) => {
                        return (
                            <>
                                {/* <div style={{width:"2000px",textAlign:"center",fontSize:"25px"}}> */}
                                <div className="flex w-full" style={{ fontSize: "20px", marginTop: "40px" }}>
                                    <a href="{res.link}" style={{fontStyle:"italic"}}> {res.label}</a>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}