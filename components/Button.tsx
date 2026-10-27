function Button({ text }: { text: string }) {
  console.log(text);
  
  return (
    <div className='bg-[#ff5218] text-[#FFFFFF] py-3.5 px-18.75 rounded-[100px] w-57.25'>{text}</div>
  )
}

export default Button