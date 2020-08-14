import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import UploadArea from './UploadArea';
import OcrResultList from './OcrResultList';
import InputUrl from './InputUrl';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.handleFilechange = this.handleFilechange.bind(this);
    this.handleSubmitUrl = this.handleSubmitUrl.bind(this);
    this.state = {
      results: [],
    }
  }

  handleSubmitUrl(e) {
    fetch('http://localhost:3002/api', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ which: e })
    })
      .then(res => res.json())
      .then(data => {
        console.log(JSON.stringify(data));
      });

  }

  handleFilechange(e) {
    e.forEach((file) => {
      const fileName = file.name;

      var frm = new FormData();
      frm.append("image", file);

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const fileImg = reader.result;     // base64 주소
        console.info(fileImg);

        Axios.post('http://api.ocr-demo.svc.ar1.io.navercorp.com/v2/general/kr/recognition', frm, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(response => {
            const fileText = response.data.annotations.map((data) => data.text).join(' ');  // 파일내용
            // console.info(fileText);   
            // console.info(fileName);
            // console.info(fileImg);
            const _results = this.state.results.slice();
            const fileList = _results.concat({ name: fileName, img: fileImg, text: fileText });
            this.setState({ results: fileList });

          })
          .catch(error => {
            console.log(error);
          })
      };
      reader.onerror = function (error) {
        console.log('Error', error);
      }
    })
  }

  render() {
    document.title = "OCR Playground";

    const fileList = this.state.results.map((file) => {
      return <OcrResultList key={file.img} name={file.name} fileImg={file.img} text={file.text} />
    })

    return (
      <div>
        <UploadArea onFilechange={this.handleFilechange} />
        <InputUrl onSubmitUrl={this.handleSubmitUrl}></InputUrl>
        {fileList}
      </div>
    )
  }
}

export default FileUpload;