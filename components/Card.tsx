import Button from "./Button";

function Card() {
  return (
    <div className="flex flex-col items-center">
      <img src="/card_img.png" alt="" width={159} className="mb-[20px]" />
      <h4 className="text-[white] text-[25px] font-medium ">Italian</h4>
      <p className="text-[#A3A3A3] text-[14px] font-normal mb-5 mt-5">Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives, meat...</p>
      <Button text={ "Order Now"} />
    </div>
  )
}

export default Card