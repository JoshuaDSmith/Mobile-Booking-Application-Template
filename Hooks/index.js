import {useState} from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState('');
  const [saveValue, setSavedValue] = useState('');

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChangeText: e => {
      setValue(e);
    },
  };

  const commit = {
    value,
    onPress: e => {
      setSavedValue(e);
    },
  };

  const Numericbind = {
    value,
    onChangeText: e => {
      setValue(e.target.value);
      if (e.target.value.length > 10) {
        console.log('stop');
      }
    },
  };

  return [value, bind, reset, commit, Numericbind];
}

export default useInput;
