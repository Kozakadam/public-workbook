import React from 'react';
import Question from "./Question.jsx";

const TopicActive = ({topic, deActivate}) => {
  return (
    <div className="border-b border-t border-stone-400">
      <div className="my-1 ml-6 text-lg">
        <button onClick={() => deActivate(topic.topic)}>{topic.topic}</button>
      </div>
      {topic.questions.map((q, i) => <Question question={q} key={q.question[0] + i}/>)}
    </div>
  );
};

export default TopicActive;
