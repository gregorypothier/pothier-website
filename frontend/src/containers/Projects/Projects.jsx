import React, { Component } from "react";
import Cards from "../Cards/Cards";
class Projects extends Component {
  /* Project page which will be populated by Cards */

  render() {
    return (
      <div>
        <div className="ui four column grid padded centered stretched stackable">
          <div className="ui sixteen wide mobile eight wide tablet four wide computer column centered">
            <Cards
              color="orange"
              label="News Web App"
              image={["news1.jpg"]}
              meta="2019"
              description="A full stack web app built with a React frontend and Python Flask
                  backend."
              buttons={["python", "react", "docker"]}
              githublink="true"
              modaldescription={[
                <strong>Overview:</strong>,
                "An open sourced front page of the internet webpage that provides a centralized location of all of the news sources and information which I find interesting. There are multiple newspaper segments which are organized by topic. There is also a custom Weather component which uses openweathermap.org's api to pull current and forecast conditions. A Trends component display the latest Google search trends in the US. In the future I would like to pull some financial information into another component.",
                <br />,
                <strong>Tech Stack:</strong>,
                "The news app is a full stack application with the front end running on Node/react and the backend is a flask server serving a REST API. The app runs on docker and is deployed using ci/cd in AWS",
                <br />,
                <a
                  href="https://pothier.io/news"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>
                    <b>See it LIVE here.</b>
                  </u>
                </a>
              ]}
            />
          </div>

          <div className="ui sixteen wide mobile eight wide tablet four wide computer column centered">
            <Cards
              color="red"
              label="Security Analytics"
              image={["risk_small.jpg", "vulns.jpg"]}
              meta="2017"
              description="A full stack Python and Splunk app that analyzes risk
              and automates IR."
              buttons={["python", "splunk"]}
              githublink="true"
              modaldescription={[
                <strong>Overview:</strong>,
                "The security data analystics and risk correlation app is a full stack enterprise security solution that I developed during my time with Tanium. I also built a method to track ",
                <a
                  href="https://www.tanium.com/blog/track-mean-time-patch-4-part-blog-series/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>
                    <b>mean time to patch.</b>
                  </u>
                </a>,

                <br />,
                "The app provides a scoring system for users and their machines based upon:",
                <strong>Risk Scoring:</strong>,
                "* 20% - Tanium Comply Score",
                "* 20% - Critical OS Patches",
                "* 10% - 3rd Party App Versions",
                "* 10% - Anti-Virus",
                "* 10% - Tanium SOE/Health Check",
                "* 10% - User Behavior Analytics",
                "* 10% - Operating System Score",
                "* 5%   - Encryption",
                "* 5%   - Malicious Analytics",
                <br />,
                "The app provides the following deliverables:",
                <strong>Actions:</strong>,
                "* Automated Responses:",
                "    ** Score > 80 = send alert",
                "    ** Score > 50 + other alert = IR package deployed",
                "    ** Score > 90 + other alert = Quarantine action",
                "* Measure risk across multiple planes.",
                "* Motivate users and system owners to reduce risk.",
                "* Track improvement over time.",
                "* Provide a single score for every user and every device.",
                "* Enable senior management a conduit to support risk program.",
                "* Inspire competition through gamification.",
                <br />,
                <strong>Tech Stack:</strong>,
                "The packages and sensors use python, bash, and vbscript, Tanium is used for deployment and python is used for automation. Dashboarding is provided via splunk."
              ]}
            />
          </div>

          <div className="ui sixteen wide mobile eight wide tablet four wide computer column centered">
            <Cards
              color="black"
              label="Deception Toolkit"
              image={["deception.jpg"]}
              meta="2016"
              description="Deception Toolkit leveraging python, Tanium and Splunk."
              buttons={["python", "splunk"]}
              githublink="true"
              livedemolink="true"
              modaldescription={[
                <strong>Overview:</strong>,
                "A closed source project I developed while working for Tanium. The Deception Toolkit can deploy cross platform deceptive tokens anywhere across the enterprise in seconds to detect malicious activity, track, remove, and modify all of them in seconds.",
                <br />,
                "The Deception content is currently comprised of:",
                <strong>Packages:</strong>,
                "* Deception - Docx Token (Linux/OSX) 1 Deploy",
                "* Deception - Docx Token (Linux/OSX) 2 Cleanup",
                "* Deception - Docx Token (Windows) 1 Deploy",
                "* Deception - Docx Token (Windows) 2 Cleanup",
                "* Deception - Credential Memory Injection (Windows) 1 Deploy",
                "* Deception - Credential Memory Injection (Windows) 2 CleanUp",
                "* Deception - MiTM LLMNR/NetBIOS (Windows) 1 Deploy",
                <strong>Sensors:</strong>,
                "* Deception Token Files",
                "* Deception Memory Injected Credentials",
                <br />,
                <strong>Tech Stack:</strong>,
                "The packages and sensors use python, Tanium is used for deployment and python and splunk are used for automation and correlation actions."
              ]}
            />
          </div>

          <div className="ui sixteen wide mobile eight wide tablet four wide computer column centered">
            <Cards
              color="purple"
              label="AIO Ghost Hunter App"
              image={["ghost1.jpg", "ghost2.jpg", "ghost3.jpg"]}
              meta="2012"
              description="A paid Android app ($.99) with over 30,000
              installs and review of 4.4/5 stars."
              buttons={["android", "java", "ps"]}
              githublink="true"
              modaldescription={[
                <strong>Overview:</strong>,
                "A full suite of ghost detection tools in one app including an EMF detector, EVP recorder, paranormal scanner, ouija board, local haunts map, and ghost hunting directions.",
                <br />,
                <strong>Tech Stack:</strong>,
                "Coded in Java, graphics created in Photoshop and fireworks."
              ]}
            />
          </div>

          <div className="ui sixteen wide mobile eight wide tablet four wide computer column centered">
            <Cards
              color="black"
              label="ReferrAll Website"
              image={["referall.jpg"]}
              meta="2012"
              description="A website for people to connect and provide referrals."
              buttons={["php", "sql", "ps"]}
              githublink="true"
              modaldescription={[
                <strong>Overview:</strong>,
                "Conceptualized, designed, and developed this website in 2012 to bring together people who are looking for, and those offering, referrals.",
                <br />,
                <strong>Tech Stack:</strong>,
                "Referall.org was categorically indexed with usefull features including user maps powered by google, secure account creation and management, and social media integration. Coded primarily in HTML, CSS, JavaScript, and SQL."
              ]}
            />
          </div>

          <div className="ui sixteen wide mobile eight wide tablet four wide computer column centered">
            <Cards
              color="blue"
              label="Navy App"
              image={["navyapp.jpg", "navyapp2.jpg"]}
              meta="2011"
              description="An Android app with over 60,000 installs and review of 4.9/5 stars."
              buttons={["java", "ps"]}
              githublink="true"
              modaldescription={[
                <strong>Overview:</strong>,
                "A mobile app that I developed in supporting the US Navy and those interested in future careers with the Navy. Features include bootcamp, creeds, aircraft, ranks, vessels, music, history, and navspeak.",
                <br />,
                <strong>Tech Stack:</strong>,
                "Coded in Java, graphics created in Photoshop and fireworks."
              ]}
            />
          </div>

          <div className="ui sixteen wide mobile eight wide tablet four wide computer column centered">
            <Cards
              color="green"
              label="Army App"
              image={["army1.jpg", "army2.jpg"]}
              meta="2010"
              description="An Android app with over 60,000 installs and review of 4.7/5 stars."
              buttons={["java", "ps"]}
              githublink="true"
              modaldescription={[
                <strong>Overview:</strong>,
                "A mobile app that I developed in supporting the US Army and those interested in future careers with the Army. Features include bootcamp, creeds, aircraft, ranks, vessels, music, history, and navspeak.",
                <br />,
                <strong>Tech Stack:</strong>,
                "Coded in Java, graphics created in Photoshop and fireworks."
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
