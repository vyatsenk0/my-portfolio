import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Paper
      elevation={3}
      square
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(6px)',
        px: 4,
        py: 1.5,
        opacity: 0.6
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left side: Name */}
        <Typography variant="h6" fontWeight="bold">
          Vladislav Yatsenko
        </Typography>

        {/* Right side: Breadcrumb links */}
        <Breadcrumbs separator="/" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#Home">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#About">
            About
          </Link>
          <Link underline="hover" color="inherit" href="#Portfolio">
            Portfolio
          </Link>
          <Link underline="hover" color="inherit" href="#Contact">
            Contact
          </Link>
        </Breadcrumbs>
      </Box>
    </Paper>
  );
}

export default Header;
