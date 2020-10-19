<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="웹개발자 곽하린, 포트폴리오">
    <meta name="keywords" content="웹개발자 곽하린,포트폴리오">
    <meta name="robots" content="all">

    <title>웹퍼블리셔 곽하린 포트폴리오</title>

    <link rel="apple-touch-icon" href="images/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/apple-icon-152x152.png">

    <!--font-family: 'Black Han Sans', sans-serif;-->
    <link href="https://fonts.googleapis.com/css?family=Black+Han+Sans&display=swap" rel="stylesheet">
    <!--font-family: 'Noto Sans KR', sans-serif;-->
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean" rel="stylesheet">

    <link rel="stylesheet" href="css/imagehover.min.css">
    <link rel="stylesheet" href="css/portfolio.css">
    <link rel="stylesheet" href="css/hover.css">
    <link rel="stylesheet" href="css/magic.css">

    <!--csshake-->
    <link rel="stylesheet" type="text/css" href="https://csshake.surge.sh/csshake.min.css">
    <!--AOS 라이브러리-->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!--AOS 라이브러리-->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap" rel="stylesheet">
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossorigin="anonymous"></script>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/jquery.easing.compatibility.js"></script>
    <script src="js/progressbar.js"></script>
    <script src="js/jquery.ui.ipad.js"></script>
    <script src="js/portfolio.js"></script>

</head>

