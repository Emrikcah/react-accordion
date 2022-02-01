import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./questions.css";

const Questions = ({ data }) => {
   const [questions, setQuestions] = useState(data);
   const [isShown, setIsShown] = useState(false);
   const [shownId, setShownId] = useState();

   const toggle = (id) => {
      setIsShown((isShown) => !isShown);
      !isShown ? setShownId(id) : setShownId(0);
      // if (!isShown) {
      //    setShownId(id);
      // }else{
      //    setShownId(0);
      // }
   };

   return (
      <>
         {questions.map((question) => {
            const { id, title, info } = question;

            return (
               <article key={id} className="question">
                  <header className="question_header">
                     <h4>{title}</h4>
                     <button className="question_btn" onClick={() => toggle(id)}>
                        {isShown ? <AiOutlineMinus /> : <AiOutlinePlus />}
                     </button>
                  </header>
                  {shownId === id && <p className="question_p">{info}</p>}
               </article>
            );
         })}
      </>
   );
};

export default Questions;




