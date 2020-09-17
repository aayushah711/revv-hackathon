import React from "react"
import Men from "./Men"
import Women from "./Women"
import Home from "./Home"
import OurMaterials from "./OurMaterials"
import Stores from "./Stores"
import Account from "./Account"
import { FAQ, Top } from "./FAQ"
import Cart from "./Cart"
import Trino from "./OurMaterials/Trino"
import Sugar from "./OurMaterials/Sugar"
import Tree from "./OurMaterials/Tree"
import Wool from "./OurMaterials/Wool"
import OurS from "./Home/OurSustainability"
import Gift from "./Home/Gift"
import DigitalGift from "./Home/DigitalGift"
import Mask from "./Home/Mask"
import Lace from "./Home/Lace"
import faqData from "../Json/FAQ.json"
import MenData from "../Json/Men.json"
import WomenData from "../Json/Women.json"
import FAQDetail from "./FAQ/FAQDetail"
// import MenDetails from "./Subjects"
import WomenDetails from "./WomenDetails"
import WomenSoles from "./WomenSoles"
import WomenSolesDetail from "./WomenSolesDetail"
import WomenShop from "./WomenShop"
import WomenShopDetail from "./WomenShopDetail"
import MenShop from "./MenShop"
import MenShopDetail from "./MenShopDetails"
import MenSolesDetail from "./MensolesDetail"
import MenSoles from "./MenSoles"
import menSolesData from "../Json/MenSoles.json"
import womenSolesData from "../Json/WomenSoles.json"
import MenShopData from "../Json/MenShop.json"
import WomenShopData from "../Json/WomenShop.json"
import MenColor from "./MenColor"
import MenColorDetail from "./MenColorDetail"
import MenColorData from "../Json/MenColor.json"
import WomenColor from "./WomenColor"
import WomenColorDetail from "./WomenColorDetail"
import WomenColorData from "../Json/WomenColor.json"
import Sock from "./Sock"
import SockDetail from "./SockDetail"
import SockData from "../Json/Sock.json"
import { Route, Switch } from 'react-router-dom';
import { AuthContext } from "../Context/ContextProvider"
// import MenDetail from "./MenDetail"

class Body extends React.Component {

    render() {

        const { login, cart, loginUser, loggedIn, loggedOut, addToCart, removeToCart, registration } = this.context
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home/our-sustainability" component={OurS} />
                    <Route path="/home/gift" render={(props) => <Gift login={login} addToCart={addToCart} {...props} />} />
                    <Route path="/home/digital" render={(props) => <DigitalGift login={login} addToCart={addToCart} {...props} />} />
                    <Route path="/mask" render={(props) => <Mask login={login} addToCart={addToCart} {...props} />} />
                    <Route path="/lace" render={(props) => <Lace login={login} addToCart={addToCart} {...props} />} />
                    <Route path="/men" exact render={(props) => < Men data={MenData} {...props} />} />
                    <Route path="/men/menSoles" exact render={(props) => <MenSoles data={menSolesData} {...props} />} />
                    <Route path="/men/menSoles/:id" render={(props) => <MenSolesDetail data={menSolesData} login={login} addToCart={addToCart} {...props} />} />
                    <Route path="/men/menShop" exact render={(props) => <MenShop data={MenShopData} {...props} />} />
                    <Route path="/men/menShop/:id" render={(props) => <MenShopDetail data={MenShopData} login={login} addToCart={addToCart} {...props} />} />
                    <Route path="/men/menColor" exact render={(props) => <MenColor data={MenColorData} {...props} />} />
                    <Route path="/men/menColor/:id" render={(props) => <MenColorDetail data={MenColorData} login={login} addToCart={addToCart} {...props} />} />
                    {/* <Route path="/men/:id" render={(props) => <MenDetails data={MenData} login={login} addToCart={addToCart} {...props} />} /> */}
                    {/* <Route path={`/${match.url}/:name`} component={MenDetail}/> */}
                    <Route path="/women" exact render={(props) => <Women data={WomenData} {...props} />} />
                    <Route path="/women/womenSoles" exact render={(props) => <WomenSoles data={womenSolesData} {...props} />} />
                    <Route path="/women/womenSoles/:id" render={(props) => <WomenSolesDetail data={womenSolesData} login={login} addToCart={addToCart} {...props} />} />
                    <Route path="/women/womenShop" exact render={(props) => <WomenShop data={WomenShopData} {...props} />} />
                    <Route path="/women/womenShop/:id" render={(props) => <WomenShopDetail data={WomenShopData} login={login} addToCart={addToCart} {...props} />} />
                    <Route path="/women/womenColor" exact render={(props) => <WomenColor data={WomenColorData} {...props} />} />
                    <Route path="/women/womenColor/:id" render={(props) => <WomenColorDetail data={WomenColorData} login={login} addToCart={addToCart} {...props} />} />
                    <Route path="/women/:id" render={(props) => <WomenDetails data={WomenData} login={login} addToCart={addToCart} {...props} />} />
                    <Route path="/socks" exact render={(props) => <Sock data={SockData} {...props} />} />
                    <Route path="/socks/:name" render={(props) => <SockDetail data={SockData} login={login} addToCart={addToCart} {...props} />} />
                </Switch>
                <Route path="/ourmaterials" component={OurMaterials} />
                <Route path="/ourmaterials/" exact component={Wool} />
                <Route path="/ourmaterials/Tree" component={Tree} />
                <Route path="/ourmaterials/Sugar" component={Sugar} />
                <Route path="/ourmaterials/trino" component={Trino} />
                <Route path="/stores" component={Stores} />
                <Route path="/account" render={(props) => <Account login={login} loginUser={loginUser} registration={registration} loggedIn={loggedIn} loggedOut={loggedOut} {...props} />} />
                <Route path="/faq" component={Top} />
                <Switch>
                    <Route path="/faq" exact render={(props) => <FAQ data={faqData} {...props} />} />
                    <Route path="/faq/:id" render={(props) => <FAQDetail data={faqData} {...props} />} />
                </Switch>
                <Route path="/cart" render={(props) => <Cart cart={cart}  loginUser={loginUser} removeToCart={removeToCart} {...props} />} />
                {/* <Route render={()=><h1 style={{marginTop:"5%", textAlign:"center"}}>404 Page Not Found</h1>} /> */}
                {/* <Route render={() => <h1 style={{ textAlign: "center", marginTop:"4%" }}>Error: 404 .page not found</h1>} /> */}
            </>
        )
    }
}

Body.contextType = AuthContext

export default Body