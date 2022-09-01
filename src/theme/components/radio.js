export default {
  Radio: {
    baseStyle: {
      color: '#FFF',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      transition: '400ms ease-in-out',
    },
    sizes: {
      md: {
        control: {
          width: '20px',
          height: '20px',
        },
      },
    },
    variants: {
      primary: {
        control: {
          _disabled: {
            bg: '#fff',
            borderColor: 'neutral.300',
          },
          _checked: {
            bg: 'primary.500',
            borderColor: 'primary.500',
            _hover: {
              bg: 'primary.500',
              borderColor: 'primary.500',
            },
          },
        },
      },
      secondary: {
        bg: '#FFF',
        border: 'border: 1px solid #CED4DA',
        color: 'neutral.900',
        boxShadow:
          '0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)',
        control: {
          _disabled: {
            bg: '#fff',
            borderColor: 'neutral.900',
            opacity: '0.4',
          },
          _checked: {
            bg: '#fff',
            color: 'neutral.900',
            borderColor: 'neutral.900',
            _hover: {
              bg: '#fff',
              borderColor: 'neutral.900',
            },
            _disabled: {
              bg: '#fff',
              borderColor: 'neutral.900',
              opacity: '0.4',
            },
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
