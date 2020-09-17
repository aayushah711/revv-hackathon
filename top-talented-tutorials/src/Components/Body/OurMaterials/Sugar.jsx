import React from "react"

export default function Wool() {
    return (
        <div style={{ marginTop: "1%", width: "60%", marginLeft: "20%" }}>
            <div style={{ display: "flex", flexDirection: "row", marginBottom: "4%" }}>
                <div style={{ width: "50%" }}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/2e92PVyPF7jszo7B1rYxmr/1" alt="first" />
                </div>
                <div style={{ width: "50%", paddingTop: "6%" }}>
                    <h1>Mother Nature is our muse. Building on her handiwork, we’re finding new uses for materials that exist right in front of us. Like sugarcane—one sustainable sweetheart.</h1>
                    <small>It’s so self-sufficient, in fact, that when it’s processed, its biomass is extracted to literally power the mill and fertilize the next year’s crop. When we transform it into our SweetFoam™ shoe sole, it contours to your feet for bouncy comfort that lets you let loose.</small>
                </div>
            </div>
            <img src="https://via.placeholder.com/900x300" alt="ha" width="100%" />
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{width:"50%", background:"whitesmoke", textAlign:"center",padding:"5%", paddingTop:"12%"}}>
                    <h2>Responsibly Sourced</h2>
                    <small>Our sugarcane is sourced to rigorous standards that protect people and the environment. These standards were jointly developed by Proforest and Braskem, and the farms are audited by a third party.</small>
                </div>
                <div style={{width:"50%"}}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/46sJpOzuxXw6tpdPbTlU5Q/1" alt="ho" />
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