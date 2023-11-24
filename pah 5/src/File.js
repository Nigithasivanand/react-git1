import React from 'react';

class File extends React.Component {
  componentWillMount() {
    console.log('Component Will MOUNT!');
  }

  componentDidMount() {
    console.log('Component Did MOUNT!');
  }

  componentWillReceiveProps(newProps) {
    console.log('Component Will Receive Props!');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did UPDATE!');
  }

  componentWillUnmount() {
    console.log('Component Will UNMOUNT!');
  }

  render() {
    return (
      <div>
        <h2>{this.props.msg}</h2>
        <button onClick={this.props.onClick}>Change Message</button>
      </div>
    );
  }
}

export default File;