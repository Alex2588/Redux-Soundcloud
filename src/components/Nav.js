import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import search from '../actions/search';

class Nav extends React.Component{

    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }

    search(){
        this.props.onSearch(this.searchInput.value);
    }

    render(){
        return(
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <Link to="/" className="navbar-brand">REDUX SOUNDCLOUD</Link>
                <form className="offset-1 col-md-6">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={this.search} ref={node => this.searchInput = node}/>
                </form>
                <Link to="/login" className="btn btn-primary ml-auto">Login</Link>              
            </nav>
        );
    }
};

function mapDispatchToProps(dispatch){
    return {
        onSearch: bindActionCreators(search, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Nav);