'use client';

import TypeIt from 'typeit-react';

const TypewriterText = () => {
  return (
    <TypeIt
      options={{
        speed: 200,
        startDelay: 1600,
        loopDelay: 1200,
        deleteSpeed: 100,
      }}
      getBeforeInit={(instance) => {
        instance
          .type('Web Developer', { delay: 100 })
          .pause(1500)
          .move(-9, { speed: 200 })
          .delete(9)
          .pause(1500)
          .type(' ')
          .move(-3)
          .type('Frontend', { delay: 100 })
          .pause(1500)
          .move(10, { speed: 200 })
          .type(' (React.js)', { delay: 100 })
          .pause(1500)
          .delete(30)
          .pause(500)
          .type('Problem Solver', { delay: 100 })
          .pause(1223)
          .delete(20)
          .pause(482)
          .type('Tech Enthusas', { delay: 100 })
          .move(-2)
          .type('i')
          .move(2)
          .type('t!', { delay: 100 })
          .pause(1500)
          .delete(20)
          .pause(500)
          .type('Engineer', { delay: 100 })
          .pause(1500)
          .move(-8, { speed: 308 })
          .pause(500)
          .type('Frontend ', { delay: 100 })
          .move(12)
          .type('.')
          .go();

        return instance;
      }}
    />
  );
};

export default TypewriterText;
