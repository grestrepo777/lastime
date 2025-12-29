import {About, Home, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Geronimo",
  lastName: "Restrepo",
  name: `Geronimo Restrepo`,
  role: "Aspiring Cybersecurity Professional",
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
            Assisted an average of 50-80 customers per shift in a high-traffic environment while maintaining professionalism and accuracy.  
          </>,
          <>
            Documented and escalated 15-25 customer-reported issues per shift, ensuring accurate handoff to my supervisor for resolution. 
          </>,
          <>
            Collected relevant details, timelines, and impact information to support effective issue triage and follow-up. 
          </>,
          <>
            Communicated clearly with supervisors and team members to support efficient resolution of escalated issues.            
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
          <>Hands-on experience with SIEM tools (Splunk), EDR solutions (Windows Defender for Endpoint), IDS (Suricata), and vulnerability management tools (Nessus Essentials) for alert investigation, triage, incident response and vulnerability asseessment. Familiar with Indicators of Compromise (IOCs) Tactics, Techniques, and Procedures (TTPs), and prioritizing vulnerabilities based on CVSS and CVE analysis. Knowledge of MITRE ATT&CK Framework, Cyber Kill Chain, Diamond model, and threat intelligence analysis.</>
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
          <>Packet captures and analysis with Wireshark; detection of anomalies in TCP/IP, DNS, and HTTP/S traffic. Network traffic replay, intrusion detection testing, NAT, DHCP, OSPF, and IP routing configuration. Basic Vulnerability assessment and network hardening practices.</>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  
      {
        title: "Operating Systems and Endpoint Security",
        description: (
          <>Windows 10/11, Windows Server 2022, Linux (Ubuntu, Arch). Endpoint protection, patch management, and threat monitoring using Microsoft Defender for Endpoint. </>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  
      {
        title: "Programming Languages",
        description: (
          <>Python: Security scripting, log parsing, socket programming, automation for SOC workflows. Powershell: Windows management, EDR onboarding scripts, telemetry generation, and automation. </>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  {
        title: "Cybersecurity Tools and Platforms",
        description: (
          <>SIEM: Splunk dashboards, log analysis, custom data models. 
          EDR: Microsoft Defender for Endpoint, telemetry analysis. 
          Vulnerability Management: Nessus Essentials for scanning, CVE analysis, configuration assessment and remediation verification. 
          SOAR & Security Simulations: LetsDefend, simulated SOC environments for alert handling and incident response. 
          Ticketing & Workflow Management: Jira for incident tracking, documentation, and workflow automation. </>
        ),
        tags: [

        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },  {
        title: "Soft and Analytical Skills",
        description: (
          <>Technical troubleshooting, system/network diagnostics, and incident documentation. Problem-solving, communications, and teamwork in both customer-facing and SOC environments. Analytical thinking for identifying security gaps and proactive risk mitigation. </>
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
