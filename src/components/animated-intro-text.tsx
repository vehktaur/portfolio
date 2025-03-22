'use client';

import TypeIt, { TypeItProps } from 'typeit-react';

const TypewriterText = (props: TypeItProps) => {
  return (
    <TypeIt
      options={{
        speed: 120,
        startDelay: 1600,
        loopDelay: 1200,
        deleteSpeed: 100,
      }}
      getBeforeInit={(instance) => {
        instance
          .type('Web Developer', { delay: 70 })
          .pause(1500)
          .move(-9, { speed: 90 })
          .delete(9)
          .pause(1500)
          .type(' ')
          .move(null)
          .type('Frontend', { delay: 70 })
          .pause(1500)
          .move(null, { speed: 90, to: 'END' })
          .type(' (React.js)', { delay: 70 })
          .pause(1500)
          .delete()
          .pause(500)
          .type('Problem Solver', { delay: 70 })
          .pause(1223)
          .delete(20)
          .pause(482)
          .type('Tech Enthusas', { delay: 70 })
          .move(-2)
          .type('i')
          .move(2)
          .type('t')
          .pause(1000)
          .type('!', { delay: 70 })
          .pause(1500)
          .delete()
          .pause(500)
          .type('Engineer', { delay: 70 })
          .pause(1500)
          .move(-8)
          .type(' ')
          .move(-1)
          .type('Frontend')
          .move(null, { to: 'END' })
          .pause(1000)
          .type('.')
          .go();

        return instance;
      }}
      {...props}
    />
  );
};

export default TypewriterText;
