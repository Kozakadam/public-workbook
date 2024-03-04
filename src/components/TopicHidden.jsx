import React from 'react';

const TopicHidden = ({activate, topic}) => {
  return (
    <div className="mb-1 ml-4 text-lg text-stone-400" >
      <button onClick={() => activate(topic)}>
        {topic}
      </button>
    </div>
  );
};

export default TopicHidden;