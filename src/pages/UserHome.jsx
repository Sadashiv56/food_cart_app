import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Offers from "../components/Offers";
import Process from "../components/Process";
import TopNav from "../components/TopNav";

function UserHome() {
    return (
        <>
            <Navbar />  
            <div className="aside-overlay aside-trigger" />
            <TopNav />
            <Banner />

            <Process />

            <Offers />

            <Newsletter />


            <Footer />


        </>
    )
}

export default UserHome