import React, { useEffect, useState } from "react";

const AnimationLoad = () => {
  const [run, setRun] = useState(true);
  useEffect(() => {
    let animation;
    let unAnimation;
    const load = () => {
      animation = setTimeout(() => {
        setRun(false);
      }, 500);

      unAnimation = setTimeout(() => {
        setRun(true);
        load();
      }, 2200);
    };
    load();
    return () => {
      clearTimeout(animation);
      clearTimeout(unAnimation);
    };
  }, []);

  return (
    <div className="playlist__selection">
      <div className="header__playlist__selection">
        <span className={`name__loader loader ${!run && "run"}`}></span>
      </div>
      <div className="list__playlist__selection">
        <div className="item__playlist__selection">
          <div className={`img__loader loader ${!run && "run"}`}></div>
        </div>
        <div className="item__playlist__selection">
          <div className={`img__loader loader ${!run && "run"}`}></div>
        </div>
        <div className="item__playlist__selection">
          <div className={`img__loader loader ${!run && "run"}`}></div>
        </div>
        <div className="item__playlist__selection">
          <div className={`img__loader loader ${!run && "run"}`}></div>
        </div>
        <div className="item__playlist__selection">
          <div className={`img__loader loader ${!run && "run"}`}></div>
        </div>
      </div>
    </div>
  );
};

export default AnimationLoad;
