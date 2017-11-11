import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';

const Home = (props) => {
  const { handleSubmit } = props;

  const sendDataToApi = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h2>Simple home form</h2>
      <form onSubmit={handleSubmit(sendDataToApi)}>
        <Field
          name="firstName"
          component="input"
          placeholder="Put your name here"
        />
        <Button
          raised
          color="primary"
          type="submit"
        >
          Submit form
        </Button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'simple-form'
})(Home);
