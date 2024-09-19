import { useFormik } from "formik";
import { useState } from "react";
import { signUpSchema } from "../schema/index";import heroImg from '../assets/hero.jpeg'

const FormVal = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        setIsSubmitted(true);
        setSubmittedData(values);
        action.resetForm();
      },
    });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
     
        { isSubmitted ?  (
          <div className="p-8 md:p-12 bg bg-white rounded-2xl">
            <h1 className="text-3xl font-bold text-green-600 mb-4">Registration Successful!</h1>
            <p className="text-gray-600 mb-8">Thank you for registering. Here are your details:</p>
            <div className="space-y-4">
              <div>
                <strong>Name:</strong> {submittedData.name}
              </div>
              <div>
                <strong>Email:</strong> {submittedData.email}
              </div>
            </div>
          </div>
        ) :
        (<div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-bold text-orange-600 mb-4">Welcome!</h1>
          <p className="text-gray-600 mb-8">Sign Up for your account.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 block w-full px-4 py-2 rounded-md shadow-sm border ${
                  errors.name && touched.name ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-orange-500`}
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 block w-full px-4 py-2 rounded-md shadow-sm border ${
                  errors.email && touched.email ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-orange-500`}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 block w-full px-4 py-2 rounded-md shadow-sm border ${
                  errors.password && touched.password ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-orange-500`}
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirm_password" className="block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 block w-full px-4 py-2 rounded-md shadow-sm border ${
                  errors.confirm_password && touched.confirm_password ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-orange-500`}
              />
              {errors.confirm_password && touched.confirm_password && (
                <p className="text-red-500 text-xs mt-1">{errors.confirm_password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between mt-6">
              <a href="#" className="text-sm text-gray-500 hover:text-orange-600">
                Register using Gmail?
              </a>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md shadow-lg transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isValid}
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold">
              Sign In now
            </a>
          </p>
        </div>

        <div className="hidden md:block">
          <img
            src={heroImg}
            alt="Login"
            className="h-full w-full object-cover rounded-r-lg"
          />
        </div> 
      </div>
      )
     }
      </div>
  );
};

export default FormVal;
