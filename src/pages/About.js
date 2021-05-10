import React from "react";

function About() {
  return (
    <div className="container">
      <div className="row bg-white border border-secondary">
        <div className="col-12 p-4">
          <div className="border-bottom border-secondary mb-3">
            <h2 className="text-info">Full-Stack Web Developer</h2>
          </div>
          <section className="">
            <img
              className="rounded w-20"
              id="bio-image"
              src="./assets/img/profile.png"
              alt="profile-pic"
            />
            <div className="p-3">
              <p>
              Hello,

              I am Patrick DeMarco. I am currently finishing up the Full Stack Web Developer course at the University of NH in June 2021. I am interested in getting a position as a Full Stack web developer. Please feel free to reach out pfdemarco@hotmail.com 603-856-6461.

              </p>
              <h3 className="text-info">My Background</h3>
              <p>
              I am an Engineer for Qorvo, with expertise in test engineering and data compilation. We use Spotfire to showcase data and characterize our components for internal and external customer use. This information helps us optimize our components for maximum RF power output and minimal DC power usage over normal and severe environmental conditions. I enjoy writing test programs that automate what a user would do to test a part and the collection of data.
              In previous roles I was a technical sales engineer for a telcom company. My responsibilities included getting products released and approved in labs of the major carriers and neutral hosts. I was responsible for making sure products could send SNMP traps to a NOC and alert the NOC of possible issues with the network. I was in charge of local and remote training sessions of the products that we were deploying on their network and new products that we were coming out with to optimize their network. I would create iBwave designs for public safety installations. Helping the customer come up with financially responsible designs to meet their needs and the requirements of the local AHJ (authorities having jurisdiction).
              I also have experience in the defense industry as a test engineer writing applications that would automate testing and data collection. This included being a ISSO Information Systems Security Officer responsible for keeping secret data and equipment sanitized for proper use. Most of the applications I wrote were in Labview or Visual Basic.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
