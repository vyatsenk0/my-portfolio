import { Typewriter } from 'react-simple-typewriter';
import { IconMail, IconExternalLink, IconBrandLinkedin, IconBrandGithub  } from '@tabler/icons-react';
import { Button, Container, Group, Text, Title, ActionIcon } from '@mantine/core';
import classes from './Home.module.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  return (
    <Container size="md" mt="xl">
      <div className={classes.inner}>
        <div className={classes.content}>
          {/* --- LEFT SIDE --- */}

          {/* TITLE */}
          <Title fz="70" ta="left">
            <span className={classes.highlight}>Full Stack</span> 
          </Title>
          <Title fz="70" className={classes.title} ta="left" ml="10">
            Developer
          </Title>

          {/* DYNAMIC Typewriter TEXT & DESCRIPTION */}
          <Text mt="md" ta="left" fw={500} fz="xl">
            <Typewriter
              words={[
                'Computer Programming & Analysis Graduate',
                'Code Enthusiast',
                'Tech-Driven Creator',
              ]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </Text>
          <Text mt="md" ta="left">
            Crafting seamless, scalable digital experiences through clean code, thoughtful design, and meaningful technology.
          </Text>

          {/* LINKS */}
          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.links} rightSection={<IconExternalLink />}
                    component="a" href="#portfolio">
              Portfolio
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.links} rightSection={<IconMail />}
                    component="a" href="#contact">
              Contact
            </Button>
          </Group>

          {/* SOCIAL ICONS */}
          <Group gap={0} className={classes.social} wrap="nowrap" mt="4">
            <ActionIcon component="a" href="https://www.linkedin.com/in/vladislav-yatsenko/" target="_blank"
                          rel="noopener noreferrer" size="lg" variant="subtle" color="gray"  className={classes.socialIcons}>
              <IconBrandLinkedin  size={30} stroke={1.5} />
            </ActionIcon>
            <ActionIcon component="a" href="https://github.com/vyatsenk0" target="_blank"
                          rel="noopener noreferrer" size="lg" variant="subtle" color="gray" className={classes.socialIcons}>
              <IconBrandGithub  size={30} stroke={1.5} />
            </ActionIcon>
          </Group>
          </div>

          {/* --- RIGHT SIDE --- */}

          {/* LOTTIE ANIMATION */}
          <div className={classes.animation}>
            <DotLottieReact
              src="/animation/main.lottie"
              loop
              autoplay
              style={{ width: 600, height: 600 }}
            />
          </div>      
        
      </div>
    </Container>
  );
}