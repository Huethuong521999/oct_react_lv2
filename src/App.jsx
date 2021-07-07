import './App.css';
import React from 'react';
import ClassCom from './ClassComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hideClassComp: true};
    this.hideClassComponent = this.hideClassComponent.bind(this);
  }

  hideClassComponent = () => {
    this.setState({hideClassComp: !this.state.hideClassComp});
  }

  render() {
    return (
      <>
      {this.state.hideClassComp ? <ClassCom stateChange={`State value từ App.jsx không phải từ click vì click thay đổi stateChange thành "Click change state" nhưng getDerivedStateFromProps() đã thay đổi stateChange trước khi được render`} />:null}
      <button type="button" onClick={this.hideClassComponent}>Ẩn Class Component props</button> 
      <br/>
      </>
    );
  }
}

export default App;
