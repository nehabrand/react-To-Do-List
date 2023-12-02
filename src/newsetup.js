import React from 'react';
import {Text} from 'react';

const ViewBoxesWithColorAndText = () => {
  return (
    <div
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
      <div style={{backgroundColor: 'blue', flex: 0.3}} />
      <div style={{backgroundColor: 'red', flex: 0.5}} />
      <Text>Hello World!</Text>
    </div>
  );
};

export default ViewBoxesWithColorAndText;
