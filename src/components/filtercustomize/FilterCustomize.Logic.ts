import { useState } from 'react';

export const FilterCustomizeLogic = () => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openDropdownShift, setOpenDropdownShift] = useState(false);
  const [date, setDate] = useState(new Date('2023-01-01'));
  const [value, setValue] = useState('Default');

  const formattedDate = date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return {openDatePicker, setOpenDatePicker, openDropdownShift, setOpenDropdownShift, formattedDate, date, setDate, value, setValue};
}