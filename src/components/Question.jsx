import React from 'react';

const Question = ({question}) => {
  return (
    <div className="m-4">
      <div className="text-md">{question.question}</div>
      <div className="ml-4 mt-1 text-xs">{question.answer}</div>
    </div>
  );
};

export default Question;