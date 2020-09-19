import React from "react"
import style from "./Gift.module.css"
import { Redirect } from "react-router-dom"

export default class Gift extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stage: 0,
            cart: false,
            item: {
                name: "Digital Gift Card",
                size: "$55",
                img : "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/giftcard.png?v=1587693575"
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
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/giftcard.png?v=1587693575" alt="1" width="45%" style={{ margin: "2%" }} />
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/gift-card.png?v=1587693575" alt="2" width="45%" style={{ margin: "2%" }} />
                    </div>
                    <div style={{ width: "26%", padding: "1%" }}>
                        <h2>Digital Gift Card</h2>
                        <small>SELECT SIZE:</small><br />
                        <select style={{ width: "90%", marginBottom: "5%", marginTop: "5%", border: "1px solid white", background: "white", borderBottom: "2px solid black", padding: "1%" }} >
                            <option>$ 55</option>
                        </select>
                        <button onClick={this.handleCart} className={style.btn3}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        )
    }
}