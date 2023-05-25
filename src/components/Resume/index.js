import './index.scss';

const Resume = () => {

    return (
        <div className="container resume-page">
            <div className="content-wrapper">
                <div className="text-zone">
                    <div className="title">
                        <h1>Resume</h1>
                    </div>
                    <div className="resume">
                        <div className="section-left">
                            <div>
                                <h2>OBJECTIVE</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </div>
                            <div>
                                <h2 className="top-offset">SKILLS</h2>
                                <ul>
                                    <li>Fusce ullamcorper</li>
                                    <li>Vestibulum condimentum</li>
                                    <li>Praesent tristique</li>
                                    <li>Donec ultricies</li>
                                    <li>Integer accumsan</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="top-offset">EDUCATION</h2>
                                <div>
                                    <p className="name">School Name, Location — Degree</p>
                                    <p className="date">MONTH 20XX - MONTH 20XX</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-right">
                            <h2>EXPERIENCE</h2>
                            <div>
                                <p className="name">Company Name, Location — Job Title</p>
                                <p className="date">MONTH 20XX - PRESENT</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Aenean ac interdum nisi. Sed in consequat mi</li>
                                    <li>Sed in consequat mi, sed pulvinar lacinia felis eu finibus</li>
                                </ul>
                            </div>
                            <div className="experience">
                                <p className="name">Company Name, Location — Job Title</p>
                                <p className="date">MONTH 20XX - MONTH 20XX</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Aenean ac interdum nisi. Sed in consequat mi</li>
                                </ul>
                            </div>
                            <div className="experience">
                                <p className="name">Company Name, Location — Job Title</p>
                                <p className="date">MONTH 20XX - MONTH 20XX</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Aenean ac interdum nisi. Sed in consequat mi</li>
                                    <li>Sed pulvinar lacinia felis eu finibus</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="flat-button"><a href="/Resume.pdf" download="Resume">Download Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Resume