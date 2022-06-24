import React from 'react';

const TriviaInfo = ({ randomQuestion, answer}) => {
    // console.log(questions)
    return (
        <div className='trivia'>
            {/* {console.log(questions.answer)} */}
            
            <h3>Question: <span>{randomQuestion.question}</span></h3>
            <h3>Value:<span>{randomQuestion.value}</span></h3>
            <h3> Answer: {!answer ? <span> {randomQuestion.answer}</span> : ''}</h3>
           
        </div>
    );
}

export default TriviaInfo;
