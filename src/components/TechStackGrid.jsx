// src/components/TechStackGrid.jsx (or .tsx if using TypeScript)
import { Card, Group, SimpleGrid, Text } from '@mantine/core';
import classes from './TechStackGrid.module.css';

const techStack = [
    { title: 'HTML', image: '/stack/html.png' },
    { title: 'CSS', image: '/stack/css.svg' },
    { title: 'Sass', image: '/stack/sass.svg' },
    { title: 'Bootstrap', image: '/stack/bootstrap.svg' },
    { title: 'TypeScript', image: '/stack/typescript.svg' },
    { title: 'JavaScript', image: '/stack/javascript.svg' },
    { title: 'React', image: '/stack/react.svg' },
    { title: 'Redux', image: '/stack/redux.svg' },
    { title: 'NextJS', image: '/stack/nextjs.png' },
    { title: 'Angular', image: '/stack/angular.svg' },
    { title: 'Node', image: '/stack/nodejs.svg' },
    { title: 'Java', image: '/stack/java.svg' },
    { title: 'Python', image: '/stack/python.svg' },
    { title: 'C#', image: '/stack/csharp.svg' },
    { title: '.NET', image: '/stack/dotnet.svg' },

    { title: 'Azure', image: '/stack/azure.svg' },
    { title: 'Docker', image: '/stack/docker.svg' },
    { title: 'Git', image: '/stack/git.svg' },
    { title: 'MongoDB', image: '/stack/mongodb.svg' },
    { title: 'Oracle', image: '/stack/oracle.svg' },
    { title: 'Postgres', image: '/stack/postgres.svg' },
    { title: 'Jenkins', image: '/stack/jenkins.svg' },
];

export function TechStackGrid() {
  const items = techStack.map((item) => (
    <div key={item.title} className={classes.item}>
      <img src={item.image} alt={item.title} height={40} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </div>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <SimpleGrid cols={5} spacing="md" mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
