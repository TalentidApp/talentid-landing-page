import Eight from "/src/Images/landing page/customersLogo/Alpha ed logo.png";
import One from "/src/Images/landing page/customersLogo/BioreformLogo.png";
import Four from "/src/Images/landing page/customersLogo/Cmo.ltd-logo.png";
import Seven from "/src/Images/landing page/customersLogo/gamology.jpg";
import Five from "/src/Images/landing page/customersLogo/Goodmind logo.webp";
import Six from "/src/Images/landing page/customersLogo/Infiniteloop Logo.png";
import Three from "/src/Images/landing page/customersLogo/NeveLogo.png";
import Two from "/src/Images/landing page/customersLogo/UnicornLogo.jpg";

const Customers = () => {
  return (
    <div className=" mb-40 mt-5">
      <div className="flex flex-col justify-center items-center py-5 ">
        <h3 className="text-3xl font-extrabold ">Our Customers</h3>
        <span className="w-[200px] border-slate-700 border-2 mt-2 rounded-full"></span>
      </div>
      <p className="text-center text-gray-500 text-xl">
        Empowering Seamless Recruitment Experiences For Our Valued Customers
      </p>
      <div className="flex justify-center gap-5 mt-3">
        <div class="w-full overflow-hidden inline-flex flex-nowrap">
          <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img src={One} alt="Bioreform" width="200px" />
            </li>
            <li>
              <img src={Two} alt="Unicorn" width="200px" />
            </li>
            <li>
              <img src={Three} alt="Neve" width="200px" />
            </li>
            <li>
              <img src={Four} alt="Cmo" width="200px" />
            </li>
            <li>
              <img src={Five} alt="Goodmind" width="200px" />
            </li>
            <li>
              <img src={Six} alt="Infiniteloop" width="200px" />
            </li>
            <li>
              <img src={Seven} alt="Torq" width="200px" />
            </li>
            <li>
              <img src={Eight} alt="Alpha" width="200px" />
            </li>
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>
              <img src={One} alt="Bioreform" width="200px" />
            </li>
            <li>
              <img src={Two} alt="Unicorn" width="200px" />
            </li>
            <li>
              <img src={Three} alt="Neve" width="200px" />
            </li>
            <li>
              <img src={Four} alt="Cmo" width="200px" />
            </li>
            <li>
              <img src={Five} alt="Goodmind" width="200px" />
            </li>
            <li>
              <img src={Six} alt="Infiniteloop" width="200px" />
            </li>
            <li>
              <img src={Seven} alt="Torq" width="200px" />
            </li>
            <li>
              <img src={Eight} alt="Alpha" width="200px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Customers;
