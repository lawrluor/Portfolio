import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import fbLogin from './fbLogin.html';

const log = "
<html>
<head>
  <script>
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1005580019944390',
        cookie     : true,
        xfbml      : true,
        version    : 'v8.0'
      });

      FB.AppEvents.logPageView();

    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

    function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }
  </script>
</head>

<body>
  <fb:login-button
    scope="public_profile,email"
    onlogin="checkLoginState();">
  </fb:login-button>
</body>
</html>




<!-- {
  status: 'connected',
  authResponse: {
      accessToken: '...',
      expiresIn:'...',
      signedRequest:'...',
      userID:'...'
  }
} -->

"

class Teaching extends React.Component {
  render() {
    return (
      <Container className="bodyContainer">
        <Row>
          <Col lg="5" xs="12">
            <span><h1><b>TEACHING</b></h1></span>
            <p>
              To me, part of being a responsible creator involves sharing what I learn and training the next generation of developers. Through these efforts, I have accrued 7+ years of teaching experience spread across Computer Science & Coding subjects for students of all levels.
            </p>

            <p>
              My experience with software topics includes web & mobile app development with Python, HTML, CSS, Javascript, React, and React-Native. If you are interested in any of the subjects I tutor in, or are wondering if I can tutor in a specific subject not listed here, please don't hesitate to reach out and ask!
              For further inquiries, please visit my profile on <a href={"https://www.wyzant.com/Tutors/LawrenceTutors"} rel="noopener noreferrer" target="_blank">Wyzant</a>.
            </p>

            <div dangerouslySetInnerHTML={{ __html: fbLogin }} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Teaching;

/*
Greetings! I'm Lawrence, a graduate from Boston University with a degree in Psychology & Computer Science. I have 7+ years of tutoring experience spread across Computer Science & Coding subjects for students of all levels.

My experience with software topics includes web & mobile app development with Python, HTML, CSS, Javascript, React, and React-Native. If you are interested in any of the subjects I tutor in, or are wondering if I can tutor in a specific subject not listed here, please don't hesitate to reach out and ask!

All my life, I have known the immense value of teaching. I have experience at all levels: as a volunteer for elementary school students, a private tutor for middle and high school students, a teaching assistant for college students, and a Wyzant tutor for adult learners. These experiences have shaped my passion for educating others and have helped me understand a wide variety of student learning styles.

My tutoring style is based around understanding the student's specific needs and providing a personalized, holistic, and enjoyable learning experience. I determine the student's reasons for learning the subject, the specific parts of the subject that interest them, and their learning style. As a cross-sectional person with interests in technology, psychology, and music, I also make sure that the concepts I teach come with the context of their real-world applications. Finally, I invest myself in my students and I expect them to take similar responsibility for their own progress.
*/
