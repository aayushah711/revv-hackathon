import React from "react"

export default function Wool() {
    return (
        <div style={{ marginTop: "1%", width: "60%", marginLeft: "20%" }}>
            <div style={{ display: "flex", flexDirection: "row", marginBottom: "4%" }}>
                <div style={{ width: "50%" }}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/5TUnqh7NcZV6I3oJATDDN1/2" alt="first" />
                </div>
                <div style={{ width: "50%", paddingTop: "4%" }}>
                    <h1>Mother Nature is our muse. Building on her handiwork, we’re finding new uses for materials that exist right in front of us. Like Trino™, nature’s super-yarn.</h1>
                    <small>When we couldn’t find a yarn that met our standards of ultimate comfort and sustainability, we invented our own. Combining the incredible properties of our renewable materials Tree + Merino (Trino™, get it?), our first proprietary knit is responsibly sourced right down to the fiber level. It’s super soft, breathable, and moisture wicking, all while being less harmful to the planet. </small>
                </div>
            </div>
            <img src="https://via.placeholder.com/900x300" alt="ha" width="100%" />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "50%", background: "whitesmoke", textAlign: "center", padding: "5%", paddingTop: "12%" }}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/1211NYDdltrOeWIGlaa1sG/1" alt="he" width="50px" />
                    <h2>Our Sheep Live The Good Life</h2>
                    <small>We work with leading organizations like ZQ Merino to ensure our wool is held to high standards of farming, land management and animal welfare.</small>
                </div>
                <div style={{ width: "50%" }}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/5PoqFJtVGqrC0zmaZOxJOC/1" alt="ho" />
                </div>
            </div>
            <h1 style={{ textAlign: "center" }}>More Materials</h1>
            <div style={{ display: "flex", flexDirection: "row", textAlign: "center" }}>
                <div style={{ width: "33%", paddingLeft: "3%", paddingRight: "3%" }}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/6EOXiKc2xT03AkHyRc7tyW/1" alt="1" width="100%" />
                    <h3>RECYCLED BOTTLES</h3>
                    <p>One recycled plastic bottle equals one pair of Allbirds laces. Reincarnation is a beautiful thing</p>
                </div>
                <div style={{ width: "33%", paddingLeft: "3%", paddingRight: "3%" }}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/6XKAUHg4cxCgSuLqccLsP6/1" alt="2" width="100%" />
                    <h3>CASTOR BEAN OIL</h3>
                    <p>Castor bean oil helps us increase the natural content in our insoles. Lean, bean, comfort machines.</p>
                </div>
                <div style={{width:"33%", paddingLeft:"3%", paddingRight:"3%"}}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/materialsPage/en-US/images/19uubdFS47JrN6gW8tDmJK/1" alt="3" width="100%" />
                    <h3>RECYCLED CARDBOARD</h3>
                    <p>Our packaging is made from 90% recycled cardboard. Because every box deserves a second chance.</p>
                </div>
            </div>
        </div>
    )
}