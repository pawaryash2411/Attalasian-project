import AllRoutes from "./AllRoutes/AllRoutes"
import Footer from "./Components/Shared/Footer"
import Header from "./Components/Shared/Header"
import Vendor from "./Components/Shared/Vendor"


const App = () => {
  return (
    <>
          <Header />
          <AllRoutes />
          <Vendor/>
          <Footer />
    </>
  )
}

export default App
