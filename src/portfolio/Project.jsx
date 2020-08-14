import React, { Component } from 'react';
import FixedWidthIcons from "./icon/icons";


class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="project_wrap">
          <div className="project_title">
            <h1>Project</h1>
          </div>
          <div className="project_content">
            <div className="content_img">
              <img src="/img/project_kakao.png" />
            </div>
            <div className="content">
              <span>2019.05.27 ~ 2019.06.11 (15일)</span>
              <h4>카카오프렌즈샵 사이트 벤치마킹</h4>
              <p>사용 기술: Java, HTML, CSS, Javascript, Ajax, Bootstrap, JSP, EL, JSTL, SQL, ibatis, jQuery, 모델2</p>
              <ul>
                <li><FixedWidthIcons />ajax와 json을 사용하여 추가기능 구현</li>
                <li><FixedWidthIcons />카테고리별, 옵션별(캐릭터, 최신, 가격, 글로벌 배송) 상품 정렬</li>
                <li><FixedWidthIcons />상품갯수에 따라 페이징 개수가 다르게 표현 (페이징 처리)</li>
              </ul>
            </div>
          </div>
          <div className="project_content">
            <div className="content_img">
              <img src="/img/project_camping.jpg" />
            </div>
            <div className="content">
              <span>2019.7.22 ~ 2019.8.19 (29일)</span>
              <h4>캠핑 사이트 개발</h4>
              <p>사용 기술: Java, HTML, CSS, Javascript, Ajax, Bootstrap, JSP, EL, JSTL, SQL, mybatis, jQuery, circles.min.js, owlcarousel</p>
              <ul>
                <li><FixedWidthIcons />Ajax를 사용하여 키워드별, 지역별 검색기능(클릭시 캠핑상세페이지로 이동)</li>
                <li><FixedWidthIcons />circles-master library를 사용하여 카테고리별 캠핑장 개수 통계</li>
                <li><FixedWidthIcons />OwlCarousel library를 사용하여 북마크 및 최신순 캠핑장 목록 슬라이드</li>
              </ul>
            </div>
          </div>
          <div className="project_content">
            <div className="content_img">
              <img src="/img/project_kanbanboard.PNG" />
            </div>
            <div className="content">
              <span>2020.05.18 ~ 2020.05.25 (7일)</span>
              <h4>칸반 앱 만들기</h4>
              <p>사용 기술: React, CSS, Javascript</p>
              <p>description: 프로젝트 관리 앱</p>
              <h3>Learn</h3>
              <ul>
                <li><FixedWidthIcons />React 적응하기</li>
                <li><FixedWidthIcons />컴포넌트에 대해 이해하기</li>
                <li><FixedWidthIcons />토글 기능</li>
              </ul>
            </div>
          </div>
          <div className="project_content">
            <div className="content_img">
              <img src="/img/project_dropZone.PNG" />
            </div>
            <div className="content">
              <span>2020.05.26 ~ 2020.06.03 (8일)</span>
              <h4>DropZone</h4>
              <p>사용 기술: React, CSS, Javascript, React, DropZone, axios</p>
              <p>description: DropZone 영역에 이미지 업로드시 이미지 내용 보여주기</p>
              <h3>Learn</h3>
              <ul>
                <li><FixedWidthIcons />DropZone library</li>
                <li><FixedWidthIcons />axios, fileAPI</li>
                <li><FixedWidthIcons />base64 인코딩방식</li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Project;