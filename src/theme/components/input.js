const variantsCommonsProps = {
  border: '1px solid',
  borderColor: 'neutral.400',
  boxShadow:
    '0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)',
  _focus: {
    border: '2px solid',
    borderColor: 'tertiary.500',
    boxShadow:
      '0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)',
  },
  _focusVisible: {
    border: 'none',
    boxShadow: 'unset',
    zIndex: '0',
  },
  _disabled: {
    cursor: 'not-allowed',
    bg: 'neutral.100',
    opacity: '1',
  },
  _invalid: {
    border: '2px solid',
    borderColor: 'secondary.500 !important',
    boxShadow:
      '0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)',
  },
};

export default {
  Input: {
    baseStyle: {
      field: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        padding: '5px 16px',
        color: 'neutral.900',
        _placeholder: {
          color: 'neutral.900',
          opacity: '0.56',
        },
      },
    },
    variants: {
      outline: {
        field: {
          ...variantsCommonsProps,
          borderRadius: '8px',
        },
      },
      'pill-shaped': {
        field: {
          ...variantsCommonsProps,
          borderRadius: '100px',
          _focus: {
            border: '2px solid',
            borderColor: 'tertiary.500',
            boxShadow:
              '0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)',
          },
          _focusVisible: {},
          _disabled: {
            ...variantsCommonsProps._disabled,
            cursor: 'not-allowed',
          },
        },
      },
    },
  },
};
