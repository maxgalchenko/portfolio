import React, { useEffect } from 'react';
import PageTransition from './components/common/PageTransition';
import Company from './pages/Company';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import GlobalStyles from './theme/GlobalStyles';
import EmotionTheme from './theme/EmotionTheme';
import { BreakpointProvider } from './hooks/useBreakpoint';
import conexiomPage from './assets/companyIndexPages/conexiom.webp';
import mrkterPage from './assets/companyIndexPages/mrkter.webp';
import magnificodePage from './assets/companyIndexPages/magnificode.webp';
import upworkPage from './assets/companyIndexPages/upwork.webp';
import zipsalePage from './assets/companyIndexPages/zipsale.webp';

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
    path: 'conexiom',
    element: (
      <PageTransition>
        <Company
          companyName="Conexiom"
          location="Canada"
          employees="201-500"
          remote="Hybrid"
          fromTo="Apr 2023 - Present"
          workType="Full-time"
          code="CA"
          indexPageImg={conexiomPage}
          linkToWebsite="https://conexiom.com/"
          companyDescription="I currently lead the design and implementation of web applications and micro frontend, prioritizing software quality through Test-Driven Development (TDD). Additionally, I'm dedicated to creating comprehensive documentation for software processes and closely collaborating with cross-functional teams to ensure seamless system integration. Concurrently, I provide leadership and direction as the head of the frontend department. Notably, my significant contributions continue at Conexiom, where I'm instrumental in automating manual data entry processes for leading global companies, revolutionizing their sales order processing from manual to automated systems. This ongoing experience continues to showcase my adeptness at merging technical innovation with impactful solutions."
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
