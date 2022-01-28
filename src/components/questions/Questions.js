import React, { useState } from "react";
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';
import "./questions.css";

const Questions = ({ data }) => {
   const [questions] = useState(data);
   const [isShown, setIsShown] = useState(false);

   return (
      <>
         {questions.map((question) => {
            const { id, title, info } = question;
            return (
               <article key={id} className="question">
                  <header className="question_header">
                     <h4>{title}</h4>
                  <button className="question_btn" onClick={() => setIsShown(!isShown)}>
                     {isShown ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                  </button>
                  </header>
                  {isShown && <p className="question_p">{info}</p>}
               </article>
            );
         })}
      </>
   );
};

export default Questions;

//setup html structure
//loop over the data and display
//create button to toggle state
//show/hide data when button is clicked


