import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const data = {
  title: 'Thomas Vo',
  subtitle: 'Mobile Engineering @ OpenSpace',
  profilePhoto: '/resume/assets/profile-photo.png',
  sections: {
    contact: {
      content: [
        {
          code: 'phone',
          icon: faPhone,
          href: content => `tel:${content}`,
          content: (query) => query.phone,
          display: (val) => val?.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
        },
        {
          code: 'email',
          icon: faEnvelope,
          href: content => `mailto:${content}`,
          content: (query) => query.email,
        },
        {
          code: 'location',
          icon: faLocationDot,
          content: () => 'San Francisco Bay Area',
        },
        {
          code: 'linkedin',
          icon: faLinkedin,
          href: content => `https://linkedin.com/in/${content}`,
          content: () => `thomasttvo`,
        },
      ],
    },
    summary: {
      title: 'Summary',
      content: () => {
        const earliest = new Date('Jul 2012')
        const years = Math.floor((Date.now() - earliest) / (365.25 * 24 * 60 * 60 * 1000))
        return `Experienced engineer with ${years}+ years in building impactful products and leading engineering efforts. Thomas co-founded a startup that grew to over 1M users and has diverse experience with companies across sizes and industries. He values not just clean, scalable code, but code that provides real value to users. Culture-wise, Thomas prioritizes fostering a well-balanced, collaborative work environment that supports psychological safety, growth, and user-centric innovation.`
      },
    },

    skills: {
      title: 'Skills',
      groups: [
        {
          label: 'Primary',
          items: ['React Native', 'React Web', 'TypeScript', 'Redux', 'GraphQL', 'MongoDB', 'NodeJS', 'Software Architecture', 'OOD/OOP', 'SOLID', 'Design Patterns'],
        },
        {
          label: 'Other',
          items: ['Kotlin', 'Objective-C', 'Jest', 'Amplitude', 'Metabase', 'Sketch', 'Leadership', 'UI/UX Design', 'Data Analytics', 'Lean Startup'],
        },
      ],
    },

    experience: {
      title: 'Experience',
      content: [
        {
          title: 'Senior Software Engineer II',
          company: 'OpenSpace',
          logo: '/resume/assets/logos/openspace.png',
          link: 'https://www.linkedin.com/company/18223755/',
          start: 'Jun 2024',
          end: null,
          location: 'Remote · San Francisco, CA',
          skills: [
            ['React Native', 'TypeScript', 'Kotlin', 'Objective-C', 'Amplitude', 'Metabase'],
          ],
          description: `- Spearhead agentic coding transformation, built several coding automation solutions, notably an MCP server for a full mobile visual development workflow.
- Led and delivered a pivotal, category-defining initiative for the company with 3 sub-projects running simultaneously.
- Own the core capture features generating terabytes of 4K videos every month.
- Work directly with the data science team and own several data charts in Amplitude and Metabase that help assess product health.
- Work directly with camera vendors and their engineering teams to ensure seamless camera interactions. Set up the transition of our communication from email to Lark to improve efficiency.
- Mentor and distribute knowledge of the capture pipeline to the rest of the team and the company.
- Collaborate with customer support on troubleshooting best practices and documentation, improving turnaround time for support and decreasing escalation requests.
- Involved in development of cutting-edge proprietary AI features.
- Support other team members in implementing best practices and delivering simplified code structures.
- Continuously monitor for UX issues and collaborate with designers to resolve those issues.`,
        },
        {
          title: 'Senior Software Engineer',
          company: 'OpenSpace',
          logo: '/resume/assets/logos/openspace.png',
          link: 'https://www.linkedin.com/company/18223755/',
          start: 'Sep 2021',
          end: 'Jun 2024',
          location: 'Remote · San Francisco, CA',
          skills: [
            ['React Native', 'Redux Toolkit', 'TypeScript', 'Jest', 'Kotlin', 'Objective-C', 'React Native Testing Library'],
          ],
          description: `As one of only two engineers responsible for the mobile app that powers the 3D capturing process of an industry-leading reality capture company:
- Developed a background upload capability using Kotlin and Objective-C, improving user experience by allowing them to continue using the app while large files were being processed.
- Resolved technical problems related to predominantly offline usage user behavior and large file processing.
- Worked with a heavily event-oriented system that utilizes "redux-observables".
- Authored the "@openspacelabs/react-native-zoomable-view" library, which is the only React Native library on the market that allows stable zooming and pinching of images with the correct zoom center.
- Maintained and built upon the Jest test suite that primarily uses react-native-testing-library.
- Developed additional features, improved legacy code, and gained a deep understanding of the app's architecture by working in all areas of the codebase.`,
        },
        {
          title: 'Engineering Manager / Lead Engineer',
          company: 'Dormzi (now Audo)',
          logo: '/resume/assets/logos/audo.png',
          link: 'https://www.linkedin.com/company/11714116/',
          start: 'Jun 2019',
          end: 'Jul 2021',
          location: 'United States',
          skills: [
            ['React Native', 'React Web', 'MongoDB', 'XState', 'Apollo GraphQL', 'Firebase', 'Firestore', 'Jest', 'Enzyme', 'Testing Library'],
          ],
          description: `Connected via Toptal
- Led a team of five engineers (including two QA engineers) distributed across the world, including three Toptal engineers. I interviewed and hired the other two outside of Toptal.
- Took over a codebase with high technical debt from an outsourced party and rebuilt the team from the ground up, putting agile practices and lean software development culture in place. Worked with QA engineers to stabilize the product, resolving numerous technical issues and implementing new features.
- Rebuilt the infrastructure of the React Native app, cleaning up thousands of lines of repetitive code while establishing a strong foundation for future development. Orchestrated the rest of the team to build new features on top of this infrastructure.
- Handled the migration of server-side architecture from Express, Firebase Functions, and Firestore to Apollo, Heroku, and MongoDB Atlas, resulting in better extensibility, security, and simplified logic.
- Planned and held regular product meetings to ensure effective collaboration among product, design, and development teams. This facilitated maximum product impact and minimum development effort while promoting high ownership of various product parts among team members.
- Built from scratch a form manager library (using XState) that generates a form based on a simple JSON object and abstracts out all complex logic like state management, validation, formatting, submitting, loading animation, and more.
- Developed numerous features for both React Web and React Native, and wrote unit tests using Jest, Testing Library, and Enzyme.
- Optimized individual end-to-end test cases (built with WebdriverIO) and built a system leveraging AWS Device Farm to split end-to-end tests into 50 instances, cutting down test time from 40 minutes to 7 minutes.`,
        },
        {
          title: 'Co-Founder & CTO',
          company: 'Ohana',
          logo: '/resume/assets/logos/ohana.png',
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
- Migrated all of the AngularJS components from the web app to React Native while rewriting ZERO lines of controller code.
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
          logo: '/resume/assets/logos/kodeq.png',
          link: 'https://www.linkedin.com/company/3785823/',
          start: 'Sep 2014',
          end: 'Dec 2016',
          location: 'Vietnam & Atlanta, GA',
          description: `- Built a software engineer team in Ho Chi Minh city as augmented staff members for the AngularJS team at Weather.com (based in Atlanta, GA).
- Facilitated remote collaboration between dev teams distributed on the two opposite sides of the globe.
- Participated in the sales, management, and operations—growing the company to 15 engineers.`,
        },
        {
          title: 'Software Engineer V',
          company: 'ADP',
          logo: '/resume/assets/logos/adp.png',
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
          logo: '/resume/assets/logos/weathercom.png',
          link: 'https://www.linkedin.com/company/the-weather-company-ibm-business',
          start: 'Aug 2013',
          end: 'Nov 2014',
          location: 'Atlanta, GA',
          skills: [['AngularJS', 'Sass', 'Facebook API']],
          description: `- Joined the core team that established new programming standards for the front end of a newly built content management system on Weather.com.
- Designed and implemented foundational Angular services and directives that were later used by other developers to build testable application modules.
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
          logo: '/resume/assets/logos/cafepress.svg',
          link: 'https://www.linkedin.com/company/cafepress-inc-',
          start: 'Apr 2013',
          end: 'Aug 2013',
          location: 'Atlanta, GA',
          skills: [['BackboneJS', 'HTML5 Canvas', 'FabricJS']],
          description: `Worked under the EZPrints division. Participated in the development of a web app that helps users design merchandise prints. The app was used by major clients like www.targetphoto.com and www.disneyphotopass.com.

- Participated in the process of upgrading the formerly Flash application to a HTML5/Javascript Application based on the BackBoneJs framework that offers compatibility with present and future browser technology.
- Worked with HTML5 Canvas and FabricJs to create a simple but interactive canvas that allows customers to customize printable products.
- Created a mini framework for a javascript application that can be embedded on any site.`,
        },
        {
          title: 'Javascript Application Developer',
          company: 'Tentail',
          logo: '/resume/assets/logos/tentail.png',
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
          logo: '/resume/assets/logos/expandlab.png',
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
          description: `WingStats is a web application that bridges the gap between pilots (job applicants) and airlines (job recruiters). It provides tools that are tailored for job application management in the aviation industry.

- Successfully worked under the agile development principle.
- Built the whole system from the ground up: Database Design, Back-end and Front-end Architectural Design.
- Moved the original application from BackPress to Yii Framework (www.yiiframework.com) for better component organization and putting more focus into solid architecture and security.

In 2013:

- On the server side: Customized Yii Framework to add support for enterprise development: Dependency Injection, Aspect Oriented Programming, Two Step View Layout, Service Layer (Transaction Script Implementation), and JSON Web Service inspired by the Patterns of Service Oriented Web Application by Martin Fowler.
- On the client side: Used AngularJs and RequireJS to create a fully enterprise ready javascript application that transcends what's provided by jQuery.`,
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
      ],
    },
  },
}
