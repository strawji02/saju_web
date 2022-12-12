import { TextInput } from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { Portal } from 'react-portal';
import TimePickerSelection from './TimePickerSelection';

function TimePicker({
  label,
  value: initialValue = null,
  cellHeight = 40,
  placeHolder = 'Select Time',
  pickerDefaultValue = '10:00',
  onChange = () => {},
  onFocus = () => {},
  onSave = () => {},
  onCancel = () => {},
  disabled = false,
  isOpen: initialIsOpenValue = false,
  required = false,
  cancelButtonText = '취소',
  saveButtonText = '확인',
  controllers = true,
  seperator = true,
  id,
  use12Hours = false,
  onAmPmChange = () => {},
  name,
  onOpen = () => {},
  popupClassName,
  inputClassName,
}: {
  label?: string | React.ReactNode;
  value: any;
  cellHeight?: number;
  placeHolder?: string;
  pickerDefaultValue?: string;
  onChange: any;
  onFocus?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
  disabled?: boolean;
  isOpen?: boolean;
  required?: boolean;
  cancelButtonText?: string;
  saveButtonText?: string;
  controllers?: boolean;
  seperator?: boolean;
  id?: string;
  use12Hours?: boolean;
  onAmPmChange?: () => void;
  name?: string;
  onOpen?: () => void;
  popupClassName?: string;
  inputClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(initialIsOpenValue);
  const [height, setHeight] = useState(cellHeight);
  const [inputValue, setInputValue] = useState(initialValue);
  const [scrollLocked, setScrollLocked] = useScrollLock();

  const handleClick = () => {
    setScrollLocked(!isOpen);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setScrollLocked(isOpen);
  }, [isOpen]);

  const handleFocus = () => {
    onFocus();
    onOpen();
  };

  let finalValue = `${inputValue} 오전`;

  if (initialValue === null && use12Hours) {
    finalValue = `${pickerDefaultValue} 오전`;
  } else if (initialValue === null && !use12Hours) {
    finalValue = pickerDefaultValue;
  }

  const params = {
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
    initialValue: finalValue,
    pickerDefaultValue,
  };

  return (
    <>
      <div className="react-ios-time-picker-main" onClick={handleClick}>
        {/* <input
          id={id}
          name={name}
          className={`react-ios-time-picker-input ${inputClassName || ''}`}
          value={inputValue === null ? '' : inputValue}
          type="text"
          placeholder={placeHolder}
          readOnly
          disabled={disabled}
          required={required}
          onFocus={handleFocus}
        /> */}
        <TextInput
          id={id}
          name={name}
          value={initialValue}
          label={label}
          placeholder={placeHolder}
          readOnly
          disabled={disabled}
          required={required}
          onFocus={handleFocus}
          size="lg"
          radius="md"
          styles={{
            root: {
              textAlign: 'left',
            },
          }}
        />
      </div>
      {isOpen && !disabled && (
        <Portal>
          <div className="react-ios-time-picker-popup">
            <div
              className={`react-ios-time-picker-popup-overlay ${
                popupClassName || ''
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />
            <TimePickerSelection {...params} />
          </div>
        </Portal>
      )}
    </>
  );
}

export default TimePicker;
