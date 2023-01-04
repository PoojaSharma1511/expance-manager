import { useContext, useState } from "react";
import { toast } from "react-toastify";
import GlobalContext from "../context/GlobalContext";

function MainSection() {

  const {saveTransaction , transactions} = useContext(GlobalContext)

  const balance = transactions.reduce((p , c)=>{
    return p + c.amount
  },0)
 
  const [text , setText] = useState("")
  const [amount , setAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    saveTransaction(text , amount)
    setText("")
    setAmount("")
  }

  return (
    <div className="main-section">
      <div id="current-bal" className="balance">
        <span>
          <p>Current Balance</p>
          <h1>₹{balance}</h1>
        </span>
        <i className="fa-solid fa-wallet"></i>
      </div>

      <form className="transaction-form" onSubmit={(e)=>handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Your Transaction"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
          required
        />
        <button>
          Save Transaction<i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
}

export default MainSection;
