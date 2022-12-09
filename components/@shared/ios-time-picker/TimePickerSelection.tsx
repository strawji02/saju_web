import React, { useEffect, useState } from 'react';
import HourFormat from './HourFormat';
import HourWheel from './HourWheel';
import MinuteWheel from './MinuteWheel';

function TimePickerSelection({
  pickerDefaultValue,
  initialValue,
  onChange,
  height,
  onSave,
  onCancel,
  cancelButtonText,
  saveButtonText,
  controllers,
  setInputValue,
  setIsOpen,
  seperator,
  use12Hours,
  onAmPmChange,
}: any) {
  const initialTimeValue = use12Hours ? initialValue.slice(0, 5) : initialValue;
  const [value, setValue] = useState(
    initialValue === null ? pickerDefaultValue : initialTimeValue
  );
  const [hourFormat, setHourFormat] = useState({
    mount: false,
    hourFormat: initialValue.slice(6, 8),
  });

  useEffect(() => {
    if (controllers === false) {
      const finalSelectedValue = use12Hours
        ? `${value} ${hourFormat.hourFormat}`
        : value;
      setInputValue(finalSelectedValue);
      onChange(finalSelectedValue);
    }
  }, [value]);

  useEffect(() => {
    if (hourFormat.mount) {
      onAmPmChange(hourFormat.hourFormat);
    }
  }, [hourFormat]);

  const params = {
    height,
    value,
    setValue,
    controllers,
    use12Hours,
    onAmPmChange,
    setHourFormat,
    hourFormat,
  };

  const handleSave = () => {
    const finalSelectedValue = use12Hours
      ? `${value} ${hourFormat.hourFormat}`
      : value;
    setInputValue(finalSelectedValue);
    onChange(finalSelectedValue);
    onSave(finalSelectedValue);
    setIsOpen(false);
  };
  const handleCancel = () => {
    onCancel();
    setIsOpen(false);
  };

  return (
    <div className="react-ios-time-picker  react-ios-time-picker-transition">
      <div className="react-ios-time-picker-topbar">시간을 선택하세요.</div>
      <div
        className="react-ios-time-picker-container"
        style={{ height: `${height * 5 + 40}px` }}
      >
        <div
          className="react-ios-time-picker-selected-overlay"
          style={{
            top: `${height * 2 + 20}px`,
            height: `${height}px`,
          }}
        />
        {use12Hours && <HourFormat {...params} />}
        <HourWheel {...params} />
        {seperator && <div className="react-ios-time-picker-colon">:</div>}
        <MinuteWheel {...params} />
      </div>
      {controllers && (
        <div className="react-ios-time-picker-btn-container">
          <button className="react-ios-time-picker-btn " onClick={handleCancel}>
            {cancelButtonText}
          </button>
          <button
            className="react-ios-time-picker-btn react-ios-time-picker-btn-save"
            onClick={handleSave}
          >
            {saveButtonText}
          </button>
        </div>
      )}
    </div>
  );
}

export default TimePickerSelection;
