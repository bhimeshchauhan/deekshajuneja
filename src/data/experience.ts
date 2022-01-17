import Acropolis from "../images/acropolis.png";
import JCS from "../images/jcs.png";
import Kinnami from "../images/kinnami.png";
import Solstice from "../images/solstice.png";

export type experienceType = {
  name: string;
  position: string;
  logo: string;
  year: string;
  location: string;
  responsibilities: string[];
};

export const ExperienceItem = [
  {
    name: "Acropolis Infotech Pvt Ltd",
    position: "Project Manager",
    logo: Acropolis,
    year: "2020 - 2021",
    location: "New Delhi, India",
    responsibilities: [
      "•	Improved client relationships and satisfaction by establishing efficient communication and feedback channels and streamlined projects and timelines to accelerate product development and testing resulting in 20% revenue increase",
      "•	Increased team size from 3 employees to 12 as well as team productivity by 15% through resource reallocation, one-on-one mentoring, and feedback sessions",
      "•	Decreased project lead time by 10% by pre-evaluating company requirements and resources, deploying agile project management, and optimizing the client feedback loop",
      "•	Created and actualized multiple long-term cross functional teams’ initiatives for team development, talent acquisition and business development leading to growth of company identity and cohesive work environment",
    ],
  },
  {
    name: "Juneja Software Consultants",
    position: "Founder & CEO",
    logo: JCS,
    year: "2019 - Present",
    location: "Faridabad, India",
    responsibilities: [
      "•	Launched the company, acquired 5 clients and delivered products to industry standards and client satisfaction",
      "•	Evaluated a make-vs-buy decision for a tech company and recommended building an in-house solution instead of purchasing a CRM, leading to more customized software with long-term savings of $200k",
    ],
  },
  {
    name: "Kinnami Software Corporation",
    position: "Software Engineer",
    logo: Kinnami,
    year: "2017-2019",
    location: "Boston, USA",
    responsibilities: [
      "•	Implemented project management and team communication tools leading to fast product development in a cohesive team environment, resulting in releasing three user-friendly B2B and B2C products within two years",
      "•	    Initiated collaborations with four potential business partners, and amplified sales potential and investor interest by pitching at various events, and commencing social media marketing on Facebook and YouTube",
    ],
  },
  {
    name: "Solstice Power Technologies",
    position: "Software Engineer",
    logo: Solstice,
    year: "2016 - 2017",
    location: "Boston, USA",
    responsibilities: [
      "•	Simplified customers’ energy bill payment and usage records by building a digital platform for customer enrolment, usage and saving graphs, and billing leading to enhanced user experience and engagement",
      "•	    Reduced lead time of new features by 20% by defining product scope, building roadmap, and mapping deliverables",
    ],
  },
];
