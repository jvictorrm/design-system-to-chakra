import select from '../select';

export default {
  ReactSelect: {
    baseStyle: {
      container: {
        width: '100%',
      },
      control: {
        ...select.Select.baseStyle.field.field,
        padding: 0,
      },
      valueContainer: {
        padding: select.Select.baseStyle.field.field.padding,
      },
      placeholder: {
        ...select.Select.baseStyle.field.field._placeholder,
        color: 'neutral.900',
        opacity: 1,
        margin: 0,
      },
      dropdownIndicator: {
        color: 'neutral.900',
        opacity: 1,
        '&:hover': {
          color: 'neutral.900',
        },
      },
      input: {
        margin: 0,
        padding: 0,
      },
      menu: {
        color: 'neutral.900',
        borderRadius: '0',
        bg: '#fff',
      },
      indicatorSeparator: {
        display: 'none',
      },
    },
    variants: {
      outline: {
        control: {
          ...select.Select.variants.outline.field,
          border: '1px solid',
          boxShadow: 'none',
          borderColor: `${select.Select.variants.outline.field.borderColor} !important`,
          '&:hover': {},
        },
      },
    },
    defaultProps: {
      variant: 'outline',
    },
  },
};
