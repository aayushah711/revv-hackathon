import React from "react"
import style from "./Gift.module.css"
import { Redirect } from "react-router-dom"

export default class Lace extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stage: 0,
            cart: false,
            item: {
                name: "Bird Mask",
                size: "$35",
                img: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Bird_Mask_-_SF_Grey_Cloud_-_0_d54db481-af08-40f5-ad2a-4ec11c701f71.png?v=1587693389"
            }
        }
    }

    handleCart = () => {
        const { item } = this.state

        if (this.props.login) {
            this.props.addToCart(item)
            this.setState({
                cart: true
            })
        }
        else {
            alert("Do Login Before Adding to Cart!")
            this.setState({
                stage: 1
            })
        }
    }

    componentDidMount() {
        this.setState({
            cart: false,
            stage: 0
        })
    }

    render() {

        const { stage, cart } = this.state

        if (stage === 1) {
            return <Redirect to="/account" />
        }
        else if (cart) {
            return <Redirect to="/cart" />
        }
        return (
            <div style={{ marginTop: "6%" }}>
                <div style={{ width: "65%", marginLeft: "17.5%", display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "70%" }}>
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Bird_Mask_-_SF_Grey_Cloud_-_0_d54db481-af08-40f5-ad2a-4ec11c701f71.png?v=1587693389" alt="1" width="45%" style={{ margin: "2%" }} />
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/sleeping-mask_2932e244-2e6c-482a-b1ae-542bc94a376b.png?v=1587693389" alt="2" width="45%" style={{ margin: "2%" }} />
                    </div>
                    <div style={{ width: "26%", padding: "1%" }}>
                        <h2>Bird Mask</h2>
                        <p>$35</p>
                        <small><b>Limited Edition:</b>SF Grey Cloud</small><br />
                        <button className={style.btn3} onClick={this.handleCart}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        )
    }
}