import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import conexiomPage from './assets/companyIndexPages/conexiom.webp';
import magnificodePage from './assets/companyIndexPages/magnificode.webp';
import mrkterPage from './assets/companyIndexPages/mrkter.webp';
import upworkPage from './assets/companyIndexPages/upwork.webp';
import zipsalePage from './assets/companyIndexPages/zipsale.webp';
import keelaPage from './assets/companyIndexPages/keela.webp';
import PageTransition from './components/common/PageTransition';
import { BreakpointProvider } from './hooks/useBreakpoint';
import Company from './pages/Company';
import Home from './pages/Home';
import EmotionTheme from './theme/EmotionTheme';
import GlobalStyles from './theme/GlobalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageTransition>
        <Home />
      </PageTransition>
    ),
    // !Todo create 404 page
    errorElement: <div>Error</div>,
  },
  {
    path: 'keela',
    element: (
      <PageTransition>
        <Company
          companyName="Keela"
          location="Canada"
          employees="201-500"
          remote="Remote"
          fromTo="May 2024 - Present"
          workType="Full-time"
          code="CA"
          indexPageImg={keelaPage}
          linkToWebsite="https://www.keela.co/"
          companyDescription="I spearhead the development of ARK, a unified platform integrating Aplos, Keela, and Raisely to streamline nonprofit management. My work focuses on building a scalable Design System, modernizing legacy infrastructure with micro frontends, and transitioning to modular architectures using the latest React practices. With a strong track record in leading teams and meeting deadlines, I excel at planning, scheduling, and delivering projects. I bridge technical and non-technical stakeholders by translating complex concepts into actionable insights and drive team alignment through sprint planning, backlog management, and roadmap prioritization."
          nextProjectLink="/conexiom"
        />
      </PageTransition>
    ),
  },
  {
    path: 'conexiom',
    element: (
      <PageTransition>
        <Company
          companyName="Conexiom"
          location="Canada"
          employees="201-500"
          remote="Hybrid"
          fromTo="Apr 2023 - May 2024"
          workType="Full-time"
          code="CA"
          indexPageImg={conexiomPage}
          linkToWebsite="https://conexiom.com/"
          companyDescription="I previously led the design and implementation of web applications and micro frontends, with a strong focus on software quality through Test-Driven Development (TDD). I was committed to creating comprehensive documentation for software processes and worked closely with cross-functional teams to ensure seamless system integration. Additionally, I provided leadership and direction as the head of the frontend department.Notably, during my time at Conexiom, I played a pivotal role in automating manual data entry processes for leading global companies, transforming their sales order processing from manual to automated systems. This experience highlighted my ability to merge technical innovation with impactful solutions, leaving a lasting contribution to the organization’s success."
          nextProjectLink="/mrkter"
        />
      </PageTransition>
    ),
  },
  {
    path: 'mrkter',
    element: (
      <PageTransition>
        <Company
          companyName="Mrkter"
          location="Israel"
          employees="11-50"
          remote="Remote"
          fromTo="Jul 2022 - Apr 2023"
          workType="Full-time"
          code="IL"
          indexPageImg={mrkterPage}
          linkToWebsite="https://mrkter.io/"
          companyDescription="I contributed significantly to mrkter’s FinOps solution, streamlining marketing expense management. Additionally, I developed an online banking platform with enhanced user experience and optimized UI using React.js. Ensuring software quality and rapid deployment, I established a robust CI/CD pipeline. Collaborating with backend services, I documented progress, aligned UI changes, and prioritized system security. My innovative use of TypeScript within AWS Lambda further streamlined our processes, showcasing a commitment to cutting-edge technology."
          nextProjectLink="/magnificode"
        />
      </PageTransition>
    ),
  },
  {
    path: 'magnificode',
    element: (
      <PageTransition>
        <Company
          companyName="Magnificode"
          location="Israel"
          employees="2-10"
          remote="Remote"
          fromTo="Jan 2021 - Jul 2022"
          workType="Full-time"
          code="IL"
          indexPageImg={magnificodePage}
          linkToWebsite="https://magnificode.net/"
          companyDescription="As a senior frontend developer, I contributed to high-profile projects such as Photo Stock, Hiring Platform, and Graphic Design Tool. I implemented an innovative screen ratio system achieving perfect UI proportions for all resolutions, collaborated with cross-functional teams to integrate frontend components with backend services and APIs, and leveraged expertise in React and Next.js to build highly performant, scalable, and responsive user interfaces. I proactively researched and implemented new technologies, mentored junior developers, and contributed to the growth and success of the team."
          nextProjectLink="/upwork"
        />
      </PageTransition>
    ),
  },
  {
    path: 'upwork',
    element: (
      <PageTransition>
        <Company
          companyName="Upwork"
          location="Multiple"
          employees="5-100"
          remote="Remote"
          fromTo="Jan 2020 - May 2022"
          workType="Freelance"
          code="US"
          indexPageImg={upworkPage}
          linkToWebsite="https://www.upwork.com/freelancers/~0178b4cde2adb63163"
          companyDescription="As a freelancer on Upwork, I've proudly attained the Top Rated Plus badge, a distinction reserved for the top 3% of performers on the platform. Maintaining a 100% success rate across all contracts, I consistently secured the title of 'Worker of the Month' multiple times. These accolades underscore my unwavering commitment to delivering high-quality work and fostering exceptional client satisfaction. I prioritize direct feedback and cultivate enduring, productive relationships, ensuring consistently excellent results."
          nextProjectLink="/zipsale"
        />
      </PageTransition>
    ),
  },
  {
    path: 'zipsale',
    element: (
      <PageTransition>
        <Company
          companyName="Zipsale"
          location="UK"
          employees="10-20"
          remote="Remote"
          fromTo="Jul 2020 - Dec 2020"
          workType="Contract"
          code="GB"
          indexPageImg={zipsalePage}
          linkToWebsite="https://www.zipsale.co.uk/"
          companyDescription="As a Frontend Developer at a pioneering cross-listing software startup, specializing in empowering second-hand sellers, I held a pivotal role in conceptualizing and developing our crucial Minimum Viable Product (MVP). My instrumental contributions were integral in securing additional funding critical for propelling the project forward. Demonstrating steadfast dedication to quality and meeting deadlines, I successfully ensured the project's timely completion within the stipulated timeframe. Leading the charge in implementing a fully responsive and accessible web design, I prioritized user-friendliness, ensuring seamless access and usability for all individuals engaging with our platform."
          nextProjectLink="/conexiom"
        />
      </PageTransition>
    ),
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyles />

      <EmotionTheme>
        <BreakpointProvider>
          <RouterProvider router={router} />
        </BreakpointProvider>
      </EmotionTheme>
    </>
  );
};

export default App;
