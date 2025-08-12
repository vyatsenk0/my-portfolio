import { useState, useEffect } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';


const links = [
  { link: '#home', label: 'Home' },
  { link: '#about', label: 'About' },
  { link: '#portfolio', label: 'Portfolio' },
  { link: '#contact', label: 'Contact' },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState("#home");
  
  const { setColorScheme } = useMantineColorScheme();
  // -> computedColorScheme is 'light' | 'dark', argument is the default value
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  // Detect section in view while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80; // offset for fixed header

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.querySelector(links[i].link);
        if (section && section.offsetTop <= scrollPosition) {
          setActive(links[i].link);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <Container fluid className={classes.inner}> 
        <a href="#" className={classes.gradientText}>
          <h3>Vladislav Yatsenko</h3>
        </a>
        <Group gap={5} visibleFrom="xs" className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        
        {/* Light Mode */}
        <ActionIcon
          className={classes.lightMode}
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