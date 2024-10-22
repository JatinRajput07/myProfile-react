
export default function Home() {
    return (
        <>
            <section className="hero_section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="welcome_text col-md-7 py-5 text-white">
                            <h1>Welcome.</h1>
                            <p>My name is Jatinder Kumar, a developer from India. I work on both backend and frontend projects, focusing on building seamless and efficient applications. My experience ranges from full-stack development to creating intuitive user interfaces that enhance user experience.</p>
                            <p>I'm passionate about using modern technologies to solve real-world problems. With expertise in various frameworks, I deliver high-quality, functional, and visually appealing solutions, ensuring the best user experience in every project.</p>
                        </div>

                        <div className="col-5 hero_img_container">
                            <div className="background-blur"></div>
                            <img className="hero_img w-100" src="/images/boywork-removebg-preview.png" alt="Developer Jatinder Kumar" />
                        </div>
                    </div>
                    <div className="box-1">
                        <a href="#services" className="btn btn-one">
                            <span>Check More Details.</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="max-width">
                    <h2 className="title">My services</h2>
                    <div className="serv-content">
                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <span id="first"> </span>
                        <div className="content">
                            <h2>Designer</h2>
                            <p>I am a Fresher web designer. I have make different design with different ideas. I today's rat race new fresher have more mind blowing ideas with more expoloring ideas.</p>
                        </div>
                    </div>
                    <div className="box">
                        <span id="second"></span>
                        <div className="content">
                            <h2>Development</h2>
                            <p>In this digital world. I help people in build there business and brand digitally which helps in the many thing like:Brand building, more seling etc.</p>
                        </div>
                    </div>
                    <div className="box">
                        <span id="sixth"></span>
                        <div className="content">
                            <h2>App Development</h2>
                            <p>Apps helps to those people who are not mostly friendly towards the website.Apps helps people in user interface which make them easier.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
