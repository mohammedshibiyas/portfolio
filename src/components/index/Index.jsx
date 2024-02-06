import React from 'react'
import './Index.scss'


const Index = () => {
  return (
    <div>
      <div className="all">
      <nav id="header">
        <div className="nav-logo">
            <p className="nav-name">Mohammed Shibiyas</p>
            
        </div>
        <div className="nav-menu" id="myNavMenu">
            <ul className="nav_menu_list">
                <li className="nav_list">
                    <a href="#home" className="nav-link active-link">Home</a>
                    <div className="circle"></div>
                </li>
                <li className="nav_list">
                    <a href="#about" className="nav-link">About</a>
                    <div className="circle"></div>
                </li>
                <li className="nav_list">
                    <a href="#projects" className="nav-link">Projects</a>
                    <div className="circle"></div>
                </li>
                <li className="nav_list">
                    <a href="#contact" className="nav-link">Contact</a>
                    <div className="circle"></div>
                </li>
            </ul>
        </div>
        {/* <div className="nav-button">
            <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
        </div> */}
        <div className="nav-menu-btn">
            <i className="uil uil-bars" onclick="myMenuFunction()"></i>
        </div>
      </nav>

      {/* main */}

      <main class="wrapper">
        {/* featured box */}
        <section class="featured-box" id="home">
          <div class="featured-text">
            <div class="featured-text-card">
                <span>John Doe</span>
            </div>
            <div class="featured-name">
                <p>Web<span class="typedText"> Devolaper</span></p>
            </div>
            <div class="featured-text-info">
                <p>Experienced full stack developer with a passion for creating visually stunning
                   and user-friendly websites.
                </p>
            </div>
            <div class="featured-text-btn">
                <button class="btn blue-btn">Hire Me</button>
                <button class="btn">Download CV <i class="uil uil-file-alt"></i></button>
            </div>
            <div class="social_icons">
                <div class="icon"><i class="uil uil-instagram"></i></div>
                <div class="icon"><i class="uil uil-linkedin-alt"></i></div>
                <div class="icon"><i class="uil uil-dribbble"></i></div>
                <div class="icon"><i class="uil uil-github-alt"></i></div>
            </div>
          </div>
          <div class="featured-image">
            <div class="image">
                <img src="assets/images/avatar.png" alt="avatar"/>
            </div>
          </div>
          <div class="scroll-icon-box">
            <a href="#about" class="scroll-btn">
                <i class="uil uil-mouse-alt"></i>
                <p>Scroll Down</p>
            </a>
          </div>
       </section>

       {/* about section */}

       <section class="section" id="about">
          <div class="top-header">
            <h1>About Me</h1>
          </div>
          <div class="row">
            <div class="col">
                <div class="about-info">
                    <h3>My introduction</h3>
                    <p>I am well-versed in HTML, CSS and JavaScript , and other cutting edge
                       frameworks and libraries,which allows me to implement interactive features.
                       Additionally, I have experirence working with content management systems (CMS) like
                       WordPress.
                    </p>
                    <div class="about-btn">
                        <button class="btn">Download CV <i class="uil uil-import"></i></button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Frontend</h3>
                    </div>
                    <div class="skills-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>JavaScript</span>
                        {/* <span>Vue</span> */}
                        <span>React</span>
                        {/* <span>Angular</span> */}
                    </div>
                </div>
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Backend</h3>
                    </div>
                    <div class="skills-list">
                        <span>Express.js</span>
                        <span>Node.js</span>
                        {/* <span>Python</span>
                        <span>C++</span> */}
                    </div>
                </div>
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Database</h3>
                    </div>
                    <div class="skills-list">
                        <span>MySQL</span>
                        
                        <span>MongoDB</span>
                    </div>
                </div>
            </div>
          </div>
       </section>

       {/* project section */}
       <section class="section" id="projects">
          <div class="top-header">
              <h1>Projects</h1>
          </div>
          <div class="project-container">
            <div class="project-box">
                <i class="uil uil-briefcase-alt"></i>
                <h3>Completed</h3>
                <label>15+ Finished Projects</label>
            </div>
            <div class="project-box">
                <i class="uil uil-users-alt"></i>
                <h3>Clients</h3>
                <label>25+ Happy Clients</label>
            </div>
            <div class="project-box">
                <i class="uil uil-award"></i>
                <h3>Experience</h3>
                <label>7+ Years in the field</label>
            </div>
          </div>
       </section>

       {/* contact section */}

       <section class="section" id="contact">
          <div class="top-header">
            <h1>Get in touch</h1>
            <span>Do you have a project in your mind, contact me here</span>
          </div>
          <div class="row">
             <div class="col">
                <div class="contact-info">
                    <h2>Find Me <i class="uil uil-corner-right-down"></i></h2>
                    <p><i class="uil uil-envelope"></i> Email: john@doe.com</p>
                    <p><i class="uil uil-phone"></i> Tel: +250 708 770 000</p>
                </div>
             </div>
             <div class="col">
                <div class="form-control">
                    <div class="form-inputs">
                        <input type="text" class="input-field" placeholder="Name"/>
                        <input type="text" class="input-field" placeholder="Email"/>
                    </div>
                    <div class="text-area">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div class="form-button">
                        <button class="btn">Send <i class="uil uil-message"></i></button>
                    </div>
                </div>
             </div>
          </div>
       </section>

      </main>

      {/* footer */}
      <footer>
        <div class="top-footer">
            <p>Shibiyas .</p>
        </div>
        <div class="middle-footer">
            <ul class="footer-menu">
                <li class="footer_menu_list">
                    <a href="#home">Home</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#about">About</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#projects">Projects</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div class="footer-social-icons">
            <div class="icon"><i class="uil uil-instagram"></i></div>
            <div class="icon"><i class="uil uil-linkedin-alt"></i></div>
            <div class="icon"><i class="uil uil-dribbble"></i></div>
            <div class="icon"><i class="uil uil-github-alt"></i></div>
        </div>
        <div class="bottom-footer">
            <p>Copyright &copy; <a href="#home">Shibiyas</a> - All rights reserved</p>
        </div>
    </footer>





      </div>
    </div>
  )
}

export default Index
