import Background from "../../components/Background"
import Gratitude from "../../components/Gratitude"
import NavMenu from "../../components/NavMenu"
import Quote from "../../components/Quote"

const Home = () => {
    return (

    <div className="flex items-center">
        <NavMenu />
        <div className="flex flex-col items-center w-screen h-screen">
          <Background />
          <Quote />
          <Gratitude />
        </div>
      </div>
    )
}
export default Home