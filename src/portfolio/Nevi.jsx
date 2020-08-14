import React, { Component } from 'react';

class Nevi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 'nevi'
    }
    this.scrollHandler = this.scrollHandler.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }
  scrollHandler(e) {
    if (window.scrollY > 400) {
      this.setState({ isActive: 'nevi-active' });
      console.log('d');
    } else if (window.scrollY <= 400) {
      this.setState({ isActive: 'nevi' });

    }
  }

  render() {
    return (
      <div className={this.state.isActive}>
        <div className="nevi_wrap">
          <div className="navi-left page-scroll">
            <a className="navbar-home" href="#page-top">Hyein World</a>
          </div>
          <div className="navi-right">
            <ul>
              <li className="page-scroll">
                <a href="#portfolio">About</a>
              </li>
              <li className="page-scroll">
                <a href="#about">Skills</a>
              </li>
              <li className="page-scroll">
                <a href="#contact">Technic</a>
              </li>
              <li className="page-scroll">
                <a href="#contact">Project</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Nevi;