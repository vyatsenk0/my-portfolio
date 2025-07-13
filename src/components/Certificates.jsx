import { useState } from 'react';
import { SimpleGrid, Box, Text, ActionIcon } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
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
              <Text className={classes.viewText}>View Certificate</Text>
            </div>
          </Box>
        ))}
      </SimpleGrid>

 {/* Fullscreen Overlay */}
      {activeCert && (
        <div className={classes.fullscreenOverlay} onClick={handleClose}>
          <img
            src={activeCert.image}
            alt={activeCert.title}
            className={classes.fullscreenImage}
            onClick={(e) => e.stopPropagation()} // Don't close on image click
          />
          <ActionIcon
            onClick={handleClose}
            variant="filled"
            size="xl"
            radius="xl"
            className={classes.closeIcon}
          >
            <IconX size={25} />
          </ActionIcon>
        </div>
      )}
    </>
  );
}
