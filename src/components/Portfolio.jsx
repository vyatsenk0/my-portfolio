import { Box, Container, Text, Title, Tabs, Card, Group, SimpleGrid } from '@mantine/core';
import { TechStackGrid } from './partials/TechStackGrid';
import { Certificates } from './partials/Certificates';

export default function Portfolio() {
  return (
    <Box id="portfolio" style={{ padding: '80px 0' }}>
      <Container size="md" ta="center">
        <Title order={2} mb="sm">
          Portfolio Showcase
        </Title>
        <Text c="dimmed" mb="lg">
          A quick glance at my technical background and professional journey.
        </Text>

        <Tabs color="violet" variant="outline" defaultValue="tech">
          <Tabs.List justify="center">
            <Tabs.Tab value="tech" fw={700}>Tech Stack</Tabs.Tab>
            <Tabs.Tab value="projects" fw={700}>Projects</Tabs.Tab>
            <Tabs.Tab value="work" fw={700}>Work Experience</Tabs.Tab>
            <Tabs.Tab value="education" fw={700}>Education</Tabs.Tab>
            <Tabs.Tab value="certs" fw={700} >Certificates</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="tech" pt="md">
            <TechStackGrid />
          </Tabs.Panel>
          <Tabs.Panel value="projects" pt="md">
            Projects content
          </Tabs.Panel>
          <Tabs.Panel value="work" pt="md">
            Work experience content
          </Tabs.Panel>
          <Tabs.Panel value="education" pt="md">
            Education content
          </Tabs.Panel>
          <Tabs.Panel value="certs" pt="md">
            <Certificates />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
}
