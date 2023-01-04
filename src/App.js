import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import BalanceSection from "./components/BalanceSection";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from "./context/GlobalContext";

function App() {

 const [transactions , setTransactions] = useState([])

  const saveTransaction = (text , amount) => {
    const newTransaction = {
      id : uuidv4(),
      text : text,
      amount : parseInt(amount)
    }

    setTransactions([...transactions , newTransaction])

  }




  return (
    <GlobalProvider>
      <>
      <Navbar />
      <div className="container">
        <MainSection transactions={transactions} saveTransaction={saveTransaction}/>
        <BalanceSection transactions={transactions}/>
        <ListGroup />
      </div>
      <ToastContainer />
    </>
    </GlobalProvider>
  );
}

export default App;
