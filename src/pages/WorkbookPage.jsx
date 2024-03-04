import React, { useEffect, useState } from 'react';
import workbook from "../workbook.json";
import TopicActive from "../components/TopicActive.jsx";
import TopicHidden from "../components/TopicHidden.jsx";

const WorkbookPage = () => {
  const [active, setActive] = useState([]);

  useEffect(() => {
    console.log(active);
  }, [active]);

  function activate(topic) {
    setActive([...active, topic]);
  }

  function deActivate(topic) {
    setActive([...active.filter(t => t !== topic)]);
  }

  return (
    <>
      <div className="my-6 text-white">
        {workbook.workbook.map((t, i) => active.includes(t.topic) ?
          <TopicActive topic={t} deActivate={deActivate} key={t.topic[0] + i}/> :
          <TopicHidden activate={activate} topic={t.topic} key={t.topic[0] + i}/>)}
      </div>
    </>
  );
};

export default WorkbookPage;
