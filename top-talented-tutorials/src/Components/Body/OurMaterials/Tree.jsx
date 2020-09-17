import React from "react"

export default function Wool() {
    return (
        <div style={{ marginTop: "1%", width: "60%", marginLeft: "20%" }}>
            <div style={{ display: "flex", flexDirection: "row", marginBottom: "4%" }}>
                <div style={{ width: "50%" }}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/1MPs8L16LQKAQSQZZvhdEh/1" alt="first" />
                </div>
                <div style={{ width: "50%", paddingTop: "6%" }}>
                    <h1>Mother Nature is our muse. Building on her handiwork, we’re finding new uses for materials that exist right in front of us. Like trees, rockstars of the forest.</h1>
                    <small>Thanks to their fiber and a clean closed-loop process, we have a naturally-derived, renewable material that’s much easier on the environment than traditional fabrics. Did we mention it’s also comfortable, breathable, and silky-smooth?</small>
                </div>
            </div>
            <img src="https://via.placeholder.com/900x300" alt="ha" width="100%" />
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{width:"50%", background:"whitesmoke", textAlign:"center",padding:"5%", paddingTop:"12%"}}>
                    <h2>FSC® Certification</h2>
                    <small>Forest Stewardship Council® certification means we source materials that meet strict standards to protect forests, and the animals and people who depend on them.</small>
                </div>
                <div style={{width:"50%"}}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/3sRWCWqYoqf1sX7ykdFtNG/3" alt="ho" />
                </div>
            </div>
            <h1 style={{textAlign:"center"}}>More Materials</h1>
            <div style={{display:"flex", flexDirection:"row", textAlign:"center"}}>
                <div style={{width:"33%", paddingLeft:"3%", paddingRight:"3%"}}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/6EOXiKc2xT03AkHyRc7tyW/1" alt="1" width="100%" /> 
                    <h3>RECYCLED BOTTLES</h3>
                    <p>One recycled plastic bottle equals one pair of Allbirds laces. Reincarnation is a beautiful thing</p>
                </div>
                <div style={{width:"33%", paddingLeft:"3%", paddingRight:"3%"}}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/6XKAUHg4cxCgSuLqccLsP6/1" alt="2" width="100%"/>
                    <h3>CASTOR BEAN OIL</h3>
                    <p>Castor bean oil helps us increase the natural content in our insoles. Lean, bean, comfort machines.</p>
                </div>
                <div style={{width:"33%", paddingLeft:"3%", paddingRight:"3%"}}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/3IRScWWwMOX5JSf0iJgUrk/1" alt="3" width="100%" />
                    <h3>BIO-TPU</h3>
                    <p>Our eyelets are created thanks to unique microorganisms that consume plant sugars. Science is sweet.</p>
                </div>
            </div>
        </div>
    )
}