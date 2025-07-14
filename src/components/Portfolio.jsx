import { useState } from 'react';
import { Box, Container, Text, Title, Tabs, Card, Group, SimpleGrid, Center, SegmentedControl } from '@mantine/core';
import { IconPackages, IconCode, IconBriefcase2, IconSchool, IconCertificate } from '@tabler/icons-react';

import classes from './Portfolio.module.css';

import { TechStackGrid } from './partials/TechStackGrid';
import { Education } from './partials/Education';
import { Certificates } from './partials/Certificates';


export default function Portfolio() {
  const [value, setValue] = useState('techStack');

  return (
    <Box id="portfolio" style={{ padding: '80px 0' }}>
      <Container size="md" ta="center">
        <Title order={2} mb="sm">
          Portfolio Showcase
        </Title>
        <Text c="dimmed" mb="lg">
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
          // withItemsBorders={false} // without | separatators
          // fullWidth 
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
              <IconCode size={20} />
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
              <IconSchool size={20} />
              <span>Education</span>
            </Center>
          ),
        },
           {
          value: 'certificates',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCertificate size={20} />
              <span>Certificates</span>
            </Center>
          ),
        },
      ]}
        />
        {/* Conditionally render partials */}
        {value === 'techStack' && <TechStackGrid />}
        {value === 'projects' && <Text>Projects content</Text>}
        {value === 'workExp' && <Text>Work experience content</Text>}
        {value === 'education' && <Education />}
        {value === 'certificates' && <Certificates />}
      </Container>
    </Box>
  );
}
