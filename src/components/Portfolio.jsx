import { Box, Container, Text, Title, Tabs, Card, Group, SimpleGrid } from '@mantine/core';
import { TechStackGrid } from './TechStackGrid';

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
            <Tabs.Tab value="tech">Tech Stack</Tabs.Tab>
            <Tabs.Tab value="projects">Projects</Tabs.Tab>
            <Tabs.Tab value="work">Work Experience</Tabs.Tab>
            <Tabs.Tab value="education">Education</Tabs.Tab>
            <Tabs.Tab value="certs">Certifications</Tabs.Tab>
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
            Certifications content
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
}
