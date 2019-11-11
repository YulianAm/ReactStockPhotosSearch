import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSumbit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
        
    };

    render() {
        return (
            <div className="ui segment">
                <div className="ui container" style={{ paddingBottom: '50px' }}>
                <i className="search icon big" />
                <label>Image search </label>
                </div>
                <form onSubmit={ this.onFormSumbit } className="ui form">
                    <div className="field">
                        <input type="text" value={this.state.term}
                        onChange={ e => this.setState({term : e.target.value}) } />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;