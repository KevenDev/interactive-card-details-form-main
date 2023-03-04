export default function Card(){
  return(
    <>
      <img className="w-screen" src="/bg-main-mobile.png" alt="" />
      <div className="card-back">
        <img className="w-[18rem] absolute top-[1.5rem]  right-5" src="/bg-card-back.png" alt="" />
      </div>
      <div className="card-front">
        <img className="w-[18rem] absolute top-[7.1rem] left-5" src="/bg-card-front.png" alt="" />
      </div>
    </>
  )

}