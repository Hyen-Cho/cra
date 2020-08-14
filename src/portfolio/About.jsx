import React, { Component } from 'react';
import FixedWidthIcons from "./icon/icons";


class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about_wrap">
          <div className="about_title">
            <h1>About <i>'Hyein'</i></h1>
          </div>
          <div className="about_content">
            <div className="about_img">
              <img src="/img/my_photo.jpg" />
            </div>
            <div className="about_text_wrap">
              <h4>"Never Back Down"</h4>
              <p>
                개발자라면 갖춰야 할 덕목은 탄탄한 <strong>"Mental"</strong> 이라고 생각합니다.
                어려운 문제가 닥쳐오더라도 단단한 멘탈을 기반으로
                관심가지고 노력하면 결국에는 자신의 한계를 뛰어넘을 수 있습니다.
             </p>
              <p>
                저는 항상 사회생활을 하면서 서로에게 win-win이 되는 관계를 지향해왔습니다.
                근무하면서 의자나 책상처럼 그저 회사를 구성하는 존재가 되는 것,
                단순히 생계수단이 되는 것이 아니라 반드시 어느 자리에서든 필요한 사람이 되어야 한다고 생각합니다.
              </p>
              <h4>"Values"</h4>
              <ul>
                <li><FixedWidthIcons />위기를 기회로 바꾸자</li>
                <li><FixedWidthIcons />따라올 자 없다고 자부하는 근면성실함과 책임감</li>
                <li><FixedWidthIcons />원만한 대인관계를 바탕으로 한 효율적인 커뮤니케이션 스킬</li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default About;