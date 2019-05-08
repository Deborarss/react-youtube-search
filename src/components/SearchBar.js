import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui inverted segment" style={{ background: '#B4151A' }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{ color: '#fff', fontSize: '1rem' }}>
              Procurar Vídeos
            </label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
