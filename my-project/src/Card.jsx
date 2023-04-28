import Form from "./Form"


export default function Card({name, card, cvc,month,year}){
  return(  

    <div className="h-full">
      <div>
        <div className="lg md:bg-[url('/bg-main-desktop.png')] md:h-screen lg:w-[30rem] md:w-72 w-screen h-[15rem]  bg-[url('/bg-main-mobile.png')]"></div>
      </div>
      <div className="card-back">
        <div className="flex relative">
          <span className="font-spacegrotesk z-10 fixed md:top-[21rem] md:left-[4.7rem] lg:top-[21rem] lg:left-[14rem]  xl:left-[15rem] top-[12rem] left-12 text-xl xl:text-2xl tracking-wide text-white">{card}</span>
          <span className="text-white font-spacegrotesk md:top-[24.8rem] md:left-[4.7rem] lg:top-[24.5rem] lg:left-[14rem] xl:left-[15rem] z-10 fixed top-[14rem] left-12 lg:text-sm">{name}</span>
          <span className="text-black font-spacegrotesk z-10 fixed md:left-[19rem] md:top-[33.2rem] lg:top-[34.1rem] lg:left-[30.8rem] xl:left-[35.6rem] top-[5.1rem] right-12 ">{cvc}</span>
          <span className="text-white font-spacegrotesk z-10 fixed md:top-[24.8rem] md:left-[16.5rem] lg:top-[24.5rem] xl:left-[29rem] lg:left-[27.9rem] top-[14rem] left-[220px] ">{month}/{year}</span>
        </div>
        <img className="xl:w-[21rem] xl:left-[19rem] lg:w-[20rem] lg:h-[12rem] lg:left-[15rem] md:h-[10rem] md:w-[16rem] w-[18rem] absolute top-[1rem] md:top-[29rem] right-4 md:left-[7rem]" src="/bg-card-back.png" alt="" />
      </div>
      <div className="card-front">
        <img className="xl:left-[14rem] lg:w-[21rem] lg:h-[12rem] lg:left-[12rem] lg:top-[16rem] md:h-[10rem] md:max-w-xs md:w-[17rem] md:top-[17.5rem] md:left-[4rem] w-[18rem] absolute top-[7.1rem] left-5" src="/bg-card-front.png" alt="" />
      </div>
    </div>
  )

}