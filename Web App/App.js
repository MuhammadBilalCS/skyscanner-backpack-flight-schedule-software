import React, { useState } from 'react';
import BpkCalendar from '@skyscanner/backpack-web/bpk-component-calendar';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);
const daysOfWeek = [
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
];

const formatDateFull = (date) =>
  date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

const formatMonth = (date) =>
  date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });


const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
  <div className={getClassName('App')}>
    <header className={getClassName('App__header')}>
      <div className={getClassName('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
      </div>
    </header>
    <main className={getClassName('App__main')}>
      <BpkCalendar
  id="flight-schedule-calendar"
  daysOfWeek={daysOfWeek}
  weekStartsOn={1}
  formatDateFull={formatDateFull}
  formatMonth={formatMonth}
  changeMonthLabel="Change month"
  nextMonthLabel="Next month"
  previousMonthLabel="Previous month"
  month={currentMonth}
  onMonthChange={(event, { month }) => setCurrentMonth(month)}
  onDateSelect={setSelectedDate}
  date={selectedDate}
/>
      <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
    </main>
   </div>
  );
};

export default App;

