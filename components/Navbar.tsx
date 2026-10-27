import Button from "../components/Button";

function Navbar() {
  return (
    <div className="pt-12 pb-12 flex items-center justify-between">
      <img src="/pizzashop.svg" alt="" className="logo" />
      <ul className="nav_list flex items-center gap-20">
        <li className="nav_list_item text-[#A3A3A3]">Home</li>
        <li className="nav_list_item text-[#A3A3A3]">Menu</li>
        <li className="nav_list_item text-[#A3A3A3]">Events</li>
        <li className="nav_list_item text-[#A3A3A3]">About us</li>
      </ul>
      <Button text = {"Log in"} />
    </div>
  )
}

export default Navbar