export default {
  Button: {
    baseStyle: {
      color: 'neutral.100',
      borderRadius: '100px',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      transition: '400ms ease-in-out',
    },
    variants: {
      primary: {
        bg: 'primary.500',
        sm: {
          padding: '6px 12px',
        },
        md: {
          padding: '8px 20px',
        },
        lg: {
          padding: '12px 24px',
        },
        _hover: {
          bg: 'primary.700',
          _active: {
            bg: 'primary.800',
          },
          _disabled: {
            bg: 'primary.500',
            opacity: '0.4',
          },
        },
        _active: {
          bg: 'primary.800',
          _disabled: {
            bg: 'primary.500',
            opacity: '0.4',
          },
        },
        _focus: {
          bg: 'primary.500',
          outline: 'unset',
          _hover: {
            bg: 'primary.700',
          },
        },
      },
      secondary: {
        bg: '#FFF',
        border: 'border: 1px solid #CED4DA',
        color: 'neutral.900',
        boxShadow:
          '0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)',
        sm: {
          padding: '6px 12px',
        },
        md: {
          padding: '8px 20px',
        },
        lg: {
          padding: '12px 24px',
        },
        _active: {
          bg: 'neutral.300',
          _disabled: {
            bg: '#FFF',
            opacity: '0.4',
          },
        },
        _hover: {
          bg: 'neutral.100',
          _active: {
            bg: 'neutral.300',
          },
          _disabled: {
            bg: '#FFF',
            opacity: '0.4',
          },
        },
        _focus: {
          bg: '#FFF',
          outline: 'unset',
          _hover: {
            bg: 'neutral.300',
          },
        },
      },
      tertiary: {
        bg: 'transparent',
        borderRadius: 'unset',
        padding: '0px',
        color: 'neutral.700',
        _disabled: {
          color: 'neutral.900',
          opacity: '0.4',
        },
        _hover: {
          color: 'primary.500',
          _disabled: {
            color: 'neutral.900',
            opacity: '0.4',
          },
        },
        _focus: {
          color: 'primary.500',
          textDecorationLine: 'underline',
          outline: 'unset',
        },
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'primary',
    },
  },
};
