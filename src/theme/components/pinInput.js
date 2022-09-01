import inputStyles from './input';

export default {
  PinInput: {
    baseStyle: {
      ...inputStyles.Input.baseStyle,
    },
    variants: {
      outline: {
        ...inputStyles.Input.variants.outline.field,
      },
      'pill-shaped': {
        ...inputStyles.Input.variants['pill-shaped'].field,
      },
    },
  },
};
