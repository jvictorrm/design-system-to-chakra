import { extendTheme } from '@chakra-ui/react';
import globalStyles from './styles';
import textStyles from './components/text';
import buttonStyles from './components/button';
import checkboxStyles from './components/checkbox';
import radioStyles from './components/radio';
import switchStyles from './components/switch';
import sliderStyles from './components/slider';
import rangeSliderStyles from './components/rangeSlider';
import tagStyles from './components/tag';
import tabStyles from './components/tab';
import inputStyles from './components/input';
import numberInputStyles from './components/numberInput';
import pinInputStyles from './components/pinInput';
import selectStyles from './components/select';
import tableStyles from './components/table';
import alertStyles from './components/alert';
import reactSelectStyles from './components/thirdParty/reactSelect';
import colorsSchemesStyles from './foundations/colors';

const customTheme = extendTheme({
  ...globalStyles,
  ...colorsSchemesStyles,
  components: {
    ...textStyles,
    ...buttonStyles,
    ...checkboxStyles,
    ...radioStyles,
    ...switchStyles,
    ...sliderStyles,
    ...rangeSliderStyles,
    ...tagStyles,
    ...tabStyles,
    ...inputStyles,
    ...numberInputStyles,
    ...pinInputStyles,
    ...selectStyles,
    ...tableStyles,
    ...alertStyles,
    ...reactSelectStyles,
  },
  semanticTokens: {
    colors: {
      datePickerBg: {
        default: 'red.600',
        _dark: 'green.300',
      },
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
});

export default customTheme;
