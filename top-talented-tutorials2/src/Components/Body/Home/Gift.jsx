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
                name: "Physical Gift Card",
                size: "$95",
                img : "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/BirdFacts_Cards_PDP_1_23daa0be-8534-4c65-94eb-49d4b36e2478.png?v=1571655792"
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

        if(stage === 1){
            return <Redirect to="/account" />
        }
        else if(cart){
            return <Redirect to="/cart" />
        }
        return (
            <div style={{ marginTop: "6%" }}>
                <div style={{ width: "65%", marginLeft: "17.5%", display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "70%" }}>
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/BirdFacts_Cards_PDP_1_23daa0be-8534-4c65-94eb-49d4b36e2478.png?v=1571655792" alt="1" width="45%" style={{ margin: "2%" }} />
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/BirdFacts_Cards_PDP_2_dce8ef17-7fa6-4712-b703-09160d19eb8a.png?v=1571655792" alt="2" width="45%" style={{ margin: "2%" }} />
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/BirdFacts_Cards_PDP_3_6ec134e4-25c1-4db1-8553-327bf151ae50.png?v=1571655792" alt="3" width="45%" style={{ margin: "2%" }} />
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/BirdFacts_Cards_PDP_4_5c83d9ed-4669-4458-8467-388c3993b488.png?v=1571655792" alt="4" width="45%" style={{ margin: "2%" }} />
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/BirdFacts_Cards_PDP_4_5c83d9ed-4669-4458-8467-388c3993b488.png?v=1571655792" alt="5 " width="45%" style={{ margin: "2%" }} />
                    </div>
                    <div style={{ width: "26%", padding: "1%" }}>
                        <h2>Physical Gift Card</h2>
                        <small>SELECT SIZE:</small><br />
                        <select style={{ width: "90%", marginBottom: "5%", marginTop: "5%", border: "1px solid white", background: "white", borderBottom: "2px solid black", padding: "1%" }} >
                            <option>$ 95</option>
                        </select>
                        <button onClick={this.handleCart} className={style.btn3}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        )
    }
}