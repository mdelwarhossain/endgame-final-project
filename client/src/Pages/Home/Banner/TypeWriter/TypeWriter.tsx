import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const TypeWriter = () => {

    const [text] = useTypewriter({
        words: ["Create An Account", "Find Your Dream Job", "Hire Qualified Employee", "See Others Activities"],
        loop: 10000000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
      });
    return (
        <div>
      <h4 className="text-xl  text-white"> 
       <span  style={{ marginLeft:"3px", fontWeight: 'bolder' }}>{text}</span>
      <Cursor cursorColor="var(--color-primary)" />
      </h4>
    </div>
    );
};

export default TypeWriter;