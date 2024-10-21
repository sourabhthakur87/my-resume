import React, { useEffect } from 'react';
import './App.css';
import profile from "./images/profile.jpg"
import gymgrow from "./images/gymgrow.png"
import vegible from "./images/vegible.png"
import covid from "./images/covid.png"
import envelope from "./images/envelope.png"
import github from "./images/github.png"
import info from "./images/info.png"
import linkedin from "./images/linkedin.png"
import chatify from "./images/chatify.jpeg"

function App() {
  useEffect(() => {
    // JavaScript for class toggling
    const elements = document.querySelectorAll('.alpha');
    const toggleClassesOnce = () => {
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.toggle('alpha1');
        }, index * 100);
      });

      setTimeout(() => {
        elements.forEach((element) => {
          element.classList.remove('alpha1');
        });
      }, elements.length * 200);
    };
    toggleClassesOnce();

    // JavaScript for random hover effect
    const randomHover = () => {
      const paragraphs = document.querySelectorAll('.skill');
      const randomIndex = Math.floor(Math.random() * paragraphs.length);
      const randomParagraph = paragraphs[randomIndex];

      if (randomParagraph) {
        randomParagraph.style.color = 'black';
        randomParagraph.style.backgroundColor = 'white';
        randomParagraph.style.boxShadow = '8px 8px rgb(90, 90, 90)';

        setTimeout(() => {
          randomParagraph.style.backgroundColor = 'orange';
          randomParagraph.style.boxShadow = '4px 4px rgb(90, 90, 90)';
        }, 1000);
      }
    };

    const hoverInterval = setInterval(randomHover, 1000);
    return () => clearInterval(hoverInterval);
  }, []);

  return (
    <div className="App">
      <div className="mainbox">
        <div className="rahul">
          {['S', 'O', 'U', 'R', 'A', 'B', 'H'].map((char, index) => (
            <p key={index} className="alpha">{char}</p>
          ))}
        </div>
        <h1 className="rahul0">S O U R A B H</h1>
      </div>

      <div className="quotebox box2">
        <h1>" Bringing ideas to life in <br />the language of the web. "</h1>
      </div>

      <div id="aboutme" className="box2">
        <img className="adminimg" src={profile} alt="profile" />
        <fieldset className="abouttxt">
          <legend>Sourabh</legend>
          Skilled MERN stack developer with expertise in web design and coding with JAVA and JavaScript. Dive into my projects and GitHub below to explore the seamless integration of MERN technologies, creating a digital symphony of innovation.
        </fieldset>
      </div>

      <div className="skills">
        <h1>SKILLS</h1>
        <div className="skillset">
          {['ReactJs', 'NextJs', 'HTML', 'CSS', 'JavaScript', 'Nodejs', 'MongoDB', 'ExpressJS', 'REST API', 'CURD', "Docker", 'Git', 'Hosting'].map((skill, index) => (
            <p key={index} className="skill">{skill}</p>
          ))}
        </div>
      </div>

      <div id="mywork" className="Pbox">
        <div className="worksphere">
          {Array(2).fill('W O R K S P H E R E').map((title, index) => (
            <React.Fragment key={index}>
              <h1 className={`title${index + 1}`}>{title}</h1>
              <h1 className={`title${index + 2}`}>{title}</h1>
            </React.Fragment>
          ))}
        </div>

        {/* Project Items */}
        {[
          {
            link: 'https://github.com/sourabhthakur87/G69-GymGrow',
            imgSrc: gymgrow,
            title: 'GymGrow Management System',
            description: 'GymGrow streamlines gym operations with features like attendance tracking, fees management, member management, and diet planning.'
          },
          {
            link: 'https://github.com/sourabhthakur87/Vegibles',
            imgSrc: vegible,
            title: 'Vegible',
            description: 'Vegetable E-commerce Website, It helps in handling bills, tracking shop expenses, and managing product sales efficiently, providing an all-in-one solution for better shop management.'
          },
          {
            link: 'https://github.com/sourabhthakur87/Real-Time-Chat-App',
            imgSrc: chatify,
            title: 'Chat App',
            description: 'Chat with your friends and family with ease and messages are end-to-end encrypted.'
          },
          {
            link: 'https://github.com/sourabhthakur87/Covid-19-Statistics',
            imgSrc: covid,
            title: 'CORONA INDEX',
            description: 'Stay informed with our live COVID-19 tracker for world. Crafted during the pandemic using a free API, it\'s your real-time window into the current situation.'
          }
        ].map((project, index) => (
          <div key={index} className="item">
            <a target="_blank" rel="noopener noreferrer" href={project.link}>
              <img className="Pimg" src={project.imgSrc} alt="P-img" />
            </a>
            <div className="Ptxt">
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="quotebox box2">
        <h1>" Endings are merely invitations to <br /> craft a new and exciting beginning."</h1>
      </div>

      <fieldset id="contact" className="box2 socialbox">
        <legend className="socialboxtxt">C O N T A C T</legend>
        <a target="_blank" rel="noopener noreferrer" href="mailto:thakursourabh097@gmail.com">
          <img className="social-img" src={envelope} alt="email" title='thakursourabh097@gmail.com' />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sourabhthakur87">
          <img className="social-img" src={github} alt="github" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sourabh-thakur7">
          <img className="social-img" src={linkedin} alt="linkedin" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/Resume.pdf`}>
          <img className="social-img" src={info} alt="resume" title='Resume' />
        </a>
      </fieldset>
    </div>
  );
}

export default App;
