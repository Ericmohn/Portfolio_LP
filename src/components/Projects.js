import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Calculator',
    des: 'A Calculator made with React.JS',
    mission: <a href='https://github.com/Ericmohn/Calculadora'>Github</a>,
    language: 'HTML5, CSS3, React JS',
    images: '/Calculadora.png'
  },
  {
    name: 'Bootstrap LandingPage',
    des: 'A simple landing page made with only HTML, CSS and Bootstrap;',
    mission: <a href='https://github.com/Ericmohn/BootstrapLandingPage'>Github</a>,
    language: 'HTML5, CSS3, Bootstrap',
    images: '/BootstrapLandingPage.png'
  },
  {
    name: 'Complete 1v1 Chess Game',
    des: 'A chess game made with C# with all of the rules implemented.',
    mission: <a href='https://github.com/Ericmohn/C-Chess'>Github</a>,
    language: 'C#, .NET',
    images: '/chess.png'
  },
  {
    name: 'Flappy Bird',
    des: 'A simple Flappy Bird game made for a web environment.',
    mission: <a href='https://github.com/Ericmohn/FlappyBird'>Github</a>,
    language: 'HTML5, CSS3, JS',
    images: '/FlappyBird.png'
  },
  {
    name: 'Pong',
    des: 'A simple Pong game made for a web environment.',
    mission: <a href='https://github.com/Ericmohn/Pong'>Github</a>,
    language: 'HTML5, CSS3, JS',
    images: '/pong.png'
  },
  {
    name: 'TicTacToe',
    des: 'A simple TicTacToe game made for a web environment.',
    mission: <a href='https://github.com/Ericmohn/TicTacToe'>Github</a>,
    language: 'HTML5, CSS3, JS',
    images: '/tictactoe.png'
  },
  {
    name: 'Online Store',
    des: 'An online store to buy games.',
    mission: <a href='https://github.com/Ericmohn/ecommerce-games'>Github</a>,
    language: 'HTML5, CSS3, ReactJS',
    images: '/LojaGames.png'
  },
  {
    name: 'To Do List',
    des: 'A simple mobile application made with react native.',
    mission: <a href='https://github.com/Ericmohn/ToDoList'>Github</a>,
    language: 'HTML5, CSS3, ReactNative',
    images: '/ToDoList.png'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        These are my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        These are a few of the projects that I've made so far.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Link</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects