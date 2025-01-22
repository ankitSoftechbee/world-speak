import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
    return <div className="w-full">
        <Header />
        <main>
            <Outlet /> {/* Content will be injected here based on the current route */}
        </main>
        <Footer/>
    </div>
}

export default Layout