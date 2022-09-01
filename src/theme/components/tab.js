export default {
  Tabs: {
    baseStyle: {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '28px',
      transition: '400ms ease-in-out',
      tab: {
        color: 'neutral.900',
        _hover: {
          color: 'purple.500',
          _disabled: {
            color: 'neutral.900',
          },
        },
        _selected: {
          color: 'purple.500',
        },
        _focus: {
          textDecorationLine: 'underline',
        },
        _disabled: {
          color: 'neutral.900',
        },
      },
    },
    defaultProps: {
      variant: 'unstyled',
    },
  },
};
