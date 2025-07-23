import { IconMail, IconExternalLink, IconBrandLinkedin, IconBrandGithub  } from '@tabler/icons-react';
import { Button, Container, Group, Text, Title, ActionIcon } from '@mantine/core';
import classes from './Home.module.css';

export default function Home() {
  return (
    <Container size="md" mt="xl">
      <div className={classes.inner}>
        <div className={classes.content}>
          {/* --- LEFT SIDE --- */}

          {/* TITLE */}
          <Title ta="left">
            <span className={classes.highlight}>Full Stack</span> 
          </Title>
          <Title className={classes.title} ta="left" ml="10">
            Developer
          </Title>

          {/* DYNAMIC TEXT & DESCRIPTION */}
          <Text mt="md" ta="left">
            Dynamic text
          </Text>
          <Text c="dimmed" mt="md" ta="left">
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

          {/* --- RIGHT SIDE --- */}

          {/* CANVAS */}
          
        </div>
      </div>
    </Container>
  );
}