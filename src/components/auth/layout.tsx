import * as React from 'react';
import RouterLink from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from '@/paths';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'grid' },
        flexDirection: 'column',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100%',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          background: 'radial-gradient(50% 50% at 50% 50%, #3FA9F5 0%, #B7CFFF 100%)',
          color: 'var(--mui-palette-common-white)',
          display: { xs: 'none', lg: 'flex' },
          justifyContent: 'center',
          p: 3,
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography color="black" sx={{ fontSize: '24px', lineHeight: '32px', textAlign: 'center' }} variant="h1">
              Selamat Datang di{' '}
              <Box component="span" sx={{ color: '#ED1C24' }}>
                Big
              </Box>
              <Box component="span" sx={{ color: '#F15A24' }}>
                One Stream
              </Box>
            </Typography>
            <Typography color="darkslategrey" align="center" variant="subtitle1">
              Inovasi AI untuk Keputusan Bisnis Akurat Berbasis Data
            </Typography>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Box
              component="img"
              alt="BigBox Logo"
              src="/assets/bigbox-logo.svg"
              sx={{ height: 'auto', width: '100%', maxWidth: '300px' }}
            />
          </Box>
        </Stack>
      </Box>
      <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
        <Box sx={{ p: 3 }}>
          <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-block', fontSize: 0 }}>
            <Box
              component="img"
              alt="BigBox Logo"
              src="/assets/bigbox-long-logo.svg"
              sx={{ height: '32px', width: '122px' }}
            />
          </Box>
        </Box>
        <Box sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto', justifyContent: 'center', p: 3 }}>
          <Box sx={{ maxWidth: '450px', width: '100%' }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}
