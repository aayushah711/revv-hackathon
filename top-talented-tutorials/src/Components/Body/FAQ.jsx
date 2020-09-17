import React from "react"
import style from "../style/style.module.css"
import { Link } from "react-router-dom"

export function FAQ(props) {

    const { match, data } = props
 
    return (
        <React.Fragment>
            <div style={{ marginTop: "1%", width: "60%", marginLeft: "20%" }} >
                <input placeholder="What can we help you with ?" style={{ width: "100%" }} />
                <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
                <div style={{ display: "flex", flexDirection: "row", marginTop: "2%", color:"black" }}>
                    <div style={{ width: "50%" }}>
                        <div>
                            <h3>Products & Fit</h3>
                            <p className={style.links}><Link to={`${match.url}/${data[0].id}`}>How do your shoes fit?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[1].id}`}>Will my shoes stretch?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[2].id}`}>Do your shoes have good arch support?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[3].id}`}>How do your socks fit?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[4].id}`}>How do I clean my Allbirds?</Link></p>
                        </div>
                        <div>
                            <h3 style={{marginTop:"5%"}}>Returns & Exchanges</h3>
                            <p className={style.links}><Link to={`${match.url}/${data[5].id}`}>Can I return or exchange an in store purchase online?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[6].id}`}>How do I make a gift exchange?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[7].id}`}>What is your return policy?</Link></p>
                        </div>
                        <div>
                            <h3 style={{marginTop:"10%"}}>Payments & Refunds</h3>
                            <p className={style.links}><Link to={`${match.url}/${data[8].id}`}>When can I expect my refund?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[9].id}`}>Does Allbirds offer discount codes or coupons?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[10].id}`}>How do I send a gift card?</Link></p>
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div>
                            <h3>Retail</h3>
                            <p className={style.links}><Link to={`${match.url}/${data[11].id}`}>What services are you adding to keep the store from getting crowded?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[12].id}`}>Have store hours changed? And when will they return to normal?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[13].id}`}>What will you be providing retail staff and customers to keep them safe?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[14].id}`}>Can I still return my purchase in-store, even if I bought it online?</Link></p>
                        </div>
                        <div>
                            <h3>Orders, Shipping & Tracking</h3>
                            <p className={style.links}><Link to={`${match.url}/${data[15].id}`}>How are you keeping distribution centers safe?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[16].id}`}>Can I expedite my order?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[17].id}`}>How do you ship?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[18].id}`}>What if I want to cancel or change my order?</Link></p>
                        </div>
                        <div>
                            <h3>Company</h3>
                            <p className={style.links}><Link to={`${match.url}/${data[19].id}`}>What's your favorite Tree joke?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[20].id}`}>What is your commitment to sustainability?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[21].id}`}>What’s your favorite Sheep joke?</Link></p>
                            <p className={style.links}><Link to={`${match.url}/${data[22].id}`}>I'm a healthcare worker! Do you still have free shoes?</Link></p>
                        </div>
                    </div>
                </div>
                <Link to="">more items</Link>
            </div>
        </React.Fragment>
    )
}

export function Top() {
    return (
        <div style={{ marginTop: "3%", background: "#212a2f", padding: "8%", textAlign: "center", color: "white" }}>
            <h1>How Can We Help?</h1>
            <p>Give us a call: 1-888-963-8944</p>
            <p>Monday - Friday 9AM - 5PM PST</p>
            <p style={{ marginBottom: "0%" }}>Send us a message:</p>
            <small>help@allbirds.com</small><br />
            <button className={style.btn4}>GET IN TOUCH</button>
        </div>
    )
}

