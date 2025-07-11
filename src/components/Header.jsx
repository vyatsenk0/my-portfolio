import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';


const links = [
  { link: '#', label: 'Home' },
  { link: '#about', label: 'About' },
  { link: '#portfolio', label: 'Portfolio' },
  { link: '#contact', label: 'Contact' },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        // event.preventDefault(); remove to allow native scroll
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
     {/* fluid > size */}
      <Container size="lg" className={classes.inner}> 
        <h3>Vladislav Yatsenko</h3>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        
        {/* Light Mode */}
        <ActionIcon
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </Container>
    </header>
  );
}