import inputStyles from './input';

export default {
  NumberInput: {
    baseStyle: {
      root: {
        width: '100%',
      },
      field: {
        width: '100%',
        maxWidth: '100%',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        padding: '10px 16px',
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
          ...inputStyles.Input.variants.outline.field,
          borderRadius: '8px',
        },
      },
      'pill-shaped': {
        field: {
          ...inputStyles.Input.variants['pill-shaped'].field,
          borderRadius: '100px',
          _focus: {
            border: '2px solid',
            borderColor: 'tertiary.500',
            boxShadow:
              '0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)',
          },
          _focusVisible: {},
          _disabled: {
            ...inputStyles.Input.variants['pill-shaped'].field._disabled,
            cursor: 'not-allowed',
          },
        },
      },
    },
  },
};
