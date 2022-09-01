import { css, useStyleConfig, useTheme, useToken } from '@chakra-ui/react';
import Select from 'react-select';

export const ReactSelect = (props) => {
  const emotionStyles = useStyleConfig('ReactSelect', props);
  const [tertiary500, blue400] = useToken('colors', [
    'tertiary.500',
    'blue.400',
  ]);

  const selectStyle = {
    container: (styles, { theme }) => ({
      ...styles,
      ...theme.container,
    }),
    control: (styles, { isDisabled, isFocused, theme }) => ({
      ...styles,
      ...theme.control,
      ...(isDisabled && {
        cursor: 'not-allowed',
        pointerEvents: 'auto',
      }),
      ...(isFocused && {
        border: '2px solid',
        borderColor: `${tertiary500} !important`,
        boxShadow: 'none',
      }),
    }),
    valueContainer: (styles, { theme }) => ({
      ...styles,
      ...theme.valueContainer,
    }),
    input: (styles, { theme }) => ({
      ...styles,
      ...theme.input,
    }),
    placeholder: (styles, { theme }) => ({
      ...styles,
      ...theme.placeholder,
    }),
    menu: (styles, { theme }) => ({
      ...styles,
      ...theme.menu,
    }),
    dropdownIndicator: (styles, { theme }) => ({
      ...styles,
      ...theme.dropdownIndicator,
    }),
    indicatorSeparator: (styles, { theme }) => ({
      ...styles,
      ...theme.indicatorSeparator,
    }),
    option: (styles, { isFocused, theme }) => ({
      ...styles,
      ...theme.option,
      ...(isFocused && {
        backgroundColor: isFocused ? blue400 : null,
        color: isFocused ? '#fff' : null,
      }),
    }),
  };

  return (
    <Select
      theme={css(emotionStyles)(useTheme())}
      styles={selectStyle}
      placeholder="Select option"
      {...props}
    />
  );
};
