import React, { useContext } from 'react'
import {FaTrash} from 'react-icons/fa'
import GlobalContext from '../context/GlobalContext'

function ListItem({transaction}) {
  

  const {deleteTransaction} = useContext(GlobalContext)

  const {amount , text , id} = transaction
  


  return (
    <li className="list-item">
    <span>
      <h3 className={amount > 0 ? "income-transaction" : "expense-transaction"}>₹{amount}</h3>
      <h4>{text}</h4>
    </span>
    <button className="delbtn" onClick={()=>deleteTransaction(id)}><FaTrash/></button>
  </li>
  )
}

export default ListItem