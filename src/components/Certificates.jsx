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
              style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
            />
             <div className={classes.overlay}>
              <Text className={classes.viewText}>View Certificate</Text>
            </div>
          </Box>
        ))}
      </SimpleGrid>

      {/* Fullscreen Overlay */}
      {activeCert && (
        <div
          onClick={handleClose} // Close on outer border click
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer',
          }}
        >
          <img
            src={activeCert.image}
            alt={activeCert.title}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: 8,
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()} // Don't close on image click
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
