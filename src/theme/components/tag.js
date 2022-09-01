export default {
  Tag: {
    baseStyle: {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      transition: '400ms ease-in-out',
      label: { color: 'neutral.900' },
      closeButton: { opacity: '1', color: 'neutral.500' },
    },
    sizes: {
      sm: {
        container: {
          padding: '6px 12px',
        },
      },
      md: {
        container: {
          padding: '8px 20px',
        },
      },
      lg: {
        container: {
          padding: '12px 24px',
        },
      },
    },
    variants: {
      subtle: {
        container: {
          bg: 'neutral.200',
          borderRadius: '100px',
          _hover: {
            bg: 'neutral.400',
          },
        },
        closeButton: {
          _disabled: {
            cursor: 'not-allowed',
          },
        },
      },
    },
  },
};
