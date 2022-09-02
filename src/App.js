import FeedbItem from "./components/FeedbItem";
import Header from "./components/Header"
import { useState } from 'react';
import FeedbackData from "./data/FedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


function App () {
  const [feedback, setFeddback]=useState(FeedbackData)

const handleDelet=(id)=>{
  if (window.confirm('Are you sure want to delet?')){
    setFeddback(feedback.filter((item)=>item.id !== id))
  }
}

  return(


     <>
    <Header text="Hello Ukraine"/>
    <div className="container">
      <FeedbackForm/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelet={handleDelet}/> 
    </div>
  </> 
  )
  
  }
export default App;