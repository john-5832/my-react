import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = (props) => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
    props.onSubmit(data);
  };

  const registerOptions = {
    name: { 
      required: "Name is required",
      pattern: {
        value: /^[a-zA-Z ]{2,30}$/,
        message: "Enter a valid Name"
      }
    },
    username: { 
      required: "Username is required",
    },
    email: { 
      required: "Email is required",
      pattern: {
        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        message: "Invalid email address"
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: "Invalid password"
      }
    },
    cpassword: {
      required: "Password confirmation is required",
      validate: (value) => value === getValues("password") || "Passwords do not match",
    },
    number: {
      required: "Phone number is required",
      pattern: {
        value: /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/,
        message: "Invalid phone number"
      }
    },
    gender: {
      required: "Gender is required",
    },
    terms: {
      required: 'Please accept the terms and conditions',
    },
  };

  return (
    <div className="container">
      <div className="title">Registration</div>
      <form className="form" onSubmit={handleSubmit(handleRegistration)}>
        <div className="user-details">
          <div>
            <label className="details">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
              {...register('name', registerOptions.name)}
            />
            <div className="text-danger">
              {errors?.name && errors.name.message}
            </div>
          </div>

          <div>
            <label className="details">Username</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your username"
              {...register('username', registerOptions.username)}
            />
            <div className="text-danger">
              {errors?.username && errors.username.message}
            </div>
          </div>

          <div>
            <label className="details">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
              {...register('email', registerOptions.email)}
            />
            <div className="text-danger">
              {errors?.email && errors.email.message}
            </div>
          </div>

          <div>
            <label className="details">Phone Number</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your phone number"
              {...register('number', registerOptions.number)}
            />
            <div className="text-danger">
              {errors?.number && errors.number.message}
            </div>
          </div>

          <div>
            <label className="details">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
              {...register('password', registerOptions.password)}
            />
            <div className="text-danger">
              {errors?.password && errors.password.message}
            </div>
          </div>

          <div>
            <label className="details">Confirm Password</label>
            <input
              type="password"
              className="input"
              placeholder="Confirm your password"
              {...register('cpassword', registerOptions.cpassword)}
            />
            <div className="text-danger">
              {errors?.cpassword && errors.cpassword.message}
            </div>
          </div>

          <div>
            <label className="details">Gender</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="male"
                  {...register('gender', registerOptions.gender)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  {...register('gender', registerOptions.gender)}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  value="other"
                  {...register('gender', registerOptions.gender)}
                />
                Other
              </label>
            </div>
            <div className="text-danger">
              {errors?.gender && errors.gender.message}
            </div>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                {...register('terms', registerOptions.terms)}
              />
              Accept Terms and Conditions
            </label>
            <div className="text-danger">
              {errors?.terms && errors.terms.message}
            </div>
          </div>

          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
