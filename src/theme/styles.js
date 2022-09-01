import { mode } from '@chakra-ui/theme-tools';

export default {
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.50', 'gray.900')(props),
        color: mode('neutral.900', 'neutral.200')(props),
      },
      h1: {
        fontSize: '60px',
        fontWeight: '700',
        lineHeight: '72px',
        letterSpacing: '0.0075em',
      },
      h2: {
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: '64px',
      },
      h3: {
        fontSize: '40px',
        fontWeight: '500',
        lineHeight: '48px',
      },
    }),
  },
};
