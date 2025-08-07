import { Button, Group, SimpleGrid, Textarea, TextInput, Title, Container, Box, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSend, IconShare, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

import classes from './Contact.module.css';

export default function Contact() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
    },
  });

  return (
    <Container className={classes.wrapper} id="contact">
      {/* TITLES */}
      <Title fz="50" order={1} mb="sm" style={{
            background: 'linear-gradient(to right, #2172f4, #5b43d6, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',

            }}>
        Contact Me
      </Title>
      <Title fz="15" fw="200" style={{paddingBottom: '70px'}}>
        Got something to ask? Reach out and I’ll get back to you in no time.
      </Title>

      <Container className={classes.container}>
        {/* FORM */}
        <form className={classes.form} onSubmit={form.onSubmit(() => {})}>
        
          <Title fz="40" order={1} mb="sm" ta="left" style={{ color: "#5b43d6"}}>
            Get in touch <IconShare size="40" style={{ marginLeft: "220px", marginBottom: "-5px"}}/>
          </Title>

          <Title ta="left" fz="15" fw="200">
            Drop me a message and let’s start the conversation.
          </Title>

          <Stack gap="md" mt="xl">
            <TextInput
              placeholder="Your name"
              name="name"
              variant="filled"
              className={classes.input}
              {...form.getInputProps('name')}
            />
            <TextInput
              placeholder="Your email"
              name="email"
              variant="filled"
              className={classes.input}
              {...form.getInputProps('email')}
            />
            <Textarea
              placeholder="Your message"
              maxRows={10}
              minRows={5}
              autosize
              name="message"
              variant="filled"
              className={classes.input}
              {...form.getInputProps('message')}
            />
          </Stack>

          <Group justify="center" mt="xl">
            <Button type="submit" size="md" color="#5b43d6"
                    className={classes.sendMsgBtn} leftSection={<IconSend/>}>
              Send message
            </Button>
          </Group>
        </form>

      <hr className={classes.hr}/>

      {/* CONNECT */}
      <Group className={classes.connect} mt="xl" ml="xl">

        <Title size="h4" mb="sm" ml="md">
          Connect with me
        </Title>

        {/* LinkedIn box */}
        <Box className={`${classes.socialBox} ${classes.linkedinBox}`}
              component="a" href="https://www.linkedin.com/in/vladislav-yatsenko/"
              target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin size={40} />
          <Stack spacing={0} ml="md">
            <Title size="h4" fw={500}>
              Let’s connect
            </Title>
            <Title size="sm" fz="15" c="dimmed" mr="md">
              on LinkedIn
            </Title>
          </Stack>
        </Box>

        {/* GitHub box */}
        <Box className={classes.socialBox}
              component="a" href="https://www.linkedin.com/in/vladislav-yatsenko/"
              target="_blank" rel="noopener noreferrer">
          <IconBrandGithub size={40} />
          <Stack spacing={0} ml="md">
            <Title size="h4" fw={500} mr="xl">
              GitHub
            </Title>
            <Title size="sm" fz="15" c="dimmed">
              @vyatsenk0
            </Title>
          </Stack>
        </Box>

      </Group>

      </Container>
    </Container>
    
  );
}