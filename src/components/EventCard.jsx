//compontents/EventCard.jsx

// This is Event Card 
import React from 'react'
import '../App.css';

const EventCard = ({description, title}) => {
  return (
    <div className="eventcard">
      <div>
        <h4>
            {title}
        </h4>
        <div>{description }</div>
         <div>
           <button>Notify me⏰</button>
        </div>
      </div>
    </div>
  )
}

export default EventCard