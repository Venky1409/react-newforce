import React, { Component } from 'react';
import './header.css';
class Home extends Component {
  render() {
    return (<div className="container-fluid">
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="item active">
        <img src="https://media.licdn.com/dms/image/C511BAQFcLqAl7PGwDw/company-background_10000/0?e=2159024400&v=beta&t=QWArRegiLEsWeXSujctwcRT4t6Q4kyel4fwSgYi2bes" alt="Newforce LTD"/>
      </div>
      <div className="item">
        <img src="https://www.newforcesolution.com/images/about_section.jpg" alt="Newforce Arch"/>
      </div>
      <div className="item">
        <img src="https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/36515826_879816678872368_2592464774084165632_n.jpg?_nc_cat=100&_nc_ht=scontent.fhyd2-1.fna&oh=caf5dcc8fe1b2b810627a5e8a7707b82&oe=5D22DA9A" alt="Newforce Global Service"/>
      </div>
    </div>
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  <div className="content-section">
    <p>Newforce Global Services is a London Registered Global Service Provider having customers across developed Global markets United States,Canada,UK,Europe,Australia,New Zealand,Middle East,Singapore,Hong Kong,Malaysia.
    </p>
    <p>Newforce Global Services Provide services in Education,Consulting Staffing segments at most affordable price by using a mix of right shore & offshoring experts.Currently Newforce have around 20000+ Experts in 800+ skills helping customer Globally.</p>
    <p><strong>Education Services :</strong> Major area of Business is Private tuitions in Software Programming,IT,Engineering, Test Preparations, Languages, University,College,Medical Subjects,Many More supporting students in their academic growth.</p>
    <p><strong>Consulting Services :</strong> IT Infrastructure, IT Consulting, business change, project management and senior appointments in a multi sector environment supporting clients in their business growth.. </p>
    <p><strong>Staffing Services :</strong> We source the best permanent or Contract candidates available in the market to give our clients the competitive edge required to achieve their goals. Our clients benefit from our commitment to quality and unparalleled knowledge and expertise.Supporting Resources and companies in their  growth.
    </p>
    <p>Newforce Global Services specialist Technical consultants have extensive industry experience in their respective markets with enviable historic relationships and extensive networks. Each consultant is dedicated and determined to source and deliver an outstanding search and selection service to their clients and candidates alike.</p>
    <p>Visit our website <a href="http://www.newforceltd.com/" target="_blank" rel="noopener noreferrer">www.newforceltd.com</a> or write email to us at <a href="mailto:accounts@newforcdeltd.com">accounts@newforcdeltd.com</a> to know more about our service models</p>
  </div>
</div>
    )
  }
}

export default Home;
