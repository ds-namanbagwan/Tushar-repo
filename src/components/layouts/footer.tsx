import * as React from "react"

export default function Footer(props: any) {
    // console.log(props._site,"_sitenaman")
    return (
        <>
            <div className="flex w-full" style={{ backgroundColor: "white", marginTop: "80px" }}>
                <div style={{ backgroundColor: "white", fontSize: "25px", marginLeft: "50px" }}>ABOUT
                    <div>
                        {props._site.c_footerLink.map((res: any) => {
                            return (
                                <>
                                    <a href={res.link}>
                                        <ul style={{ fontSize: "15px" }}>
                                            <div style={{marginTop:"10px",marginLeft:"3px"}}>
                                            <li>{res.label}</li>
                                            </div>
                                        </ul>
                                    </a>
                                </>
                            )
                        })}
                    </div> 
                </div>
                <div style={{ backgroundColor: "white", fontSize: "25px", marginLeft: "50px" }}>CONTACT US
                    <div style={{ fontSize: "15px" }}>
                        <div style={{marginTop:"10px",marginLeft:"3px"}}>
                        MOBILE NUMBER:-{props._site.mainPhone}<br />
                        FAX:-{props._site.fax}<br />
                        EMAIL:-{props._site.emails}<br />
                        </div>
                    </div>
                </div>
                <div style={{ width: "250px", marginLeft: "20px" }}>
                    {props._site.c_footerimage.map((img: any) => {
                        return (
                            <>
                                <img src={img.url} />
                            </>
                        )
                    })}
                </div>
                <div style={{ backgroundColor: "white", fontSize: "25px", marginLeft: "50px" }}>SUGGEST
                    <div>
                        {props._site.c_sidefooter.map((side: any) => {
                            return (
                                <>
                                    <a href={side.link}>
                                        <ul style={{ fontSize: "15px" }}>
                                            <div style={{marginTop:"10px",marginLeft:"3px"}}>
                                            <li>{side.label}</li>
                                            </div>
                                        </ul>
                                    </a>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div style={{ backgroundColor: "white", fontSize: "25px", marginLeft: "100px" }}>SOCIAL MEDIA
                    <div style={{ fontSize: "15px" }}>
                        {props._site.c_socaldata.map((socal: any) => {
                            return (
                                <>
                                    <ul>
                                    <div style={{marginTop:"10px",marginLeft:"3px"}}>
                                        <a href={socal.socaldata.link}>
                                            {socal.socaldata.label}
                                            <img src={socal.icon.url} style={{ width: "30px" }} />
                                           
                                        </a>
                                        </div>
                                    </ul>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            {props._site.photoGallery.map((i:"any")=>{
                    return(
                        <>
                        <div className="flex">                       
                        <div style={{width:"5%",marginLeft:"42%"}}>
                        <img src={i.image.url}/>
                        </div>
                        <div style={{marginTop:"2px",marginLeft:"10px"}}>
                        {i.description}
                        </div>
                        </div>
                       
                        
                        </>
                    )
                })}

        </>
    )
}