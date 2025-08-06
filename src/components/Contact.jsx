import { Button, Group, SimpleGrid, Textarea, TextInput, Title, Container, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSend } from '@tabler/icons-react';

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
      <Title fz="50" order={1} mb="sm" style={{
            background: 'linear-gradient(to right, #2172f4, #5b43d6, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',

            }}>
        Contact Me
      </Title>
      <Title size="h6" style={{paddingBottom: '40px'}}>
        Got something to ask? Reach out and I’ll get back to you in no time.
      </Title>
      <Container className={classes.container}>
      
        <form className={classes.form} onSubmit={form.onSubmit(() => {})}>
        

          <Title fz="40" order={1} mb="sm" ta="left" style={{
            background: 'linear-gradient(to right, #2172f4, #5b43d6, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',

            }}>
            Get in touch
          </Title>

          <Title size="h6"  ta="left">
            Drop me a message and let’s start the conversation.
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
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
          </SimpleGrid>

          <Textarea
            mt="md"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            className={classes.input}
            {...form.getInputProps('message')}
          />
          

          <Group justify="center" mt="xl">
            <Button type="submit" size="md" color="#5b43d6" leftSection={<IconSend/>}>
              Send message
            </Button>
          </Group>
        </form>

      <hr/>

      <Group className={classes.connect}>
        <Title size="h4">
          Connect with me
        </Title>

        <Box>
          Let's connect
          on Linkedin
        </Box>
        <Box>
          Github
          @githubNickname
        </Box>
      </Group>

      </Container>
    </Container>
    
  );
}