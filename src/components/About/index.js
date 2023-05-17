import './index.scss';
import Photo from '../../assets/images/woman-unsplash.jpg';

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <div className="title">
                    <h1>About me</h1>
                </div>
                <div>
                    <img src={Photo} className="about-photo" alt="Portraite" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt vel maxime minus, dicta
                        consequuntur laudantium explicabo in eos laborum tempore quisquam dolorem perspiciatis vero
                        maiores
                        officia quidem ipsa ullam. Perferendis?
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet blanditiis
                        perferendis
                        dolorum quos sapiente non, eius ipsa dicta asperiores culpa voluptatibus cupiditate. Itaque
                        fugit ad
                        quaerat ullam, quas sed!
                        <br /><br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolorum quas rerum, expedita
                        laboriosam hic atque, qui doloremque libero eius vero praesentium non delectus consequuntur
                        magni
                        accusantium dignissimos sapiente culpa.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About