import * as React from 'react';
import { style } from 'typestyle';

const className = style({
  color: 'red',
  fontSize: '30px',
});

const App = () => {
  return (
    <div className={className}>
      Hello World
    </div>
  );
}