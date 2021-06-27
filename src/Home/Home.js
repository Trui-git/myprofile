import React, { Component } from "react";
import { Button  } from 'react-bootstrap';
//import history from './../history';
import "./Home.css";
import photo from './../images/TCBTH1535551.jpg';
//import hacker from './../images/hackerrankicon.png';
import './../fonts/font-awesome.min.css';

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
                <h5 className="white">Skills and Technology</h5>
                <strong>C/C++</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>MySQL</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>Java</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>Javascript/Framework/React</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>Adobe Photoshop/Illustrator</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>Android Development</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>Mobile Web Development</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>Android Tablet Development</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>Python Development</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>iPhone Development</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>C#/ASP.NET</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                <strong>Advanced Web technologies</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                  </div>
                  <strong>Linux and Apache</strong>
                <span className="float-right">Done</span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" 
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
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
                    <li>English --  Fluent</li>
                    <li>German  --  Fluent, speaking moderate </li>  
                    <li>Chinese --  Native</li>              
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
                  <p><a className="fa fa-envelope" href="mailto:tengrui13@gmail.com"> tengrui13@gmail.com </a></p>
                  <br/>
                  <a class="fa fa-youtube myicons" aria-hidden="false" href="https://www.youtube.com/channel/UCHQamrGS3aH8lUCdrK4qlWw/featured" target="_blank" rel="noopener noreferrer" ></a>
                  <a class="fa fa-github myicons" aria-hidden="false" href="https://github.com/ruiteng2021" target="_blank" rel="noopener noreferrer"></a>
                  <a class="fa fa-h-square myicons" href="https://www.hackerrank.com/tengrui13?hr_r=1" target="_blank" rel="noopener noreferrer"></a>
                  <a class="fa fa-linkedin-square myicons" href="https://www.linkedin.com/in/rui-teng-b432151a5/" target="_blank" rel="noopener noreferrer"></a>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="experience">
                <h2 className="white">School Project Sites</h2>
                  <div className="experience-content">

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: Aquarium</p>
                          <p>Created with : ReactJS</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg aqurium" onClick={() => window.open('#/Aquarium')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/myprofile/tree/master/src" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: Game</p>
                          <p>Created with : Javascript</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg game" onClick={() => window.open('https://rui-javascript.netlify.app')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/JavascriptGame" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: War Simulation</p>
                          <p>Created with : Java</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg warsim" onClick={() => window.open('#/Java')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/WarSimulator" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: Super Shopping Cart</p>
                          <p>Created with : C/C++</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg supershopping" onClick={() => window.open('#/Cpp')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/SperShopping" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: Pet Walk</p>
                          <p>Created with : Asp.net core5 Razor MSSQL</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg petwalk" onClick={() => window.open('#/Sql')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/PetWalk" target="_blank" rel="noopener noreferrer">Source Code</a>  
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: Movie Maven</p>
                          <p>Created with : Asp.net core5 Razor</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg moviemaven" onClick={() => window.open('#/Csharp')}>Site Demo</Button>                              
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/MovieMaven" target="_blank" rel="noopener noreferrer">Source Code</a>  
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: Website Mockup</p>
                          <p>Created with : Adobe Photoshop</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg adobe" onClick={() => window.open('#/Photoshop')}>Site Demo</Button>
                            </div>                          
                            <p>
                              N/A
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: Icons</p>
                          <p>Created with : Adobe Illustrator</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg illustrator" onClick={() => window.open('#/Illustrator')}>Site Demo</Button>
                            </div>                          
                            <p>
                              N/A
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: Recipe</p>
                          <p>Created with : ReactJS</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg recipe" onClick={() => window.open('https://ruiteng2021.github.io/recipe/')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/recipe" target="_blank" rel="noopener noreferrer">Source Code</a>                              
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: Computer Shop</p>
                          <p>Created with : PHP</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg computershop" onClick={() => window.open('https://computershop01.000webhostapp.com/')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/shoppingcart" target="_blank" rel="noopener noreferrer">Source Code</a>                    
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: Business Notes</p>
                          <p>Created with : IOS/Swift</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg businessnotes" onClick={() => window.open('#/Ios')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/MeetingNotes2" target="_blank" rel="noopener noreferrer">Source Code</a>                        
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: TV Maven</p>
                          <p>Created with : Python/Django</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg tvmaven" onClick={() => window.open('https://moviemicheroku.herokuapp.com/')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/MovieMic" target="_blank" rel="noopener noreferrer">Source Code</a>     
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: TVNinja</p>
                          <p>Created with : Asp.net core5 BazorWASM</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg tvninja" onClick={() => window.open('https://tvninjawasm.web.app/')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/MovieNinjaWASM" target="_blank" rel="noopener noreferrer">Source Code</a>     
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="scene">
                      <div className="project">
                        <div className="title">
                          <p>Project Name: CryptoCanuck</p>
                          <p>Created with : Asp.net core5 Razor</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg crypto" onClick={() => window.open('#/Crypto')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/triosdevelopers/CryptoCanuck" target="_blank" rel="noopener noreferrer">Source Code</a>     
                            </p>
                        </div>
                      </div>
                    </div>

                  </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="experience">
                <h2 className="white">School Project Apps</h2>
                <div className="experience-content">

                  <div className="scene">
                      <div className="project">
                        <div className="title easylivingposter">
                          <p style={{paddingTop: '25px'}}>Project Name: EasyLiving</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg easyliving" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.trios.EasyLiving')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/EasyLiving" target="_blank" rel="noopener noreferrer">Source Code</a>     
                            </p>
                        </div>
                      </div>
                  </div>

                  <div className="scene">
                      <div className="project">
                        <div className="title smrtposter">
                          <p style={{color: '#fff'}}>Project Name: Stock Analyse</p>
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg smrt" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.trios.smrt')}>Site Demo</Button>
                            </div>                          
                            <p>
                              <a href="https://github.com/ruiteng2021/SMRT" target="_blank" rel="noopener noreferrer">Source Code</a>     
                            </p>
                        </div>
                      </div>
                  </div>

                  <div className="scene">
                      <div className="project">
                        <div className="title gradtrackerposter">      
                          <p style={{paddingTop: '10px'}}>Project Name: Grade Tracker</p>          
                        </div>
                        <div className="links">
                            <div className="site">
                              <Button className="backgroundImg gradtracker" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.trios.gradetracker')}>Site Demo</Button>
                            </div>                                             
                            <p>
                              <a href="https://github.com/ruiteng2021/GradeTracker" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </p>
                        </div>
                      </div>
                  </div>


                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="languages">
                <h2>HackerRank Badges</h2>
                  <div className="site">
                    <Button className="backgroundImg hackerrank" onClick={() => window.open('https://www.hackerrank.com/tengrui13?hr_r=1')}></Button>
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


