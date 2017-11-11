import React from 'react';

import TextField from 'material-ui/TextField'
import { FormHelperText } from 'material-ui/Form';

const Input = (props) => {
  const {
    input,
    label,
    meta: {
      touched,
      error
    },
    ...custom
  } = props

  return (
    <div className="input-wrapper">
      <TextField
        label={label}
        error={touched && !!error}
        fullWidth
        {...input}
        {...custom}
      />
      {
        touched && error && (
          <FormHelperText error>
            {error}
          </FormHelperText>
        )
      }
    </div>
  );
}

export default Input;
