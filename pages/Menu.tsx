import Card from "../components/Card";

function Menu() {
  return (
    <div>
      <section className="menu mb-13.5">
        <div className="container">
        <div className="menu_inner">
          <h2 className="text-[69px] text-[white] text-center font-semibold mb-10">Menu</h2>
          <div className="menu_cards flex justify-between">
              <Card />
              <Card />
              <Card/>
              <Card/>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Menu