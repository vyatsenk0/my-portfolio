import { Box, Container, Text, Title, Button, Card, Grid } from '@mantine/core';
import { IconCode, IconFileCv, IconCertificate, IconArrowUpRight } from '@tabler/icons-react';
import classes from './About.module.css';

export default function About() {
  const stats = [
    {
      icon: <IconCode size={35} className={classes.icon} />,
      title: 'TOTAL PROJECTS',
      description: 'Modern web and digital solutions',
      value: 1,
    },
    {
      icon: <IconFileCv size={35} className={classes.icon} />,
      title: 'YEARS OF EXPERIENCE',
      description: 'Commitment to continuous growth',
      value: 4,
    },
    {
      icon: <IconCertificate size={35} className={classes.icon} />,
      title: 'CERTIFICATES',
      description: 'Recognized qualifications',
      value: 3,
    },
  ];

  return (
    <Container size="lg" py="xl" id="about" style={{ padding: '100px 0' }}>
      <Title
        fz={50}
        order={1}
        mb="sm"
        className={classes.gradientTitle}
      >
        About me
      </Title>

      <Text size="lg" mb="md" maw={600} mx="auto">
        Hello, I'm Vladislav Yatsenko, Full Stack Developer with 4 years of work experience in the industry committed to crafting intuitive experiences
        through clean code, purposeful design, and impactful tools.
      </Text>

      <Button
        component="a"
        href="#portfolio"
        leftSection={<IconCode size={25} />}
        mb="xl"
        className={classes.viewProjectsButton}
      >
        View Projects
      </Button>

      <Grid gutter="xl">
        {stats.map((stat, index) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={index}>
            <a href="#portfolio" className={classes.cardLink}>
              <Card shadow="md" padding="lg" radius="md" withBorder className={classes.card}>
                <Box className={classes.cardTopRow}>
                  <Box>{stat.icon}</Box>
                  <Text fw={700} size="xl" fz="30">
                    {stat.value}
                  </Text>
                </Box>

                <Box mt="auto" className={classes.cardBottomRow}>
                  <Box>
                    <Text fw={600} ta="left">
                      {stat.title}
                    </Text>
                    <Text size="sm" ta="left">
                      {stat.description}
                    </Text>
                  </Box>

                  <IconArrowUpRight size={18} />
                </Box>
              </Card>
            </a>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
