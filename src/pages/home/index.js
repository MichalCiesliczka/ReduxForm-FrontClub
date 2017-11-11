import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';

const Home = (props) => {
  const { handleSubmit, dirty, reset, submitting } = props;

  const sendDataToApi = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(formData);
        reject();
      }, 2000);
    })
  };

  return (
    <div>
      <h2>Simple home form</h2>
      <form className="mui-form" onSubmit={handleSubmit(sendDataToApi)}>
        <Field
          name="firstName"
          component="input"
          placeholder="Put your name here"
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
  form: 'simple-form'
})(Home);
