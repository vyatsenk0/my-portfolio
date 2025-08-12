import { useState } from 'react';
import { Box, Container, Text, Title, Center, SegmentedControl } from '@mantine/core';
import { IconPackages, IconCode, IconBriefcase2, IconSchool, IconCertificate } from '@tabler/icons-react';
import { AnimatePresence, motion } from "motion/react"; // new package import

import classes from './Portfolio.module.css';

import { TechStackGrid } from './partials/TechStackGrid';
import { Projects } from './partials/Projects';
import { WorkExp } from './partials/WorkExp';
import { Education } from './partials/Education';
import { Certificates } from './partials/Certificates';


export default function Portfolio() {
  const [value, setValue] = useState('techStack');

   const tabs = {
    techStack: <TechStackGrid />,
    projects: <Projects />,
    workExp: <WorkExp />,
    education: <Education />,
    certificates: <Certificates />,
  };

  return (
    <Box id="portfolio" style={{ padding: '80px 0' }}>
      <Container size="md" ta="center">
        <Title fz="50" order={1} mb="sm" style={{
              background: 'linear-gradient(to right, #2172f4, #5b43d6, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
             }}>
          Portfolio Showcase
        </Title>
        <Text fz="lg" mb="lg">
          A quick glance at my technical background and professional journey.
        </Text>

         <SegmentedControl
          radius="xl"
          size="xl"
          value={value}
          onChange={setValue}
          classNames={classes}
          transitionDuration={200}  // smooth transition
          transitionTimingFunction="linear" // smooth transition
          // withItemsBorders={false} // without | separatators, ".control::before" css achieves the same result
          fullWidth 
          data={[
        {
          value: 'techStack',
          label: (
            <Center style={{ gap: 10 }}>
              <IconPackages size={20} />
              <span>Tech Stack</span>
            </Center>
          ),
        },
        {
          value: 'projects',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode size={25} />
              <span>Projects</span>
            </Center>
          ),
        },
        {
          value: 'workExp',
          label: (
            <Center style={{ gap: 10 }}>
              <IconBriefcase2 size={20} />
              <span>Work Experience</span>
            </Center>
          ),
        },
           {
          value: 'education',
          label: (
            <Center style={{ gap: 10 }}>
              <IconSchool size={25} />
              <span>Education</span>
            </Center>
          ),
        },
           {
          value: 'certificates',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCertificate size={25} />
              <span>Certificates</span>
            </Center>
          ),
        },
        ]}
        />
      
        {/* Conditionally render dynamically animated partials */}
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.22,
              ease: "easeOut"
            }}
          >
            {tabs[value]}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
