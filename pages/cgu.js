import Navbar from "./components/public/Navbar"
import Sidebar from './components/public/Sidebar'
import Footer from "./components/public/Footer"
import CGU from "./components/public/Cgu"
export default function cgu() {
    return (
      <div>
        <Navbar />
          <CGU />
        <Footer />
      </div>
  
    )
  }
  