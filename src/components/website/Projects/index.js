
// import { useEffect, useState } from 'react';


export default function Projects() {
    return (
        <>
            <div className="_page_title text-center">
                <h1> Project </h1>
            </div>

            <section className="main_section mt-5" id="main_section">
                <div className="container">
                    <table className="custom-table text-white">
                        <thead>
                            <tr>
                                <th scope="col">Year</th>
                                <th scope="col">Project</th>
                                <th scope="col">Made at</th>
                                <th scope="col">Built with</th>
                                <th scope="col">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>Pippol</td>
                                <td>Upstatement</td>
                                <td>
                                    <span className="badge">Node.js</span>
                                    <span className="badge">TypeScript</span>
                                    <span className="badge">CSS</span>
                                    <span className="badge">Angular</span>
                                    <span className="badge">SQL</span>
                                </td>
                                {/* <td><a href="https://emersoncollective.com" target="_blank">emersoncollective.com ↗</a></td> */}
                            </tr>
                            <tr>
                                <td>2023</td>
                                <td>Prosmap Garage - Next.js Site</td>
                                <td>Upstatement</td>
                                <td>
                                    <span className="badge">Node.js</span>
                                    <span className="badge">TypeScript</span>
                                    <span className="badge">Next.js</span>
                                    <span className="badge">Contentful</span>
                                    <span className="badge">Sequelize</span>
                                    <span className="badge">SQL</span>
                                </td>
                                {/* <td><a href="https://hbs.edu" target="_blank">hbs.edu ↗</a></td> */}
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}
