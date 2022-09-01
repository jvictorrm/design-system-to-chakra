export default {
  Switch: {
    baseStyle: {
      color: '#FFF',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      transition: '400ms ease-in-out',
    },
    variants: {
      primary: {
        track: {
          _checked: {
            bg: 'primary.500',
          },
          _disabled: {
            bg: 'neutral.500',
          },
        },
      },
      secondary: {
        track: {
          _checked: {
            bg: 'neutral.900',
          },
        },
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'primary',
    },
  },
};
