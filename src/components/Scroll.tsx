import React from 'react';

type Props = {
  children?: JSX.Element;
};

const Scroll = (props: Props) => {
  return (
    <div
      style={{
        marginTop: '20px',
        overflowY: 'scroll',
        border: '2px solid rgba(12, 202, 196, .2)',
        borderRadius: '10px',
        height: '800px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
