import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { a, config, useSpring, useTrail } from '@react-spring/web';
import { FlagIcon, FlagIconCode } from 'react-flag-kit';
import { BsCalendar } from 'react-icons/bs';
import { FaBriefcase, FaUsers } from 'react-icons/fa';
import { GiOfficeChair } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import BackToHomePage from '../../components/common/BackToHomePage';
import Link from '../../components/common/Link';
import MysteriousText from '../../components/common/MysteriousText';
import PageContainer from '../../components/common/PageContainer';

const MainStyled = styled.main`
  ${({ theme }) => theme.media.d} {
    padding: ${({ theme }) => `${theme.vw.d(200)} 0 0`};
  }

  ${({ theme }) => theme.media.m} {
    padding: ${({ theme }) => `${theme.vw.m(200)} 0 0`};
  }
`;

const SectionStyled = styled.section`
  display: flex;

  ${({ theme }) => theme.media.d} {
    gap: ${({ theme }) => theme.vw.d(10)};
    flex-direction: row;
  }

  ${({ theme }) => theme.media.m} {
    flex-direction: column;
    gap: ${({ theme }) => theme.vw.m(10)};
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.d} {
    position: fixed;
    width: 33%;
    gap: ${({ theme }) => theme.vw.d(20)};
  }

  ${({ theme }) => theme.media.m} {
    gap: ${({ theme }) => theme.vw.m(15)};
  }
`;

const Title = styled.h2`
  display: flex;
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  line-height: 1;

  ${({ theme }) => theme.media.d} {
    font-size: ${({ theme }) => theme.vw.d(80)};
  }

  ${({ theme }) => theme.media.m} {
    font-size: ${({ theme }) => theme.vw.m(60)};
  }
`;

const TitleChar = styled(a.div)``;

const AboutCompany = styled(a.p)`
  color: ${({ theme }) => theme.color.white};
  opacity: 0.6;
  line-height: 1.5;
  font-weight: 400;

  ${({ theme }) => theme.media.d} {
    font-size: ${({ theme }) => theme.vw.d(20)};
    margin-bottom: ${({ theme }) => theme.vw.d(40)};
  }

  ${({ theme }) => theme.media.m} {
    font-size: ${({ theme }) => theme.vw.m(16)};
    margin-bottom: ${({ theme }) => theme.vw.m(30)};
  }
`;

const GoToWebsite = styled(a.div)`
  ${({ theme }) => theme.media.m} {
    margin-bottom: ${({ theme }) => theme.vw.m(40)};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.d} {
    gap: ${({ theme }) => theme.vw.d(6)};
  }

  ${({ theme }) => theme.media.m} {
    gap: ${({ theme }) => theme.vw.m(7)};
  }
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  line-height: 1.5;
  border-radius: 50px;
  ${({ theme }) => theme.flex.center};
  gap: ${({ theme }) => theme.vw.d(6)};

  ${({ theme }) => theme.media.d} {
    font-size: ${({ theme }) => theme.vw.d(16)};
    padding: ${({ theme }) => `${theme.vw.d(0)} ${theme.vw.d(10)}`};
  }

  ${({ theme }) => theme.media.m} {
    font-size: ${({ theme }) => theme.vw.m(12)};
    padding: ${({ theme }) => `${theme.vw.m(2)} ${theme.vw.m(8)}`};
  }
`;

const RightContent = styled.div`
  ${({ theme }) => theme.media.d} {
    padding-left: 50%;
    width: 50%;
  }

  ${({ theme }) => theme.media.m} {
    width: 100%;
  }
`;

const ImgContainer = styled(a.div)`
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.vw.d(20)};
  }

  ${({ theme }) => theme.media.d} {
    margin-bottom: ${({ theme }) => theme.vw.d(100)};
  }

  ${({ theme }) => theme.media.m} {
    margin-bottom: ${({ theme }) => theme.vw.m(40)};
  }
`;

const BackToHomePageContainer = styled.div`
  ${({ theme }) => theme.media.d} {
    transform: translateX(${({ theme }) => theme.vw.d(-150)});
  }

 
`;

// !Todo mouse pointer animation?

type Props = {
  companyName: string;
  location: string;
  employees: string;
  remote: string;
  fromTo: string;
  workType: string;
  code: FlagIconCode;
  indexPageImg: string;
  linkToWebsite: string;
  companyDescription: string;
};

const CompanyPage = ({
  companyName,
  location,
  employees,
  remote,
  fromTo,
  workType,
  code,
  indexPageImg,
  linkToWebsite,
  companyDescription,
}: Props) => {
  const theme = useTheme();
  const tagsData = [
    {
      icon: <MdLocationOn />,
      text: location,
      flag: <FlagIcon size={15} code={code} />,
    },
    {
      icon: <FaUsers />,
      text: `${employees} Employees`,
    },
    {
      icon: <GiOfficeChair />,
      text: `${remote} Work`,
    },
    {
      icon: <BsCalendar />,
      text: fromTo,
    },
    {
      icon: <FaBriefcase />,
      text: workType,
    },
  ];

  const titleTrail = useTrail(companyName.length, {
    config: { tension: 0, friction: 0 },
    from: { y: theme.vw.d(10), opacity: 0 },
    to: { y: theme.vw.d(0), opacity: 1 },
    delay: 1000,
  });

  const linkSpring = useSpring({
    config: config.molasses,
    from: { y: '100%', opacity: 0 },
    to: { y: '0%', opacity: 1 },
    delay: 1000,
  });

  const imgSpring = useSpring({
    config: config.molasses,
    from: { y: '100%', opacity: 0 },
    to: { y: '0%', opacity: 1 },
    delay: 500,
  });

  return (
    <PageContainer>
      <MainStyled>
        <SectionStyled>
          <LeftContent>
            <Title>
              {titleTrail.map((props, index) => (
                <TitleChar style={props} key={index + companyName}>
                  {companyName[index] === ' ' ? '\u00A0' : companyName[index]}
                </TitleChar>
              ))}
            </Title>
            <Tags>
              {tagsData.map((tag, index) => (
                <Tag key={index}>
                  {tag.icon}
                  {tag.text}
                  {tag.flag}
                </Tag>
              ))}
            </Tags>
            <AboutCompany>
              <MysteriousText>{companyDescription}</MysteriousText>
            </AboutCompany>
            <GoToWebsite style={linkSpring}>
              <Link link={linkToWebsite} title="Go to website" />
            </GoToWebsite>
          </LeftContent>
          <RightContent>
            <ImgContainer style={imgSpring}>
              <img src={indexPageImg} alt="" />
            </ImgContainer>
            <BackToHomePageContainer>
              <BackToHomePage />
            </BackToHomePageContainer>
          </RightContent>
        </SectionStyled>
      </MainStyled>
    </PageContainer>
  );
};

export default CompanyPage;
