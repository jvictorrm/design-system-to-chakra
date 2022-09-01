import { Box, Input, useToken } from '@chakra-ui/react';
import DatePicker from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';

const CustomInput = ({ value, openCalendar, handleValueChange }) => (
  <Input
    placeholder="Placeholder"
    onFocus={openCalendar}
    onChange={handleValueChange}
    value={value}
    readOnly
  />
);

export const ReactMultiDatePicker = ({ name, label, onChange, ...rest }) => {
  const [datePickerBg] = useToken('colors', ['datePickerBg']);

  return (
    <Box
      sx={{
        '.custom-calendar.rmdp-wrapper, .rmdp-container .custom-calendar.ep-arrow::after':
          {
            bg: datePickerBg,
          },
      }}
    >
      <DatePicker
        className="custom-calendar"
        format="YYYY-MM-DD"
        plugins={[<DatePanel />]}
        onChange={onChange}
        render={<CustomInput />}
        {...rest}
      />
    </Box>
  );
};
