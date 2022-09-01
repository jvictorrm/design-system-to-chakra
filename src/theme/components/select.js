import inputStyles from './input';

export default {
  Select: {
    baseStyle: {
      field: {
        ...inputStyles.Input.baseStyle,
      },
    },
    variants: {
      outline: {
        field: {
          ...inputStyles.Input.variants.outline.field,
        },
      },
      'pill-shaped': {
        field: {
          ...inputStyles.Input.variants['pill-shaped'].field,
        },
      },
    },
  },
};
