import React from "react"
import style from "../style/style.module.css"

export default function Footer() {
    return (
        <React.Fragment>
            <div style={{ marginTop: "5%" }} className={style.foot} >
                <div>
                    <small>Enter your email to stay in touch!</small><br />
                    <input type="text" /> <button>SIGN UP</button>
                    <div className={style.foot1}>
                        <div>
                            <h5>HELP</h5>
                            <p>1-888-963-8944</p>
                            <p>1-814-251-9966 (Text)</p>
                            <p>help@allbirds.com</p>
                            <p>Returns/Exchanges</p>
                            <p>FAQ/Contact Us</p>
                        </div>
                        <div>
                            <h5>SHOP</h5>
                            <p>Shop Men</p>
                            <p>Shop Women</p>
                            <p>Kids' Shoes</p>
                            <p>Socks</p>
                            <p>Gift Cards </p>
                        </div>
                        <div>
                            <h5>COMPANY</h5>
                            <p>Our Stores</p>
                            <p>Our Story</p>
                            <p>Our Materials</p>
                            <p>Sustainability</p>
                            <p>Partnerships</p>
                            <p>Bulk Orders</p>
                            <p>Careers</p>
                            <p>Press</p>
                        </div>
                    </div>
                    <div className={style.foot2}>
                        <div className={style.div1}>
                            <h5>Follow the Flock</h5>
                            <p>Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild. Oh, we have cute sheep, too. #weareallbirds</p>
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/7ALf4NFNH4VStmrXU0qSKK/1" alt="insta" />
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/7jsrb2oMQypD1kO6iZLXZN/1" alt="twitter" />
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/55ZLXdMQu728huA78Qlfkb/1" alt="face" />
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/5VBkylibm5XkgzjDP153Mo/1" alt="p" />
                        </div>
                        <div className={style.div2}>
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/footer/en-US/images/1X4EOQF1JJOjMbo48vDUzB/1" alt="foot" width="100px" />
                        </div>
                        <div className={style.div3}>
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/3ohqY3WWyehlkYpVi815p9/1" alt="1" />
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/22gqFXi2QPoT2IhEpBuzOi/1" alt="2" />
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/6FnrOphj9NsjD38uREtsBn/1" alt="3" />
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/mpzswQHoLPhzgFkXpcZ7P/1" alt="4" />
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/5OVl6dmwlwOJPrg5F3Ot1s/1" alt="5" />
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/2bpMfDa3leuCSpX1lLXKvB/1" alt="6" />
                            <img src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-US/images/5DEtULZUsBHTJp8aXcaOIc/1" alt="7" />
                            <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/anchorLink/en-US/images/6feR4fhJRAICb09saby64I/3" alt="8" width="40px" />
                            <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/anchorLink/en-US/images/7suwpjc6qyFWtaoEgsNleP/1" alt="9" width="40px" />
                        </div>
                    </div>
                    <div style={{textAlign:"center"}}><small>© 2020 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</small></div>
                </div>
            </div>
        </React.Fragment>
    )
}