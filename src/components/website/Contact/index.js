
// import { useEffect, useState } from 'react';


export default function Contact() {
    return (
        <>
            <div className="_page_title text-center">
                <h1> Contact Me </h1>
            </div>

            <div className="container py-5 contact_section">
            <form className="mx-auto" style={{ 'maxWidth': '600px' }}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="first-name" className="form-label">First name</label>
                            <input type="text" name="first-name" id="first-name" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="last-name" className="form-label">Last name</label>
                            <input type="text" name="last-name" id="last-name" className="form-control" placeholder="Last name" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="phone-number" className="form-label">Phone number</label>
                            <div className="input-group">
                                <input type="tel" name="phone-number" id="phone-number" className="form-control" placeholder="Phone number" />
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea name="message" id="message" className="form-control" rows="4" placeholder="Your message"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-100">Let's talk</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
