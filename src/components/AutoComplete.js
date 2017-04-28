import React from 'react';
import { connect } from 'react-redux';

class AutoComplete extends React.Component{

    renderSearchResults(){
        const results = this.props;

        if(results.length){
             return(
                results.collection.map(result => {
                    <div>{result.output}</div>
                })
            );
        }
    }

    render(){
        return(
            <div></div>
        );
    }
};

function mapStateToProps(state){
    return {
        results: state.searchResults
    }
}

export default connect(mapStateToProps)(AutoComplete)