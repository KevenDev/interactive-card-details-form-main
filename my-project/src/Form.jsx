import App from "./App"


export default function Form({catchName, catchCard}) {
  return(
      <form className="block py-0 px-4 mt-[6rem] w-full font-spacegrotesk tracking-widest text-[#21092f] font-bold">
        <div className="flex flex-col">
            <label className="text-xs">CARDHOLDER NAME
              <input onChange={(e)=> catchName(e.target.value)}  className="p-2 mt-1 w-full border-2 border-hsl(270, 3%, 87%) rounded-lg" type="text" placeholder="e.g. Jane Apples"/>
            </label>
          </div>

          <div className="flex flex-col">
            <label className="text-xs mt-2"> CARD NUMBER
              <input onChange={(e)=> catchCard(e.target.value)} className="p-2 w-full mt-1 border-2 border-hsl(270, 3%, 87%) rounded-lg  font-spacegrotesk" type="number" placeholder="e.g. 1234 5678 9123 0000"/>
            </label>
          </div>

          <div className="input-triple container flex w-full justify-center items-center py-0 mt-4">
            <label className="text-xs"> EXP. DATE (MM/YY)
              <div className="flex gap-2">
                <input className="w-14 mt-1 p-2 border-2 border-hsl(270, 3%, 87%) rounded-lg" type="number" placeholder="MM"/> 
                <input className="w-14 mt-1 p-2 border-2 border-hsl(270, 3%, 87%) rounded-lg" type="number" placeholder="YY" /> 
              </div>
            </label>
            <div className="flex">
              <label className="font-spacegrotesk text-xs ml-2">CVC
                <input className="p-2 mt-1 w-full border-2 border-hsl(270, 3%, 87%) rounded-lg" type="number" placeholder="e.g. 123"/>
              </label>
              </div>
            </div>
            <div className="btn text-center mt-4 h-19 p-2 rounded-md bg-[#21092f] text-[#ffffff]">
                <button>Confirm</button>
            </div>
      </form>
  )
}

