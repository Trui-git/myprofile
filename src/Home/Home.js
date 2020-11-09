import React, { Component } from "react";
import { Button  } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import photo from './../images/TCBTH1535551.jpg';
//import './../fonts/font-awesome.min.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  render() {
    return (
      <div className="home">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <img src={photo} className="img-fluid rounded-circle border border-white" alt="templatemo easy profile" />
                <hr />
                <h1 className="text-warning bold">Hi, I am Rui Teng</h1>
                <h1 className="text-white bold"> Web design is an art work</h1>
              </div>
            </div>          
            <p className="text-white bold "></p>
          </div>
        </header>

       <section className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="about">                
                <h2>Nothing great in the world was accomplished without passion.</h2> <br />
                <h5 className="float-right">― Georg Hegel</h5> 
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="skills">
                <h2 className="white">Skills</h2>
                <strong>C/C++</strong>
                <span className="float-right">92%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{width: '92%'}}></div>
                  </div>
                <strong>MySQL</strong>
                <span className="float-right">92%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{width: '92%'}}></div>
                  </div>
                <strong>Java</strong>
                <span className="float-right">91%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="91" aria-valuemin="0" aria-valuemax="100" style={{width: '91%'}}></div>
                  </div>
                <strong>Javascript/Framework/React</strong>
                <span className="float-right">96%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="96" aria-valuemin="0" aria-valuemax="100" style={{width: '96%'}}></div>
                  </div>
                <strong>C#/ASP.NET</strong>
                <span className="float-right">97%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="97" aria-valuemin="0" aria-valuemax="100" style={{width: '97%'}}></div>
                  </div>
                <strong>Adobe Photoshop/Illustrator</strong>
                <span className="float-right">85%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}></div>
                  </div>
                <strong>Linux and Apache</strong>
                <span className="float-right">0%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '0%'}}></div>
                  </div>
                <strong>iPhone Development</strong>
                <span className="float-right">0%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '0%'}}></div>
                  </div>
                <strong>Android Development</strong>
                <span className="float-right">99%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style={{width: '99%'}}></div>
                  </div>
                <strong>Mobile Web Development</strong>
                <span className="float-right">100%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>Android Tablet Development</strong>
                <span className="float-right">100%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>Python Development</strong>
                <span className="float-right">95%</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                  </div>
              </div>
            </div>
          </div>
        </section>


        <section className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="education">
                <h2 className="white">Education</h2>
                  <div className="education-content">
                    <h4 className="education-title accent">Enterprise Web & Mobile Developer</h4>
                      <div className="education-school">
                        <h5>triOS  COLLEGE</h5><span></span>
                        <h5>2019 October - 2021 August</h5> <br />
                      </div>
                    <p className="education-description">Enterprise Web & Mobile Developer(EWMD) is designed for the individul seeking knowledge in computer , Web and mobile application development using technology including HTML5, CSS, Javascript, PHP/SQL, Linux/Apache, Photoshop and illustrator, as well as learn how to develop application programs for use on desktop and servers using technologies including Java, C#, ASP.NET, and Microsoft SQL Server. Additionally, student learn how to create applications that run on mobile platform, including Google Android and Apple IOS.</p>
                  </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="languages">
                <h2>Languages</h2>
                  <ul>               
                    <li>English</li>
                    <li>Chinese</li>               
                  </ul>
              </div>
            </div>
          </div>
        </section>


        <section className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="contact">
                <h2>Contact</h2>
                  <p><i className="fa fa-map-marker"></i>577 Third Street, Lonsdon, ON, Canada</p>
                  <p><i className="fa fa-phone"></i> +1-519-318-8348</p>
                  <p><a className="fa fa-envelope" href="mailto:rui.teng@triosstudent.com"> rui.teng@triosstudent.com </a></p>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="experience">
                <h2 className="white">School Projects</h2>
                  <div className="experience-content">
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => history.push('/Aquarium')}>React Framework</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => (window.location = "https://rui-javascript.netlify.app")}>Javascript</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => history.push('/Java')}>Java</Button>
                    <Button disabled={!this.state.value} className="diagButton" variant="btn btn-secondary" onClick={() => history.push('/Work')}>C/C++</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() =>  (window.location = "https://petwalksite20200506100905.azurewebsites.net/")}>SQL</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => (window.location = "https://moviemaven00.azurewebsites.net/")}>C#/Asp.net</Button>
                    <Button disabled={!this.state.value} className="diagButton" variant="btn btn-secondary" onClick={() => history.push('/Work')}>Adobe Photoshop</Button>
                    <Button disabled={!this.state.value} className="diagButton" variant="btn btn-secondary" onClick={() => history.push('/Work')}>Adobe illustrator</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => (window.location = "https://trui-git.github.io/recipe/")}>Javascript Framework</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => (window.location = "https://computershop01.000webhostapp.com/")}>PHP programming</Button>
                    <Button disabled={!this.state.value} className="diagButton" variant="btn btn-secondary" onClick={() => history.push('/work')}>Python programming</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => (window.location = "https://play.google.com/store/apps/details?id=com.trios.EasyLiving")}>Android Develepment</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => history.push('/Ios')}>iPhone development</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => (window.location = "https://play.google.com/store/apps/details?id=com.trios.smrt")}>Mobile Web Development</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => (window.location = "https://play.google.com/store/apps/details?id=com.trios.gradetracker")}>Android Tablet Development</Button>
                    <Button className="diagButton" variant="btn btn-secondary" onClick={() => (window.location = "https://moviemicheroku.herokuapp.com/")}>Python Development</Button>
                    <Button disabled={!this.state.value} className="diagButton" variant="btn btn-secondary" onClick={() => history.push('/work')}>Linux Apache Development</Button>
                  </div>
              </div>
            </div>
          </div>
        </section>
       
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <p>Copyright &copy; 2020 Rui Teng's Profile</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}


