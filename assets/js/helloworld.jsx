

import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}


ReactDOM.render(
  <Home />,
  document.getElementById('ttt')
);
// console.log(11111111)
// var div = document.getElementById('root');
// div.innerHTML = "asdasdasda";
