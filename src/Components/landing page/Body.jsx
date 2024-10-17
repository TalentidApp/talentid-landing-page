import React from "react";

const Body = () => {
  const data = [
    {
      id: "1",
      avatar: "https://res.cloudinary.com/dfz0wkqij/image/upload/v1719036017/x0mgvzgv0exhogrro9it.jpg",
      name: "Meraj Faheem",
      designation: "Founder Maths.ai",
      description:
        "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company. We will also facilitate the business marketing of these products with our SEO experts so facilitate the business marketing of these products.",
    },
    {
      id: "2",
      avatar: "https://res.cloudinary.com/dfz0wkqij/image/upload/v1719036017/bfgjn7srv7wr44kp6eux.jpg",
      name: "Ayyappa",
      designation: "Founder",
      description:
        "As a rapidly growing startup, we were struggling to attract and retain top talent in a highly competitive market. Talentid.app's CTS has been a game-changer for us. The platform's advanced analytics and candidate engagement tools have helped us streamline our recruitment process, providing valuable insights into candidates' aspirations and joining probabilities. We've been able to secure exceptional hires that have propelled our growth.",
    },
    {
      id: "3",
      avatar: "https://res.cloudinary.com/dfz0wkqij/image/upload/v1719036017/rpfnt97izuad8nltxbgc.jpg",
      name: "Bushra",
      designation: "Founder",
      description:
        "Competing for top tech talent in Silicon Valley is no easy feat. Talentid.app's CTS has given us a significant advantage by offering competitive intelligence insights that help us tailor our approach and value proposition. The customizable evaluation criteria have also been invaluable in ensuring we attract candidates that align with our unique company culture.",
    },
    {
      id: "4",
      avatar: "https://res.cloudinary.com/dfz0wkqij/image/upload/v1719036017/ywygbisp5fbxnr9z2vjk.jpg",
      name: "Maaz Ahmed Khan",
      designation: "Founder & Recruitment Head",
      description:
        "Talentid.app's CTS has revolutionized the way we approach recruitment. The streamlined workflows and seamless candidate experience have not only improved our efficiency but also enhanced our employer brand. Candidates consistently provide positive feedback on the recruitment process, which has undoubtedly contributed to our ability to secure top-notch hires.",
    },
    {
      id: "5",
      avatar: "https://res.cloudinary.com/dfz0wkqij/image/upload/v1719036018/Saniya_Testimonial.jpg",
      name: "Saniya",
      designation: "Founder",
      description:
        "As a rapidly expanding startup, we were facing challenges in scaling our recruitment efforts while maintaining a high level of candidate engagement. Talentid.app's CTS has been a game-changer, providing us with the tools and insights to effectively manage and communicate with a large candidate pool. The platform's analytics have been instrumental in identifying the most promising candidates and optimizing our recruitment strategies.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="flex flex-wrap max-w-5xl mx-auto px-3 mt-10">
        <div className="w-full md:w-1/2 md:pr-7 p-8">
          <h4 className="text-3xl font-extrabold">Candidate Tracking System</h4>
          <p className="text-lg mt-1">Track the interview pipeline with ease</p>
          <p className="text-justify mt-5">
            At the core of our CTS (Candidate tracking system) are innovative
            features that set us apart from traditional applicant tracking
            systems. Leverage data-driven analytics to assess a candidate's
            potential fit, career aspirations, and likelihood of accepting your
            offer. Stay ahead of the competition with competitive intelligence
            that provides insights into other job offers or companies candidates
            might be considering. Optimize and accelerate your recruitment
            workflows, from initial screening to offer negotiations, ensuring a
            seamless and efficient experience for candidates. Customize your
            evaluation criteria to prioritize the specific skills, experiences,
            and attributes that align with your organization's unique needs and
            culture. Whether you're a rapidly growing startup or an established
            enterprise, Talentid.app's CTS is your secret weapon in the battle
            for top talent, empowering you to attract, evaluate, and secure the
            game-changing professionals that will drive your organization's
            success.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="https://res.cloudinary.com/dfz0wkqij/image/upload/v1719035902/rexi2hxwjhfisnqdndne.png" alt="Graphic" />
        </div>
      </div>
      {/* testimonals */}
      <div className="bg-[#603998] overflow-hidden py-16 flex flex-col items-center">
        <div className="flex flex-col justify-center items-center ">
          <h4 className="text-white text-3xl font-extrabold text-center">
            Testimonals that illustrate
          </h4>
          <p className="text-white text-3xl font-extrabold mt-2 ">
            Our service impact
          </p>
        </div>
        {/* card */}

        <div className="mb-20 mt-5">
          <div className="flex justify-center gap-2 mt-3">
            <div className="w-full overflow-hidden inline-flex flex-nowrap">
              <ul className="flex items-center justify-center md:justify-start space-x-20 animate-infinite-scroll">
                {data.map((item, index) => (
                  <li key={index}>
                    <div className="bg-gray-300 w-[600px] h-[300px] grid grid-cols-2 rounded-2xl mt-8 overflow-hidden shadow-lg relative">
                      <div className="col-span-1">
                        <img
                          src={item.avatar}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="pt-10 px-4 col-span-1 flex flex-col justify-start">
                        <h5 className="text-xl font-bold">{item.name}</h5>
                        <p className="text-gray-500 font-semibold">
                          {item.job}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {item.designation}
                        </p>
                        <div className="border-gray-500 border-b-2 my-2 w-3/4"></div>
                        <p className="mt-5 text-xs">{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <ul
                className="flex items-center justify-center md:justify-start space-x-10 animate-infinite-scroll"
                aria-hidden="true"
              >
                {data.map((item, index) => (
                  <li key={index}>
                    <div className="bg-gray-300 w-[600px] h-[300px] grid grid-cols-2 rounded-2xl mt-8 overflow-hidden shadow-lg relative">
                      <div className="col-span-1">
                        <img
                          src={item.avatar}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="pt-10 px-4 col-span-1 flex flex-col justify-start">
                        <h5 className="text-xl font-bold">{item.name}</h5>
                        <p className="text-gray-500 font-semibold">
                          {item.job}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {item.designation}
                        </p>
                        <div className="border-gray-500 border-b-2 my-2 w-3/4"></div>
                        <p className="mt-5 text-xs">{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
