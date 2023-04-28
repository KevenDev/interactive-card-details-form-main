import { useRef } from "react";

const Form = ({setName, setCard, setCvc, setMonth, setYear}) => {
  const nameRef = useRef('');
  const cardRef = useRef('');

const handleName = (e) => {
  setName(e.target.value);
}

const handleCard = (e) => {
  setCard(e.target.value);
}

const handleCvc = (e) => {
  setCvc(e.target.value);
}

const handleMonth = (e) => {
  setMonth(e.target.value);
}

const handleYear = (e) => {
  setYear(e.target.value);
}


const handleSubmit = (e) => {
    e.preventDefault();
    verificarCampos();
    validarCartoes();
  }

const verificarCampos = () => {
  const nome = nameRef.current.value;
  if(nome.length < 3){
    console.log('Nome inválido')
  }
}

const validarCartoes = () =>{
  const cartao = cardRef.current.value;
  const cartaoValido = cartao.match(/^[0-9]{16}$/);
  const visa = cartao.match(/^4[0-9]{12}(?:[0-9]{3})?$/);
  const mastercard = cartao.match(/^5[1-5][0-9]{14}$/)
  if(cartaoValido){
    console.log('cartão válido', cartao)
  } else {
    alert('Cartão inválido')
  }
  if(visa){
    console.log('visa')
  } else {
    console.log('não é visa')
  }
  if(mastercard){
    console.log('mastercard')
  } else {
    console.log('não é mastercard')
  }
}

  return(
      <form onSubmit={handleSubmit} className="  block py-0 px-4 mt-[6rem] h-full w-screen font-spacegrotesk tracking-widest text-[#21092f] font-bold">
      <div className="lg:w-6/12 lg:max-w-lg md:max-w-md md:w-8/12 md:justify-center md:mx-auto"> 
        <div className="flex flex-col w-full ">
            <label className="text-xs">CARDHOLDER NAME
              <input onChange={handleName} ref={nameRef} name="name" className="p-2 mt-1 w-full border-2 border-hsl(270, 3%, 87%) rounded-lg" type="text" placeholder="e.g. Jane Apples"/>
            </label>
          </div>

          <div className="flex flex-col">
            <label className="text-xs mt-2"> CARD NUMBER
              <input onChange={handleCard} ref={cardRef} id="txtCardNumber" className="p-2 w-full mt-1 border-2 border-hsl(270, 3%, 87%) rounded-lg  font-spacegrotesk" type="number" placeholder="e.g. 1234 5678 9123 0000"/>
            </label>
          </div>

          <div className="flex w-full items-center  mt-4">
            <label className="text-xs"> EXP. DATE (MM/YY)
              <div className="flex gap-2 w-full">
                <input onChange={handleMonth} className="w-full mt-1 p-2 border-2 border-hsl(270, 3%, 87%) rounded-lg" type="number" placeholder="MM"/> 
                <input onChange={handleYear} className="w-full mt-1 p-2 border-2 border-hsl(270, 3%, 87%) rounded-lg" type="number" placeholder="YY" /> 
              </div>
            </label>
            <div className="flex w-full justify-end">
              <label className="font-spacegrotesk text-xs ml-2">CVC
                <input onChange={handleCvc} className=" p-2 mt-1 w-full border-2 border-hsl(270, 3%, 87%) rounded-lg" type="number" placeholder="e.g. 123"/>
              </label>
              </div>
            </div>
            <div className=" btn text-center mt-4 h-19 p-2 rounded-md bg-[#21092f] text-[#ffffff]">
                <button type="submit">Confirm</button>
            </div>
        </div>
      </form>
  )
}

export default Form