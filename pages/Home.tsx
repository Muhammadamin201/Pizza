import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Menu from "../pages/Menu";

function Home() {
  return (
    <div className="bg-[#1D0800] p-2">
      <Navbar />
      <div className="hero pt-15.25">
        <div className="container p-2">
          <div className="hero-inner flex justify-between">
            <div className="hero-left">
              <h2 className="text-[69px] text-[white] font-semibold">The Fasest <br /> Pizza Delivery</h2>
              <p className="text-[19px] text-[#A3A3A3] font-normal mt-9.25 mb-15.5">
                We will deliver juicy pizza for your family in 30 <br />
                minutes, if the courier is late - pizza is free!
              </p>
              <img src="/hero.png" alt="" className="mb-[58px]"/>
              <Button text={"To order" } />
            </div>
            <div className="hero-right">
              <img src="/bg.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Menu/>
    </div>
  )
}

export default Home