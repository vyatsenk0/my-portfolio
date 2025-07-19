import { Box, Container, Text, Title, Button, Card, Grid } from '@mantine/core';
import { IconCode, IconFileCv, IconCertificate, IconArrowUpRight  } from '@tabler/icons-react';

export default function About() {
  const stats = [
    {
      icon: <IconCode size={35} style={{
      padding: 8,
      display: 'inline-block',      
      boxSizing: 'content-box',  
      backgroundColor: 'rgba(170, 170, 170, 0.2)', 
      borderRadius: '100%',
    }}/> ,
      title: 'TOTAL PROJECTS',
      description: 'Modern web and digital solutions',
      value: 1
    },
    {
      icon: <IconFileCv size={35} style={{
      padding: 8,
      display: 'inline-block',      
      boxSizing: 'content-box',  
      backgroundColor: 'rgba(170, 170, 170, 0.2)', 
      borderRadius: '100%',
    }}/>,
      title: 'YEARS OF EXPERIENCE',
      description: 'Commitment to continuous growth',
      value: 4
    },
    {
      icon: <IconCertificate size={35} style={{
      padding: 8,
      display: 'inline-block',      
      boxSizing: 'content-box',  
      backgroundColor: 'rgba(170, 170, 170, 0.2)', 
      borderRadius: '100%',
    }}/>,
      title: 'CERTIFICATES',
      description: 'Recognized qualifications',
      value: 3
    }
  ];

  return (
    <Container size="lg" py="xl" id="about">
      <Title
        fz={50}
        order={1}
        mb="sm"
        style={{
          background: 'linear-gradient(to right, #2172f4, #5b43d6, #9333ea)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        About me
      </Title>

      <Text size="lg" mb="md" maw={600} mx="auto">
        Hello, I'm Vladislav Yatsenko, Full Stack Developer with 4 years of work experience in the industry committed to crafting intuitive experiences
        through clean code, purposeful design, and impactful tools.
      </Text>

      <Button
        style={{background: 'transparent', color: '#9333ea', border: '1px solid #9333ea', fontSize: '18px'}}
        component="a"
        href="#portfolio"
        leftSection={<IconCode size={25} />}
        mb="xl"
      >
        View Projects
      </Button>

      <Grid gutter="xl">
        {stats.map((stat, index) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={index}>
            <Card
                shadow="md"
                padding="lg"
                radius="md"
                withBorder
                style={{
                    backgroundColor: "rgba(100, 100, 255, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "150px",
                }}
                >
                {/* Top row: Icon + number */}
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>{stat.icon}</Box>
                    <Text fw={700} size="xl" fz="30">
                        {stat.value}
                    </Text>
                </Box>

                {/* Bottom: Title + Description (left) + Arrow (right) */}
                <Box
                    mt="auto"
                    style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginTop: '1rem',
                    }}
                >
                    <Box>
                        <Text fw={600} ta="left">
                            {stat.title}
                        </Text>
                        <Text size="sm" c="dimmed" ta="left">
                            {stat.description}
                        </Text>
                    </Box>

                    <IconArrowUpRight size={18} />
                </Box>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}