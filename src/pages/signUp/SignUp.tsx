import React from "react";
import { Field, reduxForm } from "redux-form";
import validator from "validator";
import "./SignUp.css";

interface renderFieldType {
  input: any;
  label: any;
  type: any;
  meta: any;
}

//   can move to other component
const renderField: React.FC<renderFieldType> = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const validate = (values: any) => {
  let errors: any = {};
  // console.log(validator.isEmpty(undefined));

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!validator.isEmail(values.email)) {
    // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    errors.email = "Invalid email address";
  }

  if (!values.age) {
    errors.age = "Required";
  } else if (isNaN(Number(values.age))) {
    errors.age = "Must be a number";
  } else if (Number(values.age) < 18) {
    errors.age = "Sorry, you must be at least 18 years old";
  }
  return errors;
};

const warn = (values: any) => {
  let warnings: any = {};
  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }
  return warnings;
};

const SignUp: React.FC = (props: any) => {
  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  const testButton = () => {
    console.log(props);
    // validate();
  };

  return (
    <>
      <button onClick={testButton}>TEST BUTTON</button>
      <div className="centered-form ">
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <Field
                name="email"
                component={renderField}
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <label>Sex</label>
            <div>
              <label>
                <Field name="sex" component="input" type="radio" value="male" />{" "}
                Male
              </label>
              <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="female"
                />{" "}
                Female
              </label>
            </div>
          </div>
          <div>
            <label>Favorite Color</label>
            <div>
              <Field name="favoriteColor" component="select">
                <option />
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </Field>
            </div>
          </div>
          <div>
            <label htmlFor="employed">Employed</label>
            <div>
              <Field
                name="employed"
                id="employed"
                component="input"
                type="checkbox"
              />
            </div>
          </div>
          <div>
            <label>Notes</label>
            <div>
              <Field name="notes" component="textarea" />
            </div>
          </div>
          <div>
            {/*  disabled={pristine || submitting} */}
            <button type="submit">Submit</button>
            <button
              // type="button"
              //   disabled={props.pristine || props.submitting}
              onClick={() => props.reset()}
            >
              Clear Values
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default reduxForm({
  form: "simple", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(SignUp);
