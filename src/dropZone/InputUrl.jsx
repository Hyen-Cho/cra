import React, { Component } from 'react';

class InputUrl extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    }
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleClick() {
    this.props.onSubmitUrl(this.state.searchTerm);
  }

  render() {
    return (
      <div className="inputUrl">
        <div className="input">
          <input type="url" placeholder="url을 입력하세요" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}></input>
          <button type="submit" onClick={this.handleClick.bind(this)}>분석</button>
        </div>
        <h4>파일목록</h4>
      </div>
    )
  }
}

export default InputUrl;