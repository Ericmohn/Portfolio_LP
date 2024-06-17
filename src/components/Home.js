import React, { useRef } from 'react' 
import CustomHook from './CustomHook';


function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>ERIC MOHN</span>
            </div>
            <div className="des">
                {/* 30 */}
                Hello there, I'm a Software Engineer from Brazil and I'm looking for new opportunities to learn and grow.
            </div>
            
            <a href="/Eric Mohn - Resume.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>Brazilian</div>
                    <div>03/08/1996</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home