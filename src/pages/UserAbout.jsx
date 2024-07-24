import AboutSlices from "../components/AboutSlices"
import Successstory from "../components/Successstory"
import SubHeader from "../components/SubHeader"
import TopNav from "../components/TopNav"
import Footer from "../components/Footer"
import Team from "../components/Team"

function UserAbout()
{
    return (
        <>

    <TopNav />

    <SubHeader pagetitle="About" />

     <AboutSlices />

    <Successstory />

       <Team />

    <Footer />
        

        </>
    )
}

export default UserAbout