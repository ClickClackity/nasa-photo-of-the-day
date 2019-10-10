import data from "../DateRange.js";
import { useTransition, animated } from 'react-spring';
import React, {useState} from "react";

const DropDown = () => {
  const [menuOpen, set] = useState(true);

  const handleBtnClick = () => set(!menuOpen);

  const transitions = useTransition(menuOpen, null, {
    from: { opacity: 0, transform: "translateY(-10%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(10%)" }
  });

  return (
    <div className="App">
      <button onClick={handleBtnClick}>Menu</button>
      {transitions.map(({ item, key, props }) => {
        return (
          item && (
            <animated.div
              style={{ ...props, position: "relative" }}
              className="menu"
              key={key}
            >
              {data.map(dates => (
                <div className="dates" key={dates}>
                  {dates}
                </div>
              ))}
            </animated.div>
          )
        );
      })}
    </div>
  );
};

export default DropDown;