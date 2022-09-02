import React from 'react'
import FeedbItem from './FeedbItem'

function FeedbackList({feedback, handleDelet}) {
    
    if(!feedback || feedback.length ===0){
        return <p>Do not have feedback</p>
    }

  return (
    <div className="feedback-list">
        {feedback.map((item)=>(
            <FeedbItem key={item.id} item={item} 
            handleDelet={handleDelet}/>
        ))}
    </div>
  )
}

export default FeedbackList