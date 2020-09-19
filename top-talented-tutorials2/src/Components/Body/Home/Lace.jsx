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
                name: "Runner Lace Kit",
                size: "$10",
                img: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/CorePack_814e472a-de38-43e0-a963-16e90b610887.png?v=1571655791"
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
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/CorePack_814e472a-de38-43e0-a963-16e90b610887.png?v=1571655791" alt="1" width="45%" style={{ margin: "2%" }} />
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Core_Grey_eb906f00-9c3b-429e-96c1-5747d2e8a00f.png?v=1571655791" alt="2" width="45%" style={{ margin: "2%" }} />
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Core_White_72f5447c-6839-4b70-a308-022974be1660.png?v=1571655791" alt="3" width="45%" style={{ margin: "2%" }} />
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Core_Black_2e6698ba-3c26-455e-82e8-cb7b6fed03eb.png?v=1571655791" alt="4" width="45%" style={{ margin: "2%" }} />
                    </div>
                    <div style={{ width: "26%", padding: "1%" }}>
                        <h2>Runner Lace Kit</h2>
                        <p>$10</p>
                        <small><b>Classics:</b>Natural Grey + Natural White + Natural Black</small><br />
                        <small><b>Limited Edition:</b></small><br />
                        <button className={style.btn3} onClick={this.handleCart}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        )
    }
}