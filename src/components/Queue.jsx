import * as React from "react";

function QueueDemo({ first, last, size, queue }) {
  return (
    <figure>
      <article>
        <p>Front</p>
        <ul>
          {queue.map((item, i) => {
            const isFirst = first === item;
            const isLast = last === item;
            if (isFirst) {
              return <li key={i}>First: {item}</li>;
            }
            if (isLast) {
              return <li key={i}>Last: {item}</li>;
            }
            return <li key={i}>Item: {item}</li>;
          })}
        </ul>
        <p>Back</p>
      </article>
      <figcaption>{size} items in the queue</figcaption>
    </figure>
  );
}

export { QueueDemo };
