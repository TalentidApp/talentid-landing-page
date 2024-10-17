import React from "react";
import Card from "./card";

const CardContainer = () => {

  const containerData = [
    {

      heading:"Hire 3x faster",
      para:"Streamline your hiring process in just 2 clicks! Automatically create a pipeline to screen, assess, and select candidates through practical skills evaluations. Efficiently manage high volumes and speed up your hiring process by 3x, ensuring you find the best talent faster and more effectively."
    },
    {

      heading:"Eliminate Dropouts",
      para:"Keep candidates engaged and reduce the risk of dropouts with our proactive communication tools. Automated reminders, personalized follow-ups, and timely updates ensure candidates remain committed and informed at every stage of the hiring process. Say goodbye to lost opportunities and missed hires."

    },
    {

      heading:"Offer Intelligence",
      para:"Make informed decisions with our offer intelligence feature. Analyze historical data and current trends to craft compelling offers that attract top talent while optimizing your budget. Gain insights into offer acceptance rates and market trends to enhance your hiring strategy and secure the best candidates."
    }

  ]
  return (
    <div className="bg-gray-100 px-4 py-8 sm:py-16">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-10">
        {

          containerData.map((data,index)=>{

            return(
              
              <Card key={index} heading={data.heading} text={data.para}/>
            )

          })
        }
      </div>
    </div>
  );
};

export default CardContainer;
