import React from "react"

export default class Subjects extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stage: 0,
            cart: false,
            item: {}
        }
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "row", marginTop: "5%", textAlign: "center" }}>
                <div style={{ width: "50%" }}>
                    <img src="https://via.placeholder.com/400" alt="1" />
                </div>
                <div style={{ width: "50%", paddingTop: "7%" }}>
                    <h5>Tree Upper</h5>
                    <h2>Seamless Durability</h2>
                    <p>We knitted a unique one-piece upper made<br /> from FSC® Certified eucalyptus trees for a perfect<br /> fit that’s flexible, lightweight, and breathable <br />in every step..</p>
                </div>
            </div>
        )
    }
}