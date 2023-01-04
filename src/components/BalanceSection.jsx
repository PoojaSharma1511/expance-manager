import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function BalanceSection() {
  
 const {transactions} = useContext(GlobalContext)


  const income = transactions.filter((item)=>{
    if(item.amount > 0){
      return item
    }
  }).reduce((p,c)=>{
    return p + c.amount
  },0)
  
  const expense = transactions.filter((item)=>{
    if(item.amount < 0){
      return item
    }
  }).reduce((p,c)=>{
    return p + c.amount
  },0)


  if(transactions.length === 0){
    return (
      <h1 className="notransaction">There are no transactions yet!!</h1>
    )
  }


  return (
    <>
      <div id="current-status" className="main-section">
        <div id="income" className="balance">
          <span>
            <p>Current Income</p>
            <h1>₹{income}</h1>
          </span>
        </div>

        <div id="expense" className="balance">
          <span>
            <p>Current Expense</p>
            <h1>₹{expense}</h1>
          </span>
        </div>
      </div>
    </>
  );
}

export default BalanceSection;
