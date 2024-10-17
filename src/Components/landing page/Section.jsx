import React, { useState } from "react";
import Rectangle from "/src/Images/landing page/sliders/Rectangle.png";
import Rectangle45 from "/src/Images/landing page/sliders/Rectangle45.png";
import Rectangle81 from "/src/Images/landing page/sliders/Rectangle81.png";

const Section = () => {
  const data = [
    {
      id: 1,
      name: "Better Hiring",
      para: (
        <div>
          <ul>
            <li>
              <strong>Candidate Screening:</strong> By accessing candidate
              interview data from multiple companies, recruiters can gain
              insights into a candidate's skills, experience, and performance
              during different interview processes. This can help them make more
              informed hiring decisions.
            </li>
            <br />
            <li>
              <strong>Talent Acquisition:</strong> Recruiters can identify and
              reach out to candidates who have successfully navigated interview
              processes at other companies, potentially securing top talent for
              their own organizations.
            </li>
          </ul>
        </div>
      ),
      avatar: Rectangle45,
    },
    {
      id: 2,
      name: "Loyalty Check",
      para: (
        <div>
          <ul>
            <li>
              <strong>Employee Monitoring:</strong> Recruiters can use
              Talentid.app to monitor their current employees' interview
              activities at other companies. This information can serve as an
              indicator of potential disloyalty or flight risk, allowing
              employers to proactively address retention concerns.
            </li>
            <br />
            <li>
              <strong>Counter-offers:</strong> If an employee is actively
              interviewing elsewhere, employers can use the insights from
              Talentid.app to make informed counter-offers or implement
              retention strategies to keep valuable talent within the
              organization.
            </li>
          </ul>
        </div>
      ),
      avatar: Rectangle81,
    },
    {
      id: 3,
      name: "Retention",
      para: (
        <div>
          <ul>
            <li>
              <strong>Competitive Intelligence:</strong> By analyzing the
              interview pipelines and hiring practices of competitors, employers
              can gather insights into compensation, benefits, and work culture
              trends. This intelligence can help them refine their own retention
              strategies and remain competitive in the job market.
            </li>
            <br />
            <li>
              <strong>Employee Engagement:</strong> Employers can leverage the
              candidate data from Talentid.app to identify areas of improvement
              within their own interview processes, onboarding practices, and
              employee experience initiatives, ultimately enhancing employee
              satisfaction and retention.
            </li>
          </ul>
        </div>
      ),
      avatar: Rectangle,
    },
    {
      id: 4,
      name: "Background Verification",
      para: (
        <div>
          <ul>
            <li>
              <strong>Employment History Validation:</strong> Recruiters can use
              Talentid.app to verify a candidate's employment history and
              interview records with previous companies. This can help validate
              the accuracy of information provided by the candidate and identify
              any discrepancies or gaps in their professional background.
            </li>
            <br />
            <li>
              <strong>Performance Evaluation:</strong> By accessing a
              candidate's interview data from multiple companies, recruiters may
              gain insights into the candidate's performance during different
              stages of the interview process, such as technical assessments,
              case studies, or presentation rounds. This information can
              supplement traditional background checks and provide a more
              comprehensive evaluation of the candidate's abilities.
            </li>
          </ul>
        </div>
      ),
      avatar: Rectangle45,
    },
  ];

  const [value, setValue] = useState({
    id: 1,
    paragraph: data[0].para,
    image: data[0].avatar,
  });

  return (
    <div>
      <div className="bg-[#603998] flex justify-center">
        <div className="bg-white shadow-[0px_5px_300px_10px_#7855A7] w-[1200px] -my-16 px-10 py-16 rounded-2xl grid grid-rows-1 md:grid-cols-5">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-left row-span-1 md:col-span-1">
              By <span>UseCase</span>
            </h3>
            <div className="text-lg flex flex-wrap justify-center md:flex-col text-gray-700 gap-3 mt-2">
              {data.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    setValue({
                      id: item.id,
                      image: item.avatar,
                      paragraph: item.para,
                    })
                  }
                  className={`font-semibold cursor-pointer ${
                    item.id === value.id ? "underline" : ""
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#7250a1] rounded-3xl flex flex-col items-center md:flex-row gap-2 py-10 px-10 row-span-5 md:col-span-4 mt-2">
            <p className="text-white font-semibold flex-1">{value.paragraph}</p>
            <img src={value.image} alt="" className="w-60 h-60 mx-auto mt-4" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center max-w-6xl mx-auto md:p-16 mt-10">
        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <img
            src="https://res.cloudinary.com/dfz0wkqij/image/upload/v1719035920/gxluwxco94eftilboqqo.png"
            alt="Graphic"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h4 className="text-3xl font-bold">Make better hiring decisions</h4>
          <p className="text-justify mt-10">
            Talentid.app is a SaaS product offering a Candidate Tracking System
            (CTS) tailored for startups and enterprises. Our innovative CTS
            tackles the common challenge of candidate competition head-on, going
            beyond basic applicant tracking. With advanced features like
            candidate engagement tools, data-driven analytics for assessing
            joining probability, competitive intelligence insights, and
            streamlined recruitment workflows, you'll gain a competitive edge in
            attracting and securing top talent. Whether a rapidly growing
            startup or an established enterprise, our solution empowers you to
            effectively evaluate candidates while maintaining their interest
            throughout the process.
          </p>
        </div>
      </div>

      <div className="bg-[#603998] p-3">
        <div className="flex flex-col text-white justify-center items-center mt-2 py-8 gap-2">
          <h4 className="text-3xl font-extrabold">Ready to dive in?</h4>
          <a
            href="https://tally.so/r/n0MxMN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-[#baaad3] mt-4 py-3 px-7 text-black rounded-full font-bold text-lg md:text-xl hover:bg-[#2b1b44] hover:text-white">
              Get Started
            </button>
          </a>

          <p className="mt-3">No credit card required✌</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
