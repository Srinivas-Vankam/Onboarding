import React from 'react';
import './stepProgress.scss';
export const StepProgress=({ tab, numberSteps }) => {
  let numSteps;
  if (numberSteps === null || undefined) {
    numSteps = arrayofDigits(numberSteps);
  } else {
    numSteps = arrayofDigits(4);
  }

  function arrayofDigits(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <div className='stepper' >
      <ul className='steps'>
        {numSteps.map((item) => {
          return (
            <li
              className={
                (tab === item? 'step step__incomplete step__active': tab < item?'step step__incomplete step__inactive': 'step step__complete step__inactive')
              }
              key={item}
            >
              <span className='step__icon'>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

