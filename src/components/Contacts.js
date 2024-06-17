import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';

function Contacts() {
const [listContacts] = useState([
  {
    title: 'Phone Number',
    value: '+55 61 99183-4216'
  },{
    title: 'Email',
    value: 'eric_mohn@hotmail.com'
  },{
    title: 'Instagram',
    value: <a href='https://www.instagram.com/ericmohn/'>@ericmohn</a>
  },{
    title: 'Github',
    value: <a href='https://github.com/Ericmohn'>Eric Mohn</a>
  },{
    title: 'Linkedin',
    value: <a href='https://www.linkedin.com/in/eric-mohn-152bab133/'>Eric Mohn</a>
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Here is how you can reach me.
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        You can also check my github for more projects!
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts