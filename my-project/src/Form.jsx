export default function Form() {
  return(
      <form className="block py-0 px-4 mt-[6rem] w-full font-spacegrotesk tracking-widest">
        <div className="flex flex-col">
            <label className="text-[0.875rem]">CARDHOLDER NAME
              <input className="p-3 w-full border-2 border-hsl(270, 3%, 87%) rounded-lg" type="text" placeholder="e.g. Jane Apples"/>
            </label>
          </div>

          <div className="flex flex-col">
            <label className="text-[0.875rem]"> CARD NUMBER
              <input className="p-3 w-full border-2 border-hsl(270, 3%, 87%) rounded-lg  font-spacegrotesk" type="number" placeholder="e.g. 1234 5678 9123 0000"/>
            </label>
          </div>

          <div className="input-triple container flex w-full justify-center items-center py-0 mt-4">
            <label className="text-[0.875rem]"> EXP. DATE (MM/YY)
              <div className="flex gap-2">
                <input className="w-16 p-3 border-2 border-hsl(270, 3%, 87%) rounded-lg" type="number" placeholder="MM"/> 
                <input className="w-16 p-3 border-2 border-hsl(270, 3%, 87%) rounded-lg" type="number" placeholder="YY" /> 
              </div>
            </label>
            <div className="flex">
              <label className="font-spacegrotesk text-[0.875rem]">CVC
                <input className="p-3 w-full border-2 border-hsl(270, 3%, 87%) rounded-lg" type="number" placeholder="e.g. 123"/>
              </label>
              </div>
          </div>
      </form>
  )
}

