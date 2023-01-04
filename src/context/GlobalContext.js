import { createContext , useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
    
    const [transactions , setTransactions] = useState([{
        id : 1,
        text : "I am From Context",
        amount : 100000
    }])

// Save Transaction
    const saveTransaction = (text , amount) => {
        const newTransaction = {
          id : uuidv4(),
          text : text,
          amount : parseInt(amount)
        }
    
        setTransactions([...transactions , newTransaction])
    
      }
    

    
  // Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(item => item.id !== id))
  }
  
    return (
        <GlobalContext.Provider value={{
            transactions,
            deleteTransaction,
            saveTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext