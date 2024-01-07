import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../Home/Hero/Header';
import { a, config, useSpring, useTrail, useTransition } from '@react-spring/web';
import PageContainer from '../../components/common/PageContainer';
import { FaUsers, FaBriefcase } from 'react-icons/fa'; // People icon from React Icons
import { MdLocationOn } from 'react-icons/md'; // Location icon from React Icons
import { GiOfficeChair } from 'react-icons/gi'; // Office icon for onsite work
import { BsCalendar } from 'react-icons/bs'; // Calendar icon for time
import { FlagIcon, FlagIconCode } from 'react-flag-kit'; //
import MysteriousText from '../../components/common/MysteriousText';
import { useTheme } from '@emotion/react';
import Link from '../../components/common/Link';
import conexiomImg from './assets/conexiom.png';
import BackToHomePage from '../../components/common/BackToHomePage';

const MainStyled = styled.main`
  padding: ${({ theme }) => `${theme.vw.d(200)} 0 0`};
`;

const SectionStyled = styled.section`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.vw.d(10)};
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.vw.d(20)};
  width: 33%;
  position: fixed;
`;

const Title = styled.h2`
  display: flex;
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  font-size: ${({ theme }) => theme.vw.d(80)};
  line-height: 1;
`;

const TitleChar = styled(a.div)``;

const AboutCompany = styled(a.p)`
  color: ${({ theme }) => theme.color.white};
  opacity: 0.6;
  font-size: ${({ theme }) => theme.vw.d(20)};
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.vw.d(40)};
`;

const Tags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.vw.d(6)};
  flex-wrap: wrap;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.vw.d(16)};
  line-height: 1.5;
  padding: ${({ theme }) => `${theme.vw.d(0)} ${theme.vw.d(10)}`};
  border-radius: 50px;
  ${({ theme }) => theme.flex.center};
  gap: ${({ theme }) => theme.vw.d(6)};
`;

const RightContent = styled.div`
  width: 50%;
  padding-left: 50%;
`;

const ImgContainer = styled(a.div)`
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.vw.d(20)};
    margin-bottom: ${({ theme }) => theme.vw.d(100)};
  }
`;

const BackToHomePageContainer = styled.div`
  transform: translateX(${({ theme }) => theme.vw.d(-150)});
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
            <a.div style={linkSpring}>
              <Link link={linkToWebsite} title="Go to website" />
            </a.div>
          </LeftContent>
          <RightContent>
            <ImgContainer style={imgSpring}>
              <img src={indexPageImg} alt="Company logo" />
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
