export default {
  Slider: {
    baseStyle: {
      color: '#FFF',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      transition: '400ms ease-in-out',
      thumb: { borderColor: 'neutral.500' },
      filledTrack: { bg: 'primary.500' },
      track: { bg: 'neutral.500' },
    },
    sizes: {
      md: {
        thumb: { w: '32px', h: '32px' },
      },
    },
    variants: {
      secondary: {
        filledTrack: {
          bg: 'neutral.900',
        },
      },
    },
    defaultProps: {
      variant: 'primary',
    },
  },
};
