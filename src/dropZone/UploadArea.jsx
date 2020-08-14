import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class UploadArea extends Component {

  handleChange(e) {
    this.props.onFilechange(e);
  }

  render() {
    return (
      <Dropzone onDrop={this.handleChange.bind(this)} >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <section className="container" >
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p className="zone" >
                {isDragActive ? "Drop it like it's hot!" : "Drag 'n' drop some files here, or click to select files"}
              </p>
            </div>
          </section>
        )}
      </Dropzone>
    )
  }
}

export default UploadArea;