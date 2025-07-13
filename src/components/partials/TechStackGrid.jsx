import { Card, Group, SimpleGrid, Text, UnstyledButton, Image } from '@mantine/core';
import classes from './TechStackGrid.module.css';

const techCategories = [
  {
    title: 'Frontend',
    items: [
      { title: 'HTML', image: '/stack/html.png' },
      { title: 'CSS', image: '/stack/css.svg' },
      { title: 'Sass', image: '/stack/sass.svg' },
      { title: 'Bootstrap', image: '/stack/bootstrap.svg' },
      { title: 'JavaScript', image: '/stack/javascript.svg' },
      { title: 'TypeScript', image: '/stack/typescript.svg' },
      { title: 'React', image: '/stack/react.svg' },
      { title: 'Redux', image: '/stack/redux.svg' },
      { title: 'NextJS', image: '/stack/nextjs.png' },
      { title: 'Angular', image: '/stack/angular.svg' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { title: 'Node', image: '/stack/nodejs.svg' },
      { title: 'Java', image: '/stack/java.svg' },
      { title: 'Python', image: '/stack/python.svg' },
      { title: 'C#', image: '/stack/csharp.svg' },
      { title: '.NET', image: '/stack/dotnet.svg' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { title: 'MongoDB', image: '/stack/mongodb.svg' },
      { title: 'Oracle', image: '/stack/oracle.svg' },
      { title: 'Postgres', image: '/stack/postgres.svg' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { title: 'Docker', image: '/stack/docker.svg' },
      { title: 'Azure', image: '/stack/azure.svg' },
      { title: 'Git', image: '/stack/git.svg' },
      { title: 'Jenkins', image: '/stack/jenkins.svg' },
    ],
  },
];

export function TechStackGrid() {
  return (
    <>
      {techCategories.map((category) => (
        <Card key={category.title} withBorder radius="md" className={classes.card} mt="xl">
          <Group justify="center">
            <Text className={classes.title} fw={700} >{category.title}</Text>
          </Group>

          <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 6 }} mt="md" spacing="lg">
            {category.items.map((item) => (
              <UnstyledButton key={item.title} className={classes.item}>
                <Image src={item.image} alt={item.title} height={40} fit="contain" />
                <Text size="x" mt={7} ta="center" fw={600}>
                  {item.title}
                </Text>
              </UnstyledButton>
            ))}
          </SimpleGrid>
        </Card>
      ))}
    </>
  );
}
