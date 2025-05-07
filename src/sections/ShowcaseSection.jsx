import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity: 0
            }, 
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                }
            }
        
        )
    });

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                }, 
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                }
            
            )
        });
    }, []);
    
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde"/>
                    </div>
                    <div className="text-content">
                        <h2>On-Demand Rides Made Simple with a Powerful, USer-Friendly App called Ryde</h2>
                        <p>An App built with React ....etc...</p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt="Library Management platform"/>
                        </div>
                        <div className='text-content'>
                            <h2>Library Management Platform</h2>
                            <p>A platform that allows users to manage their library...</p>
                        </div>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/project3.png" alt="YC Directory"/>
                        </div>
                        <div className='text-content'>
                            <h2>YC Directory</h2>
                            <p>A platform that allows users to manage their library...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection