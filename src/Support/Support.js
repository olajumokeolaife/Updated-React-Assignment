import React from "react";
import "./Support.css";
import SupportItem from "../SupportItems/SupportItems";

// const Support= () => {
const SupportItems = [
  {
    icon: require("../images/schl.png"),
    title: "Scholarships",
    description:
      "This means that you will never have to worry about paying a penny to learn a new skill. Our partners have ensured that you are able to upskill in the comfort of your home with no cost to you.",
  },
  {
    icon: require("../images/free.png"),
    title: "Free Counselling Sessions",
    description:
      "Every student has access to a number of wellbeing and counselling sessions with our partners & frontline therapists.",
  },
  {
    icon: require("../images/hildpng.png"),
    title: "Childcare Support",
    description:
      "Every mum on our bootcamps is eligible to apply to receive up to £250 in childcare vouchers as a way of supporting you whilst learning.",
  },
  {
    icon: require("../images/4,75png.png"),
    title: "4.75 / 5 Average Reviews",
    description:
      "We are focused on ensuring every student has the best experience our bootcamps have to offer.",
  },
  {
    icon: require("../images/75png.png"),
    title: "75% Employment Rate",
    description:
      "This is from our 2020 outcomes. Our students have been able to go on to work at some awesome organisations from junior to senior levels.",
  },
  {
    icon: require("../images/560png.png"),
    title: "560 People Upskilled",
    description:
      "Since 2020, we have upskilled 560 to start a career in tech and progress into more senior roles in tech companies like Northrop Grumman, Zapp, KPMG and many more.",
  },
  {
    icon: require("../images/dedipng.png"),
    title: "Dedicated Career Support from Day One",
    description:
      "You will have Hannah, our employability and career coach here to support you from your first day. She will help you with your LinkedIn, CV and also interview coaching.",
  },
  {
    icon: require("../images/xclupng.png"),
    title: "Exclusive Access to Open Roles to All Our Hiring Partners",
    description: "Our students have access to roles at our hiring partners.",
  },
  {
    icon: require("../images/coolpng.png"),
    title: "Cool Rewards",
    description:
      "We like to reward our students during really important milestones. All our rewards come with an element of surprise.",
  },
  {
    icon: require("../images/empopng.png"),
    title: "Empowerment Evenings and Events",
    description:
      "From access to empowerment workshops and events by women and men who are leading in their careers and businesses.",
  },
  {
    icon: require("../images/7000.png"),
    title: "7000+ Community of talents",
    description:
      "This is from our 2020 outcomes. Our students have been able to go on to work at some awesome organisations from junior to senior levels.",
  },
];

const Support = () => {
  return (
    <section className="support">
      <h3>WHY NIYO BOOTCAMP</h3>
      <h2>
        Bespoke all round <span className="highlight">support!</span>
      </h2>
      <div className="support-items">
        {SupportItems.map((item, index) => (
          <SupportItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Support;
