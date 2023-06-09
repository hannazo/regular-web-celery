import './index.scss';
import project1 from '../../assets/images/project-1.png';
import project2 from '../../assets/images/project-2.png';
import project3 from '../../assets/images/project-3.png';
import project4 from '../../assets/images/project-4.png';
import project5 from '../../assets/images/project-5.png';
import project6 from '../../assets/images/project-6.png';

const Portfolio = () => {

    const projects = [
        {title: "Happily Ever Prints", image: project6, link: "https://radiant-island-05643.herokuapp.com/"},
        {title: "Book Search Engine", image: project1, link: "https://vast-tundra-70816.herokuapp.com/"},
        {title: "Feed The Foodie", image: project2, link: "https://sarasg89.github.io/feed-the-foodie/"},
        {title: "Tech Blog", image: project3, link: "https://dry-journey-24079.herokuapp.com/"},
        {title: "Weather Dashboard", image: project4, link: "https://hannazo.github.io/weather-or-not/"},
        {title: "Work Day Scheduler", image: project5, link: "https://hannazo.github.io/stay-busy/"}
    ];

    return (
        <div className="container portfolio-page">
            <div className="content-wrapper">
                <div className="text-zone">
                    <div className="title">
                        <h1>Portfolio</h1>
                    </div>
                    <div className="projects-grid">
                    {projects.map((project, index) => (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" key={index}>
                                <img src={project.image} alt={project.title} />
                                <h2>{project.title}</h2>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Portfolio