import {About, Home, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Geronimo",
  lastName: "Restrepo",
  name: `Geronimo Restrepo`,
  role: "Aspiring Cybersecurity & AI Professional",
  //avatar: "/images/avatar.jpg",
  email: "geronimocol@gmail.com",
  location: "US/Eastern", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
  avatar: ""
};



const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/grestrepo777",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/geronimo-restrepo-7154601aa/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Exploring cybersecurity, IT, and real-world projects</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
        Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    <br />
      I’m Geronimo, diving into AI, cybersecurity, and cutting-edge tech.
      I build hands-on projects that combine intelligent systems and 
      security to solve real-world challenges.
      <br /> 
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an aspiring Maryland-based cybersecurity professional with 
        a passion for AI and innovative technologies. I create hands-on 
        projects that include security and intelligent systems, tackling 
        real-world challenges and exploring new ways technology can
        make an impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Sam's Club",
        timeframe: "2019 - Present",
        role: "Customer Service Representative",
        achievements: [
          <>
            Ensured consistent adherence to company policies and safety protocols, contributing to a compliant and organized workspace. 
          </>,
          <>
            Provided frontline support for customers, troubleshooting issues and ensuring satisfaction, which honed skills in user interaction and problem resolution. 
          </>,
          <>
            Resolved customer issues promptly and efficiently, maintaining a positive and professional demeanor, which contributed to a high level of customer satisfaction.           
          </>,
        ],
        images: [],
      },

    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Maryland, Baltimore County",
        description: <>Bachelor of Science in Information Systems</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Security Operations",
        description: (
          <>Hands-on experience with SIEM tools (Splunk), SOAR platforms, and EDR solutions through simulated environments. Familiar with incident response workflows, alert triage, and IOC analysis. Knowledge of threat detection using MITRE ATT&CK, Cyber Kill Chain, and Diamond model.</>
        ),
        tags: [
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Network Analysis and Troubleshooting",
        description: (
          <>Proficient in Wireshark for packet capture, network traffic analysis, and troubleshooting network performance issues; experienced in identifying anomalies, inspecting network protocols (TCP/IP, DNS, HTTP/S) and analyzing packet flows for security monitoring. </>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  
      {
        title: "Cybersecurity Frameworks and Skills",
        description: (
          <>Familiar with core cybersecurity concepts (e.g., risk management, threat analysis, SIEM tools, networking and protocols). Knowledge of Indicators of Compromise (IOCs) and Tactics, Techniques, and Procedures (TTPs). Familiar with implementing Security Protocols and performing risk assessments. </>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  
      {
        title: "Compliance and Regulatory Frameworks",
        description: (
          <>Knowledge of GDPR, HIPAA, PCI-DSS, and SOX standards, including data protection principles, security best practices, and compliance requirements for safeguarding sensitive information. </>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  {
        title: "Programming Languages",
        description: (
          <>Python (security scripting, log parsing, socket programming), SQL</>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  {
        title: "Network Security Technology",
        description: (
          <>Knowledgeable of firewalls, IDS/IPS, VLANs, and routing to ensure security of the network.</>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  {
        title: "Network Configuration",
        description: (
          <>Experienced in configuring networks, setting up Cisco routers and switches, implementing OSPF, DHCP, and NAT. Familiar with network protocols (TCP/IP, DNS, HTTP/S) and firewall configurations.</>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  {
        title: "Operating Systems",
        description: (
          <>Windows 10/11, Linux. </>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  {
        title: "Technical Troubleshooting",
        description: (
          <>Diagnosing and resolving system issues, network troubleshooting. </>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};



export { person, social, home, about, work, };
