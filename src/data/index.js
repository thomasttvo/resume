import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

export const data = {
  title: 'Thomas Vo',
  subtitle: 'Engineer, Entrepreneur',
  sections: {
    contact: {
      content: [
        {
          code: 'linkedin',
          icon: faLinkedin,
          href: content => `https://linkedin.com/in/${content}`,
          content: query => query.contact?.[0],
        },
        {
          code: 'email',
          icon: faEnvelope,
          href: content => `mailto:${content}`,
          content: query => query.contact?.[1],
        },
        {
          code: 'phone',
          icon: faPhoneSquareAlt,
          href: content => `tel:${content}`,
          content: query => {
            const content = query.contact?.[2]
            return content ? `+1 ${content}` : null
          },
        },
      ],
    },
    summary: {
      title: 'Summary',
      content: `Possessing both a creative and a logical mind, Thomas is passionate about building practical, well-designed, scalable, and financially sustainable products that impact millions of lives by improving their well-being.

Thomas attended Georgia Tech and dropped out after the sophomore year to join a startup and quickly became a senior engineer 2 years later. After working at major technology companies like Weather.com, CafePress, and ADP, Thomas went on to start his own startup where he built the product, raised funding, recruited the team, and grew the company to 300k users.

Having grown up in a financially-challenged family in Vietnam and, later on, experienced cultural and social challenges when his family moved to the US, Thomas is driven to transform society and create opportunities for students and professionals to develop mentally and intellectually.

As an engineer, Thomas values testable, reusable, performant, secure, and self-documented code. Most of the time, this boils down to mastery of SOLID principles and design patterns.

As a leader, Thomas values building wholesome company cultures, developing compassionate leadership, investing in communication, and prioritizing mental/physical well-being of team members
`,
      items: [
        {
          title: 'Primary Experience',
          content:
            'complex client-side Javascript systems (React, React Native, Angular), SOLID Principles, Gang of Four, OOD, OOP',
        },
        {
          title: 'Preferred Process',
          content: 'Agile with an emphasis on Agile Manifesto over Agile frameworks',
        },
        {
          title: 'Preferred Company Categories',
          content: 'B2C, media, finance, data, marketplaces',
        },
        {
          title: 'Preferred Work Environment',
          content:
            'Wholesome, mission-driven, mentorship-driven, work-life balance, promoting healthy lifestyle, social, collaborative, communicative, challenging the status quo',
        },
      ],
    },

    skills: {
      title: 'Skills',
      content: [
        [
          'Software Architecture',
          'OOD/OOP',
          'SOLID',
          'Design Patterns',
          'Leadership',
          'UI/UX Design',
          'Data Analytics',
          'Lean Startup',
        ],
        ['React Web', 'React Native', 'AngularJS', 'HTML/CSS', 'MongoDB', 'NodeJS'],
        ['Tableau', 'Sketch', 'WebStorm'],
      ],
    },

    experience: {
      title: 'Experience',
      content: [
        {
          title: 'Engineering Manager',
          company: 'Dormzi',
          link: 'https://www.linkedin.com/company/dormzi',
          start: 'Jun 2019',
          location: 'United States (Remote)',
          skills: [
            ['React Web', 'React Native', 'MongoDB', 'XState'],
            ['Apollo GraphQL', 'Firebase', 'Firestore'],
          ],
          description: `- Managed a remote team of five senior engineers (two software engineers in test) distributed across the US, Europe, and Asia.
- Interviewed and participated in the decision to hire multiple team members including the CTO and the current product manager.
- Took over a codebase with a high amount of technical debt from an outsourced party, rebuilt the team, put in place agile practices and lean software development culture, worked with a QA engineer to stabilize the product, and successfully launched v1.0.
- Rebuilt from scratch the infrastructure of the React Native app to clean up thousands of lines of repetitive code while creating a strong baseline for the future development plan and orchestrated the rest of the team to build new features on top.
- Built from scratch a form generator system that handles all form-related user experience including loading, validating, keyboard events, submission, alerts, and error handling.
- Orchestrated the migration of server-side architecture from Express, Firebase Functions, and Firestore to Apollo GraphQL, Heroku, and MongoDB Atlas to allow for a more flexible and simplified code base.
- Orchestrated the development from scratch and fine-tuning of the web platform
- Collaborated with a Toptal designer, a Toptal product manager to orchestrate the dev team to implement a total make-over of the product based on user feedback from v1.0 while creating a more consistent atomic design system.
- Planned and held product meetings to ensure three-way feedbacks among product, design, and dev for maximum product impact and minimum dev effort, while also steering each member of the dev team toward high ownership of various parts of the product.
- Maintained the development process and constantly made iterative changes to the process to tailor-fit to the team and the circumstances rather than adhering strictly to existing agile frameworks.`,
        },
        {
          title: 'Co-founder & CTO',
          company: 'Ohana',
          link: 'https://sg.linkedin.com/company/ohana-living',
          start: 'Jan 2017',
          end: 'Jul 2020',
          location: 'Vietnam & Singapore',
          skills: [
            [
              'React Web',
              'React Native',
              'AngularJS',
              'ExpressJS',
              'MongoDB',
              'Highcharts',
              'Firebase',
              'Sketch',
              'Tableau',
            ],
          ],
          description: `- Founded and managed the entire product team of the most advanced apartment marketplace in Vietnam (Airbnb-like, for residential rentals) on React/React Native. The platform reached 200,000 users within the first 2 years serving 1,500 finders every day.
- Built from scratch the entire stack of the marketplace including mobile apps on React Native, APIs on Express.js, and database with MongoDB.
- Developed from scratch the entire authentication system to replace Firebase due to its low performance in Asia. Created a concurrency system to sync users' offline data across multiple devices.
- Migrated all of the AngularJS components from the web app to React Native while rewriting ZERO lines of code.
- Used data analytics to identify and rewrite several MongoDB queries with performance issues.
- Created a roommate-matching algorithm based on 22 different lifestyle qualities. Built a dynamic form wizard where each step adapts to answers in the previous steps. The wizard engine is decoupled enough to be reused on both React Native and Angular.
- Built several admin features on React including data charts (with Highcharts), CRMs, and user management.
- Developed from scratch a simpler alternative to Redux but highly tailored to the current system.
- Developed financial models, laid out business strategy, raised funding, and participated in strategic investor meetings.
- Designed from scratch the UI/UX, and branding of the product with Sketch and, later on, led the product design team.
- Developed Tableau charts connected to MongoDB to perform data analytics resulting in 2x the GMV of the marketplace.`,
        },
        {
          title: 'Co-Founder & CEO',
          company: 'KodeQ',
          start: 'Sep 2014',
          end: 'Dec 2016',
          location: 'Vietnam & Atlanta, GA',
          description: `- Interviewed and built a Javascript team in Ho Chi Minh city as augmented staff members for the AngularJS team at Weather.com (based in Atlanta, GA).
- Facilitated remote collaboration between dev teams distributed on the two opposite sides of the globe.
- Participated in the sales, management, and operations — growing the company to 15 engineers.`,
        },
        {
          title: 'Software Engineer V',
          company: 'ADP',
          link: 'https://www.linkedin.com/company/adp',
          start: 'Dec 2014',
          end: 'Jul 2015',
          location: 'Alpharetta, GA',
          skills: [['Vanilla JS', 'HTML/CSS']],
          description: `- Joined the effort of rebuilding the entire web product by transforming a scattered system of web technologies into a centralized system with unified standards and up-to-date technology using a proprietary framework that was built in-house.
- Performed UI/UX design with Sketch.
- Built upon the original framework to provide more tools and better developer experience.`,
        },
        {
          title: 'Senior Javascript Application Developer',
          company: 'Weather.com',
          link: 'https://www.linkedin.com/company/the-weather-company-ibm-business',
          start: 'Aug 2013',
          end: 'Nov 2014',
          location: 'Atlanta, GA',
          skills: [['AngularJS', 'Sass', 'Facebook API']],
          description: `- Joined the core team that establishes new programming standards for the front end of a newly built content management system on Weather.com.
- Designed and implemented foundational Angular services and directives that are later used by other developers to build testable application modules.
- Transferred knowledge and experiences to several team members who were new to AngularJS.
- Worked with CSS and JavaScript animations to deliver highly interactive web content to visitors.
- Optimized the critical rendering path, bringing page load time from five seconds to two seconds.
- Trained and mentored new team members.
- Performed code review during development cycles to ensure code quality and standards.
- Used a Highcharts library to deliver charting solutions across the weather visualization features.`,
        },
        {
          title: 'Javascript Application Developer',
          company: 'CafePress Inc.',
          link: 'https://www.linkedin.com/company/cafepress-inc-',
          start: 'Aug 2013',
          end: 'Nov 2014',
          location: 'Atlanta, GA',
          skills: [['AngularJS', 'Sass', 'Facebook API']],
          description: `Worked under the EZPrints division. Participated in the development of a web app that helps users design merchandise prints. The app was used by major clients like www.targetphoto.com and www.disneyphotopass.com.

- Participated in the process of upgrading the formerly Flash application to a HTML5/Javascript Application based on the BackBoneJs framework that offers compatibility with present and future browser technology.
- Working with HTML5 Canvas and FabricJs to create a simple but interactive canvas that allows customers to customize printable products
- Created a mini framework for a javascript application that can be embedded on any site
`,
        },
        {
          title: 'Javascript Application Developer',
          company: 'Tentail',
          link: 'https://www.linkedin.com/company/tentail',
          start: 'Dec 2012',
          end: 'Apr 2013',
          location: 'Atlanta, GA',
          skills: [['Backbone.js']],
          description: `Used Backbone.js to build a single page web application that completely operates on javascript/html and uses ajax to communicate with web services on the main server.`,
        },
        {
          title: 'Magento Developer (Full Stack)',
          company: 'ExpandLab',
          link: 'https://www.linkedin.com/company/expandlab',
          start: 'Nov 2012',
          end: 'Apr 2013',
          location: 'Atlanta, GA',
          skills: [['Magento E-Commerce (PHP)', 'jQuery', 'PrototypeJs']],
          description: `Developed and customized Magento extensions for various ecommerce websites built upon the Magento framework.`,
        },
        {
          title: 'Web Application Developer (Full Stack)',
          company: 'WingStats',
          link: 'https://www.linkedin.com/company/wingstats',
          start: 'Jul 2012',
          end: 'Apr 2013',
          location: 'Atlanta, GA',
          skills: [['Yii Framework (PHP)', 'jQuery', 'AngularJs']],
          description: `WingStats is a web application that bridges that gap between pilots (job applicants) and airlines (job recruiters). It provides tools that are tailored for job application management in the aviation industry.

- Successfully worked under the agile development principle.
- Built the whole system from the ground up: Database Design, Back-end and Front-end Architectural Design.
- Moved the original application from BackPress to Yii Framework (www.yiiframework.com) for better component organization and putting more focus into solid architecture and security.

In 2013:

- On the server side: Customized Yii Framework to add support for enterprise development: Dependency Injection, Aspect Oriented Programming, Two Step View Layout, Service Layer (Transaction Script Implementation), and JSON Web Service inspired by the Patterns of Service Oriented Web Application by Martin Fowler.
- On the client side: Used AngularJs and RequireJS to create a fully enterprise ready javascript application that transcend what's provided by jQuery.`,
        },
      ],
    },

    education: {
      title: 'Education',
      content: [
        {
          title: 'Georgia Institute of Technology',
          location: 'Atlanta, GA',
          major: 'Computer Science',
          start: '2011',
          end: '2012',
        },
        {
          title: 'Clayton State University',
          location: 'Atlanta, GA',
          major: 'Computer Science',
          start: '2010',
          end: '2011',
        },
        {
          title: 'Le Hong Phong High School for the Gifted',
          location: 'Ho Chi Minh City, Vietnam',
          start: '2006',
          end: '2009',
        },
      ],
    },
  },
}
