import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import s from './time.module.scss'
 
function Time() {
  const [value, setValue] = useState(new Date().toLocaleTimeString());
 
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date().toLocaleTimeString()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);

 
  return (
    <div className={s.clock}>
      {value}
    </div>
  )
}

export default Time;