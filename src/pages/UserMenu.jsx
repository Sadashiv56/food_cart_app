import Footer from "../components/Footer"
import Menuitem from "../components/Menuitem"
import Navbar from "../components/Navbar"
import SubHeader from "../components/SubHeader"
import TopNav from "../components/TopNav"
import {menu} from "../data/db"

function UserMenu() {
    return (
        <>

            <Navbar />
            <div className="aside-overlay aside-trigger" />
          
            <TopNav />
      
            <SubHeader pagetitle="Usermenu" />
  
            <div className="section section-padding menu-v2">
                <div className="container">
                 
                    <div className="row">

                       {menu.map((pizza) => <Menuitem key={pizza.id} {...pizza} /> )} 
                      

                    </div>
                    {/* Category End */}


                </div>
            </div>
            {/* Menu Wrapper End */}
            {/* Footer Start */}
            <Footer />


        </>
    )
}

export default UserMenu