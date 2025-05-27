import React from "react";
import { useTimeout } from "../hooks/useTimeout";

function Bomb({ hasExploded, hasDefused, handleClick }) {
  if (hasExploded) {
    return (
      <figure>
        <span role="img" aria-label="Explosion Emoji">
          💥
        </span>
        <figcaption>You lose</figcaption>
      </figure>
    );
  }

  if (hasDefused) {
    return (
      <figure>
        <span role="img" aria-label="Explosion Emoji">
          🎉
        </span>
        <figcaption>You Win</figcaption>
      </figure>
    );
  }

  return (
    <button className="bomb" onClick={handleClick}>
      <span role="img" aria-label="Dynamite Emoji">
        🧨
      </span>
    </button>
  );
}

const Timeout = () => {
  const [hasDefused, setHasDefused] = React.useState(false);
  const [hasExploded, setHasExploded] = React.useState(false);
  const msTimer = 3000;

  const clear = useTimeout(() => {
    setHasExploded(!hasExploded);
  }, msTimer);

  const handleClick = () => {
    clear();
    setHasDefused(true);
  };
  return (
    <>
      <p>
        You have {msTimer / 1000}s to defuse (click) the bomb or it will explode{" "}
      </p>
      <button
        className="link"
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
      <Bomb
        hasDefused={hasDefused}
        hasExploded={hasExploded}
        handleClick={handleClick}
      />
    </>
  );
};

export default Timeout;
