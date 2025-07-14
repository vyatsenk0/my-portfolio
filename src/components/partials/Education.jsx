import { useState } from 'react';
import { Box, Text, ActionIcon, Container } from '@mantine/core';
import { IconX, IconArrowsMaximize } from '@tabler/icons-react';
import classes from './Certificates.module.css';

const diploma = {
  title: 'Bachelor of Computer Science',
  image: '/diploma/diploma.jpg',
};

export function Education() {
  const [active, setActive] = useState(false);
  const handleClose = () => setActive(false);

  return (
    <>
      {/* Centered diploma card */}
      <Container size="sm" mt="xl" style={{ display: 'flex', justifyContent: 'center' }}>
        <Box className={classes.certificateBox} onClick={() => setActive(true)}>
          <img
            src={diploma.image}
            alt={diploma.title}
            className={classes.certificateImage}
          />
          <div className={classes.overlay}>
            <IconArrowsMaximize color="white"/>
            <Text className={classes.viewText}>View Diploma</Text>
          </div>
        </Box>
      </Container>

      {/* Fullscreen viewer */}
      {active && (
        // Close on outer border click
        <div className={classes.fullscreenOverlay} onClick={handleClose}>
          <img
            src={diploma.image}
            alt={diploma.title}
            className={classes.fullscreenImage}
            onClick={(e) => e.stopPropagation()}  // Don't close on image click
          />
            {/* Close Icon */}
          <ActionIcon
            onClick={handleClose}
            variant="filled"
            size="xl"
            radius="xl"
            color="#5c5b5b"
            style={{
              position: 'fixed',
              top: 80,
              right: 380,
              color: 'white',
              zIndex: 10000,
            }}
          >
            <IconX size={25} />
          </ActionIcon>
        </div>
      )}
    </>
  );
}
