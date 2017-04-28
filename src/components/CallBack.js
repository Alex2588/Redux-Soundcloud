import React from 'react';
import login from '../actions/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Callback extends React.Component {

  componentDidMount() {
    this.props.login();
  }

  render() {
    return <div><p>This page should close soon.</p></div>;
  }
}

function mapDispatchToProps(dispatch){
  return {
    login: bindActionCreators(login, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Callback);