import Acropolis from "../assets/images/acropolis.png";
import JCS from "../assets/images/jcs.png";
import Kinnami from "../assets/images/kinnami.png";
import Solstice from "../assets/images/solstice.png";

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
    about:
      "Acropolis has been helping global companies to re-imaging their business by building impactful innovative through our problem solving skills. Acropolis helps organization to untangle the complex issue that emerge during their business. Throughout many years Acropolis have been able to produce best award winning IT products and services in multiple verticals which help to grow business and help them to obtain higher presence. Our team work across the globe, round the clock. Acropolis are steadfast company with strong and result oriented delivery model focused on the success of project. Acropolis respond to transformation and competitive world that enable to achieve flexible and next generation global delivery model.",
    responsibilities: [
      "•	Improved client relationships and satisfaction by establishing efficient communication and feedback channels and streamlined projects and timelines to accelerate product development and testing resulting in 20% revenue increase",
      "•	Increased team size from 3 employees to 12 as Acropolisll as team productivity by 15% through resource reallocation, one-on-one mentoring, and feedback sessions",
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
    about:
      "Juneja Software Consultants is a software development company that thrives on providing innovative development, design, and strategy to make your idea a reality. Our team is passionate about creating and implementing technical solutions that enable companies to be successful. We believe good development is interactive, flexible, and highly personalized—that’s why our team works in an agile environment, with clearly defined checkpoints and frequent iterations to provide feedback and added value along the way.",
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
    about:
      "Kinnami provides a resilient data fabric simplifying data availability, protection, and security for complex distributed networks essential to making our connected future possible and an autonomous future a reality. Our easy-to-manage enterprise-class software enables a unified data environment for trust, transparency and newfound collaboration—from Edge devices to Cloud. Customers achieve the irrefutable data integrity essential to distributed environments—including unsecured or free-standing networks and autonomous operations.Kinnami was founded in 2015 by a team of data management and security experts, and has offices in Boston, Washington, and Austin, TX.",
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
    about:
      "Operator of a digital solar energy management platform designed to make local, renewable energy accessible to every American through community-shared solar power. The company's platform helps users to subscribe to a shared solar farm, accelerating the deployment of community solar projects by helping those who rent their homes or possess a non-optimal roof to have access to the solar market, enabling households to save money on their utility bill without requiring a rooftop or any upfront costs.",
    responsibilities: [
      "•	Simplified customers’ energy bill payment and usage records by building a digital platform for customer enrolment, usage and saving graphs, and billing leading to enhanced user experience and engagement",
      "•	    Reduced lead time of new features by 20% by defining product scope, building roadmap, and mapping deliverables",
    ],
  },
];
