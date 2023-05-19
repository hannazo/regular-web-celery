import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <div className="page-wrapper">
                <Navbar />
                <div className='page'>
                    <span className='tags top-tags'>&lt;body&gt;</span>

                    <Outlet />

                    <span className='tags bottom-tags'>&lt;/body&gt;
                        <br />
                        <span className='bottom-tag-html'>&lt;/html&gt;</span>
                    </span>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout