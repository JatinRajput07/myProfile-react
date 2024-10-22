export default function About() {
    return (
        <>
            <section className="about-me" id="about-me">
                <div className="container">
                    <div className="about-me-container">
                        <div className="about-me-title">
                            About <br /> Jatinder Kumar
                        </div>

                        <div className="about-me-flex-container">
                            <div className="about-me-image">
                                <div className="back-div"></div>
                                <div className="black-image"><img src="/images/WhatsApp Image 2024-10-06 at 3.14.50 PM.jpeg" alt="black" /></div>
                                {/* <!-- <div className="main-image"><img src="./assests/img/WhatsApp Image 2024-10-06 at 3.14.50 PM.jpeg" alt="smit"></div> --> */}
                            </div>
                            <div className="about-me-content">
                                <div className="text">
                                    Jatinder Kumar is a passionate Full-stack Developer, skilled in both backend and frontend development.
                                    <br /><br />
                                    He is someone who can design and create simple, beautiful, and easy-to-understand solutions, taking pride in the presentation and quality of his work.
                                </div>
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <a href="mailto:kumarj597@gmail.com"> Email: kumarj597@gmail.com</a>
                                    </div>
                                    <div className="contact-item">
                                        <i className="fas fa-phone"></i>
                                        <a href="tel:+917837958117"> Phone: 7837958117</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- <div className="mail-button mail-button2">
                                <a href="mailto:prajapatismit2906@gmail.com"><img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg" alt="mail"></a>
                            </div> --> */}

                    </div>

                </div>
            </section>

        </>
    )
}