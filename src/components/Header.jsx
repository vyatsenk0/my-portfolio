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
  const [active, setActive] = useState("#");
  
  const { setColorScheme } = useMantineColorScheme();
  // -> computedColorScheme is 'light' | 'dark', argument is the default value
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  const items = links.map((link) => (
  <a
    href={link.link}
    key={link.label}
    data-active={active === link.link}
    onClick={() => setActive(link.link)}
  >
    {link.label}
  </a>
));


  return (
    <header className={classes.header}>
     {/* fluid > size */}
      <Container size="lg" className={classes.inner}> 
        <h3>Vladislav Yatsenko</h3>
        <Group gap={5} visibleFrom="xs" className={classes.links}>
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