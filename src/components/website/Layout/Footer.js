import { Link } from 'react-router-dom';

function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="container">
                    {/* <span className="text-muted">© 2024</span>  */}
                    <div className="social_links">
                        <div className=" row justify-content-center">
                            <Link to=""><i className="fa-brands fa-github"></i></Link>
                            <Link target="_blank" to="https://www.linkedin.com/in/jatinder-kumar-98a748161/"><i className="fa-brands fa-linkedin"></i></Link>
                            <Link to=""><i className="fa-brands fa-instagram"></i></Link>
                            <Link to=""><i className="fa-brands fa-twitter"></i></Link>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )

}

export default Footer;