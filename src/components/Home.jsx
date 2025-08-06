import { Typewriter } from 'react-simple-typewriter';
import { IconMail, IconExternalLink, IconBrandLinkedin, IconBrandGithub  } from '@tabler/icons-react';
import { Button, Container, Group, Text, Title, ActionIcon } from '@mantine/core';
import classes from './Home.module.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';

export default function Home() {

  const [animationSrc, setAnimationSrc] = useState('/animation/lightTheme.lottie');

  useEffect(() => {
    const scheme = document.documentElement.getAttribute('data-mantine-color-scheme');
    setAnimationSrc(scheme === 'dark' ? '/animation/darkTheme.lottie' : '/animation/lightTheme.lottie');

    const observer = new MutationObserver(() => {
      const updatedScheme = document.documentElement.getAttribute('data-mantine-color-scheme');
      setAnimationSrc(updatedScheme === 'dark' ? '/animation/darkTheme.lottie' : '/animation/lightTheme.lottie');
    });

    // Observe changes to the data attribute if theme changes dynamically
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-mantine-color-scheme'],
    });

    return () => observer.disconnect();
  }, []);
  

  return (
    <Container size="md" mt="xl">
      <div className={classes.inner}>
        <div className={classes.content}>
          {/* --- LEFT SIDE --- */}

          {/* TITLE */}
          <Title fz="70" ta="left">
            <span className={classes.highlight}>Full Stack</span> 
          </Title>
          <Title fz="70" className={classes.title} ta="left" mr="1">
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
          <Group gap={15} className={classes.social} wrap="nowrap" mt="20">
            <ActionIcon component="a" href="https://www.linkedin.com/in/vladislav-yatsenko/" target="_blank"
                          rel="noopener noreferrer" size="xl" variant="subtle" color="gray"  className={classes.socialIcons}>
              <IconBrandLinkedin  size={40} stroke={1.5} className={classes.icon}/>
            </ActionIcon>
            <ActionIcon component="a" href="https://github.com/vyatsenk0" target="_blank"
                          rel="noopener noreferrer" size="xl" variant="subtle" color="gray" className={classes.socialIcons}>
              <IconBrandGithub  size={40} stroke={1.5} className={classes.icon}/>
            </ActionIcon>
          </Group>
          </div>

          {/* --- RIGHT SIDE --- */}

          {/* LOTTIE ANIMATION */}
          <div className={classes.animation}>
            <DotLottieReact
              src={animationSrc}
              loop
              autoplay
              style={{ width: 600, height: 600 }}
            />
          </div>      
        
      </div>
    </Container>
  );
}