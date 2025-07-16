import { useState } from 'react';
import { SimpleGrid, Box, Text, ActionIcon } from '@mantine/core';
import { IconX, IconArrowsMaximize } from '@tabler/icons-react';
import classes from './Certificates.module.css';

const certificates = [
  { title: 'Cybersecurity Certificate', image: '/certs/cybersecurity.jpg' },
  { title: 'Docker Certificate', image: '/certs/docker.jpg' },
  { title: 'Azure AI Certificate', image: '/certs/azureAI.jpg' },
];

export function Certificates() {
  const [activeCert, setActiveCert] = useState(null);
  const handleClose = () => setActiveCert(null);

  return (
    <>
      {/* Certificate Grid */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="xl">
        {certificates.map((cert) => (
          <Box
            key={cert.title}
            className={classes.certificateBox}
            onClick={() => setActiveCert(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className={classes.certificateImage}
            />
            <div className={classes.overlay}>
              <IconArrowsMaximize color="white"/>
              <Text className={classes.viewText}>View Certificate</Text>
            </div>
          </Box>
        ))}
      </SimpleGrid>

      {/* Fullscreen Overlay */}
      {activeCert && (
        // Close on outer border click
        <div className={classes.fullscreenOverlay} onClick={handleClose}> 
          <img
            src={activeCert.image}
            alt={activeCert.title}
            className={classes.fullscreenImage}
            onClick={(e) => e.stopPropagation()} // Don't close on image click
          />

          {/* Close Icon */}
          <ActionIcon
            onClick={handleClose}
            variant="filled"
            size="xl"
            radius="xl"
            color="#5c5b5b"
            style={{  // required to be inline for a proper icon
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
