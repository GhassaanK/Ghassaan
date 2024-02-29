import React from 'react';
import one from './p1.JPG';
import two from './p2.JPG';

export const Projects = () => {
    const projects = [
        {
            "id": 1,
            "title" : "Movie Hub",
            "img" : one,
            "url" : 'https://movies422537.netlify.app'
        },
        {
            "id": 2,
            "title" : "News Monkey",
            "img" : two,
            "url" : 'https://newsmonkey422537.netlify.app'
        }
    ];

    return (
        <div className='container portfolio sections' id='portfolio'>
            <h1>Projects</h1>
            <div className="card-container port">
                {projects.map((element) => (
                    <div className="portfolioCard" key={element.id}>
                        <div>
                            <p id='clickable'>~</p>
                        </div>
                        <div>
                            <img src={element.img} alt={`Project Snippet of ${element.title}`} />
                        </div>
                        <div>
                            <h3>{element.title}</h3>
                            <a href={element.url} target='_blank' rel='noopener noreferrer'>
                                <span>
                                    <button className='btn btn-success'>Click Me</button>
                                </span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
