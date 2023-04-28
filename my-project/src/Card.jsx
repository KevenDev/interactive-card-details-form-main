import Form from "./Form"


export default function Card({name, card}){
  return(  

    <div className="h-full">
      <div>
        <img className="w-screen" src="/bg-main-mobile.png" alt="" />
      </div>
      <div className="card-back">
        <div className="flex relative">
          <span className="font-spacegrotesk z-10 fixed top-[12rem] left-12 text-xl tracking-wide text-white">{card}</span>
          <span className="text-white font-spacegrotesk z-10 fixed top-[14rem] left-12 ">{name}</span>
        </div>
        <img className="w-[18rem] absolute top-[1.5rem]  right-5" src="/bg-card-back.png" alt="" />
      </div>
      <div className="card-front">
        <img className="w-[18rem] absolute top-[7.1rem] left-5" src="/bg-card-front.png" alt="" />
      </div>
    </div>
  )

}