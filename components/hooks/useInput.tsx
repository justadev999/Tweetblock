import React, { ChangeEvent, useState } from 'react';

interface IuseInputProps {
  userInput: string;
}

const useInput = ({ userInput }: IuseInputProps) => {
  const [value, setValue] = useState(userInput);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return {
    value,
    userInput: handleChange,
  };
};

export default useInput;

// ChangeEvent<HTMLInputElement>
