import React, { Component } from 'react';

class OcrResultList extends Component {
  render() {
    return (
      <div className="list">
        <div className="list_title">    {/* 배열받아서 <li> 로감싸서 변수 */}
          <img id="thumbnail" src={this.props.fileImg} />
          <p>{this.props.name}</p>
        </div>
        <div className="list_content">
          <textarea defaultValue={this.props.text} readOnly="readOnly"></textarea>
        </div>
      </div>
    )
  }
}

export default OcrResultList;