import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';

import Input from '../../components/Input'

const Validation = (props) => {
  const { handleSubmit, dirty, reset, submitting, submitFailed, submitSucceeded } = props;

  const sendDataToApi = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(formData);
        resolve();
      }, 2000);
    })
  };

  return (
    <div>
      <h2>Validation form</h2>
      <form onSubmit={handleSubmit(sendDataToApi)}>
        <div className="check-labels">
          Submit success:
          <Chip className={submitSucceeded ? 'active' : 'inactive'} label={`${submitSucceeded}`} />
        </div>
        <div className="check-labels">
          Submit failure:
          <Chip className={submitFailed ? 'active' : 'inactive'} label={`${submitFailed}`} />
        </div>
        <Field
          name="firstName"
          component={Input}
          label="First Name"
        />
        <Field
          name="email"
          component={Input}
          type="email"
          label="Email"
        />
        <Field
          name="age"
          component={Input}
          type="number"
          label="Age"
        />
        <Button
          onClick={reset}
          type="button"
          disabled={!dirty || submitting}
        >
          Reset form
        </Button>
        <Button
          raised
          color="primary"
          type="submit"
          disabled={!dirty || submitting}
        >
          Submit form
        </Button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'validation',
})(Validation);
