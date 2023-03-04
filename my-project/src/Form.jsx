export default function Form() {
  return(
      <form className="container flex flex-col">
          <label className="flex flex-col">CARDHOLDER NAME
            <input className="p-2 w-100" type="text" placeholder="e.g. Jane Apples"/>
          </label>
          <label className="flex flex-col"> CARD NUMBER
            <input className="p-2" type="number" placeholder="e.g. 1234 5678 9123 0000"/>
          </label>
          <div className="input-triple flex">
            <label className="flex flex-col"> EXP. DATE (MM//YY)
            <div className="flex">
              <input className="w-16 p-2" type="number" placeholder="MM"/> 
              <input className="w-16 p-2" type="number" placeholder="YY" /> 
            </div>
            </label>
            <label className="flex flex-col ml-2">CVC
              <input className="p-2 w-100" type="number" placeholder="e.g. 123"/>
            </label>
          </div>
      </form>
  )
}