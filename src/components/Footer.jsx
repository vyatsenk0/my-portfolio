import { IconBrandLinkedin , IconBrandGithub, IconChevronsUp  } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text, Button, Grid } from '@mantine/core';
import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
        <Grid> {/* 12 columns */}
            {/* LEFT COLUMN */}
            <Grid.Col span={3} offset={1}>
                <Text mb={20} fw={600} size="xl">Vladislav Yatsenko</Text>
                <Text  mb={20} size="md" c="dimmed">Full Stack Developer crafting seamless digital experiences. Passionate about clean code, elegant design, and building tools that make a difference.</Text>
                <Button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{
                        marginTop: '10px',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        background: 'transparent',
                        color: 'white',
                        border: '1px solid white',
                        cursor: 'pointer',
                        fontWeight: 500,
                        width: 'fit-content',
                        opacity: 0.8
                    }}
                >
                    <IconChevronsUp  style={{ marginRight: '10px' }} />
                    BACK TO TOP
              </Button>
            </Grid.Col>

             {/* RIGHT COLUMNS */}
            <Grid.Col span={4} offset={3}>
                <Grid style={{display: 'flex', alignItems: 'center', height: '100%'}}> {/* 12 columns */}
                     {/* Working Time */}
                     <Grid.Col span={6}>
                        <Text fw={600} mb={20}>Working Time</Text>
                        <Text size="md" c="dimmed">Almaty, Kazakhstan</Text>
                        <Text size="md" c="dimmed">Monday - Friday</Text>
                        <Text size="md" c="dimmed">09:00 AM – 06:00 PM (UTC +5)</Text>
                     </Grid.Col>
                     
                    {/* Contact Info */}
                    <Grid.Col span={5} offset={1}>
                        <Text fw={600} mb={20}>Contact Info</Text>
                        <Text size="md" c="dimmed">+1 (437) 421-1371</Text>
                        <Text size="md" c="dimmed">yatsenkovladislav50@gmail.com</Text>
                     </Grid.Col>
                </Grid>
            </Grid.Col>
        </Grid>
      

      {/* AFTER FOOTER */}
      <Container fluid className={classes.afterFooter}>
        <Text c="dimmed" size="md">
          © 2025 - All Rights Reserved.
        </Text>
        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon component="a" href="https://www.linkedin.com/in/vladislav-yatsenko/" target="_blank"
                        rel="noopener noreferrer" size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin  size={30} stroke={1.5} />
          </ActionIcon>
          <ActionIcon component="a" href="https://github.com/vyatsenk0" target="_blank"
                        rel="noopener noreferrer" size="xl" color="gray" variant="subtle">
            <IconBrandGithub  size={30} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}