<body>
  <div class="loading_back">
    <div class="loading"></div>
  </div>
    <!--   NAV-->
    <nav>
        <ol>
            <li>about</li>
            <li>skill</li>
            <li>work1</li>
            <li>work2</li>
            <li>contact</li>
        </ol>
    </nav>

    <!--    ASIDE-->
    <aside>
        <div id="bar_aside"></div>
        <img src="images/aside_arrow.png" alt="top button" class="arrow">
    </aside>

    <!--    MAIN-->
    <div class="main section">
        <div class="box">
            <span >Web Developer<br>Portfolio</span>
            <p class="preview-item small shake-slow shake-constant shake-constant--hover" style="animation-duration: 8s;">H</p>
            <p class="preview-item small shake-little shake-constant shake-constant--hover">a</p>
            <p class="preview-item small shake-slow shake-constant shake-constant--hover">R</p>
            <p class="preview-item small shake-little shake-constant shake-constant--hover">i</p>
            <p class="preview-item small shake-slow shake-constant shake-constant--hover" style="animation-duration: 6s;">n</p>
        </div>
    </div>

    <div class="wrap">
        <!-- ABOUT -->
        <div class="about section">
            <div class="height_wrap">
                <div class="selfie info" id="selfie">
                  <div class="">
                    <figure class="imghvr-reveal-left">
                      <img class="trigger"src="images/profile1.jpg" alt="about_img" >
                      <figcaption class="hoverImg trigger">
                        <img id="imageOriginal"  src="images/original1.png" alt="">
                      </figcaption><a href="javascript:;"></a>
                    </figure>
                  </div>
                  <div class="clickInfo_box">
                    <img class="clickInfo" src="images/aside_arrow.png" alt="about_img" >
                  </div>
                </div>
                <div class="profile info" >
                  <input type="hidden" id="typing-txt" value="항상 새로운 꿈을 꾸는 개발자, 곽하린 입니다.">
                    <h1 id="typing"></h1>
                    <div id="scrollEvent1">
                      <span><br>학창시절과 대학생 시절 내내 제 인생의 신조는 "도전하는 자만이 기회를 얻는다" 이었습니다. 단순한 말이지만 이 말에는 엄청난 힘이 숨겨져 있습니다. 무슨 일이든 마음을 먹고 시도하면, 시작부터 겁을 먹고 도전하지 못하는 사람들보다 같은 조건에서도 더 많은 기회를 잡을 수 있기 때문입니다.
                      그러므로 언제나 새로운 일에 도전하고 견문을 넓히는 것이 제 인생의 이상향이자 목표고, 앞으로도 끊임없이 새로운 것을 도전하면서 제게 주어진 기회를 놓치지 않을 것이라고 자부할 수 있습니다.
                      <br><br>
                      항상 끊임없이 새로운 것을 배우고 경험하며, <span id="point">"노력파 개발자"</span> 뿐만이 아닌 다방면에서 제 열정을 뽐내는 <span id="point">"만능 에너자이저 개발자"</span>가 되는 것이 저의 목표입니다.
                      </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- skill -->
        <div class="skill section">
          <div class="height_wrap">
            <div class="education_wrapper">
              <div class="education info">
                  <h1>EDUCATION</h1>
                  <span id="educationDate">2020.09</span><br>
                  <span>디지털컨버전스 기반 Spring 개발자 양성과정</span>
                  <span class="certificate_ex1">- 비트교육센터</span><br>
                  <span id="educationDate">2020.03</span><br>
                  <span>호서대학교 법경찰학과(졸업)</span><br>
                  <span class="certificate_ex2">[졸업논문] 사이버 범죄의 효과적 대응방안에 관한 연구</span>
              </div>
              <div class="certificate info">
                  <h1>CERTIFICATE</h1>
                  <span id="educationDate">2019.08</span><br>
                  <span>TOEIC 625점</span><br>
                  <span id="educationDate">2016.12</span><br>
                  <span>MOS Excel</span><span class="certificate_ex1">-Microsoft</span><br>
                  <span id="educationDate">2016.10</span><br>
                  <span>MOS PowerPoint</span><span class="certificate_ex1">-Microsoft</span><br>
              </div>
            </div>
            <div class="skill_wrapper">
              <div class="skills info">
                  <h1>SKILLS</h1>
                  <div class="frontDiv">
                     <img id="frontImg" src="images/html5.png">
                     <img id="frontImg" src="images/css.png">
                     <img id="frontImg" style="width:55px;"src="images/javascript.png">
                     <img id="frontImg" src="images/bootstrap.png">
                     <img id="frontImg" src="images/jquery.png">
                     <img id="frontImg" style="width:60px; height:40px;" src="images/ajax.jpg">
                  </div>
                  <div class="backDiv">
                     <img id="backImg"  src="images/java.png">
                     <img id="backImg"  src="images/spring.png">
                     <img id="backImg"  src="images/apatch.png">
                     <img id="backImg"  src="images/ORACLE.png">
                     <img id="backImg"  style="width:90px;" src="images/mybatis-logo.png">
                     <img id="backImg"  src="https://www.logolynx.com/images/logolynx/23/2334e82ea682a206c57645eb95817e43.png">
                  </div>
              </div>

            </div>
          </div>

        </div>
        <!--        work-->
        <div class="work1 section">
          <div class="work1_wrapper">
            <div class="work_info" id="slideLeft">
              <div class="work_header">
                <h1>"Cookie Run" Project</h1>
              </div>
              <div class="work_skills">
                <div class="skill_design">java</div>
                <div class="skill_design">Oracle</div>
              </div>
              <div class="work_ex" >
                모바일 게임인 쿠키런을 PC 버전의 1대1 매칭 시스템으로 구현한 “쿠키런”프로젝트.<br>
                - 대기실 네트워크 쪽과 게임 구현.<br>
                - 멀티 스레드를 통해 게임의 프레임을 여러가지로 나누어서 동시 진행이 되도록 구현.<br>
                - 웹 소켓을 활용하여 실시간으로 대전중인 상대방의 점수를 확인할 수 있게 구현.<br>
                - 웹소켓을 통한 대기실 시스템 구축 및 랭킹 시스템 구현.
              </div>
              <div class="work_gitLink">
                <img class="gitLink_img hvr-grow" id="gitLink1"  src="https://www.logolynx.com/images/logolynx/23/2334e82ea682a206c57645eb95817e43.png" onclick="window.open('https://github.com/ohsanrim/CookieRun_project', 'Cookie Run github page');">
                <i class="far fa-file-powerpoint hvr-grow" id="powerPoint_work1" onclick="window.open('portfolio/cookie_run_project.pdf', 'Cookie Run Project');"></i>
              </div>
            </div>
            <div class="design_container">
              <ul class="design_wrap">
                  <li>
                      <div class="mockup">
                          <a href="http://www.kimyeju.com/original/mcdelivery.jpg" target="_blank" id="orig0">
                            <img src="images/cookie-run.png" alt="원본 보기"></a>
                      </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        <!--morip 프로젝트-->
        <div class="work2 section">
          <div class="work2_wrapper">
            <div class="design_container">
              <ul class="design_wrap">
                  <li>
                      <div class="mockup">
                          <a href="http://www.kimyeju.com/original/mcdelivery.jpg" target="_blank" id="orig0">
                            <img src="images/morip.png" alt="원본 보기"></a>
                      </div>
                  </li>
              </ul>
            </div>
            <div class="work_info" id="slideRight">
              <div class="work_header">
                <h1>"MO:RIP" Project</h1>
              </div>
              <div class="work_skills">
                <div class="skill_design">java</div>
                <div class="skill_design">Oracle</div>
                <div class="skill_design">Spring</div>
                <div class="skill_design">Bootstrap</div>
                <div class="skill_design">jQuery</div>
                <div class="skill_design">Javascript</div>
                <div class="skill_design">HTML5</div>
                <div class="skill_design">CSS3</div>
                <div class="skill_design">Ajax</div>
                <div class="skill_design">Spring MVC</div>
                <div class="skill_design">MyBatis</div>
                <div class="skill_design">Apache Tomcat</div>
              </div>
              <div class="work_ex" >
                국내의 인스타그램 및 여행노트, VOLO 등의 여행기록사이트와 SNS를 모티브로 제작한 여행기록사이트 “몰입(MO:RIP)” 프로젝트<br>
                - 마이페이지 디자인 및 기능 구현 <br>
                - 여행기 작성 페이지 디자인 및 기능 구현 <br>
                - 관리자 페이지 디자인 <br>
                - 뷰, 글 수정, 미리보기 페이지 디자인 및 기능 구현 담당<br>
                - 무한스크롤 구현<br>
                - Full calendar API, summernote API 을 사용한 글작성 구현 <br>
              </div>
              <div class="work_gitLink">
                <img class="gitLink_img hvr-grow" id="gitLink1"  src="https://www.logolynx.com/images/logolynx/23/2334e82ea682a206c57645eb95817e43.png" onclick="window.open('https://github.com/ohsanrim/morip', 'Cookie Run github page');">
                <i class="far fa-file-powerpoint hvr-grow" id="powerPoint_work1" onclick="window.open('portfolio/MORIP_project.pdf', 'Cookie Run Project');"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!--        CONTACT-->
    <div class="contact section">
      <p class="copyright">Copyright ⓒ KWAKHARIN. All rights reserved.</p>
        <div class="height_wrap">
          <div class="contact_wrapper">
            <div class="contact_innerWrapper">
              <form class="contact_form" name="contactForm" method="post">
                <h3>SEND ME A MESSAGE</h3>
                <div class="inputbox name">
                  <input type="text" class="firstName" placeholder="First Name">
                  <input type="text" class="lastName" placeholder="Last Name">
                </div>
                <div class="inputbox email">
                  <input type="text" class="email" placeholder="name@example.com">
                </div>
                <div class="inputbox message">
                  <textarea type="text" class="message" placeholder="Send me a message"></textarea>
                </div>
                <div class="inputbox submitBtn hvr-pulse">
                  <div class="sendBtn">SEND</div>
                </div>
              </form>
            </div>
          </div>
          <div class="sub_contact_wrapper">
            <div class="sub_contact_innerWrapper">
              <div class="sub_contact">
                <h3>CONTACT ME</h3>
                <span>궁금한 점이 있으시면 언제든 연락주시면 답변 드리겠습니다. 블로그에 저의 자세한 활동이 기록되어 있으니 많은 방문 부탁드립니다!</span>
              </div>
              <div class="subcontact_info">
                <div class="phone container">
                  <div class="phone img">
                    <i id="img" class="fas fa-phone"></i>
                  </div>
                  <div class="phone wrap">
                    <h4>PHONE</h4>
                    <span>82+ 10-4319-7701</span>
                  </div>
                </div>
                <div class="email container">
                  <div class="email img">
                    <i id="img" class="fas fa-envelope-open"></i>
                  </div>
                  <div class="email wrap">
                    <h4>EMAIL</h4>
                    <span>ka28@naver.com</span>
                  </div>
                </div>
                <div class="blog container">
                  <div class="blog img">
                    <i id="img" class="fab fa-blogger"></i>
                  </div>
                  <div class="blog wrap">
                    <h4>BLOG</h4>
                    <span>www.blog.naver.com/ka28</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!---->
    <!-- Modal -->
  <div class="modal-wrapper">
    <div class="modal">
      <div class="head">
        <a class="btn-close trigger" href="#">
          <i class="fa fa-times" aria-hidden="true"></i>
        </a>
      </div>
      <div class="content">
        <div class="myLogo">
          <img src="images/harin3.jpg" alt="">
        </div>
        <div class="myInfo">
          <div class="info name">
            <h4>Name</h4><p>곽하린</p>
          </div>
          <div class="info age">
            <h4>Age</h4><p>23세(1998.02.08)</p>
          </div>
          <div class="info phone">
            <h4>Phone</h4><p>82+ 10-4319-7701</p>
          </div>
          <div class="info blog">
            <h4>Blog</h4><a href="https://blog.naver.com/ka28" target="_blank">www.blog.naver.com/ka28</a>
          </div>
          <div class="info github">
            <h4>Github</h4> <a href="https://github.com/ohsanrim" target="_blank">www.github.com/ohsanrim</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
