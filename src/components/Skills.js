import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
      icon: faHtml5
    },
    {
      name: 'CSS',
      des: 'Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.',
      icon: faCss3
    },
    {
      name: 'Javascript',
      des: 'JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS.',
      icon: faJs},
    {
      name: 'ReactJs',
      des: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
      icon: faReact
    },
    {
      name: 'And More!',
    },  
  ]);
  return (
    <section className='skills' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        These are my Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        These are some of the skills that I aquired throughout my dev path.
      </div>
      <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills