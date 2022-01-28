import React, { useState } from "react";
import "./questions.css";

const Questions = ({ data }) => {
   const [questions, setQuestions] = useState(data);
   return (
      <>
         {data.map((item) => {
            const { id, title, info } = item;
            return (
               <article key={id}>
                  <header>
                     <h4>{title}</h4>
                  </header>
               </article>
            );
         })}
      </>
   );
};

export default Questions;

//setup html structure
//loop over the data and display
//show/hide data when button is clicked


