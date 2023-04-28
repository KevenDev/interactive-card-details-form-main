import Form from "./Form"


export default function Card({name, card, cvc,month,year}){
  return(  

    <div className="h-full">
      <div>
        <div className="lg md:bg-[url('/bg-main-desktop.png')] md:h-screen lg:w-96 md:w-72 w-screen h-[15rem]  bg-[url('/bg-main-mobile.png')]"></div>
      </div>
      <div className="card-back">
        <div className="flex relative">
          <span className="font-spacegrotesk z-10 fixed top-[12rem] left-12 text-xl tracking-wide text-white">{card}</span>
          <span className="text-white font-spacegrotesk z-10 fixed top-[14rem] left-12 ">{name}</span>
          <span className="text-black font-spacegrotesk z-10 fixed md:left-[19rem] md:top-[33.2rem] top-[5.1rem] right-12 ">{cvc}</span>
          <span className="text-white font-spacegrotesk z-10 fixed top-[14rem] left-[220px] ">{month}/{year}</span>
        </div>
        <img className="lg: md:h-[10rem] md:w-[16rem] w-[18rem] absolute top-[1rem] md:top-[29rem] right-4 md:left-[7rem]" src="/bg-card-back.png" alt="" />
      </div>
      <div className="card-front">
        <img className="md:h-[10rem] md:max-w-xs md:w-[16rem] md:top-[17.5rem] md:left-[4rem] w-[18rem] absolute top-[7.1rem] left-5" src="/bg-card-front.png" alt="" />
      </div>
    </div>
  )

}