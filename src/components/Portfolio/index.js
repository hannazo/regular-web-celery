import { Link } from 'react-router-dom';
import './index.scss';

const Portfolio = () => {
    return (
        <div className="container portfolio-page">
            <div className="text-zone">
                <div className="title">
                    <h1>Portfolio</h1>
                </div>
                <div className="flex-container">
                    <Link href="https://sarasg89.github.io/feed-the-foodie" target="_blank" rel="noreferrer" className="flex-item" id="featured">
                    <div class="label">
                            <h3>Feed The Foodie</h3>
                            <p>Recipe and restaurant suggesting app</p>
                        </div>
                    </Link>
                    <Link href="https://guarded-reaches-91931.herokuapp.com/" target="_blank" rel="noreferrer" className="flex-item" id="project-two">
                        <div class="label">
                            <h3>Share camGear</h3>
                            <p> Borrow or lend camera gear to others</p>
                        </div>
                    </Link>
                    <Link href="#" target="_blank" rel="noreferrer" className="flex-item" id="project-three">
                        <div class="label">
                            <h3>Project 3</h3>
                            <p>Short description</p>
                        </div>
                    </Link>
                    <Link href="#" class="flex-item" id="project-four">
                        <div class="label">
                            <h3>Project 4</h3>
                            <p>Short description</p>
                        </div>
                    </Link>
                    <Link href="#" class="flex-item" id="project-five">
                        <div class="label">
                            <h3>Project 5</h3>
                            <p>Short description</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portfolio