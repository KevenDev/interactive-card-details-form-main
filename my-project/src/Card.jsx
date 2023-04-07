import Form from "./Form"


export default function Card({setName, setCard}){
  return(
    <div>
      <div>
        <img className="w-screen" src="/bg-main-mobile.png" alt="" />
      </div>
      <div className="card-back">
        <div className="flex relative">
          <span className="z-10 absolute bottom-5 font-serif left-9 text-xl tracking-wide text-white">{setCard}</span>
          <span className="z-10 absolute left-9 ">{setName}</span>
        </div>
        <img className="w-[18rem] absolute top-[1.5rem]  right-5" src="/bg-card-back.png" alt="" />
      </div>
      <div className="card-front">
        <img className="w-[18rem] absolute top-[7.1rem] left-5" src="/bg-card-front.png" alt="" />
      </div>
    </div>
  )

}