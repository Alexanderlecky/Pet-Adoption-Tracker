<<<<<<< HEAD
// import React from 'react';
// import '../styles/Signup.css';

// function Signup() {
//   return (
//     <div className="signup-container">
//       <div className="signup-form">
//         <h1>Prestige Properties</h1>
//         <form>
//           <input type="text" placeholder="Email" className="input-field" />
//           <input type="text" placeholder="Username" className="input-field" />
//           <input type="password" placeholder="Password" className="input-field" />
//           <button type="submit" className="signup-btn">Sign Up</button>
//         </form>
//         <div className="divider">
//           <span>OR</span>
//         </div>
//         <button className="signup-fb">Sign up with Facebook</button>
//       </div>
//       <div className="login-link">
//         <p>Have an account? <a href="/login">Log in</a></p>
//       </div>
//     </div>
//   );
// }

// export default Signup;



import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';




const Signup = () => {
 const formik = useFormik({
   initialValues: {
     username: '',
     email: '',
     password: '',
   },
   validationSchema: Yup.object({
     username: Yup.string()
       .required('Username is required')
       .min(3, 'Username must be at least 3 characters long'),
     email: Yup.string()
       .email('Invalid email address')
       .required('Email is required'),
     password: Yup.string()
       .required('Password is required')
       .min(6, 'Password must be at least 6 characters long'),
   }),
   onSubmit: async (values) => {
     try {
       const response = await fetch('http://localhost:5000/signup', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(values),
       });
       const data = await response.json();
       alert(data.message);
     } catch (error) {
       alert('Failed to connect to the server.');
     }
   },
 });


 return (
 <div className='form-container'>
   <form onSubmit={formik.handleSubmit}>
     <h2>Signup</h2>
     <div>
       <label>Username:</label>
       <input
         type="text"
         name="username"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.username}
       />
       {formik.touched.username && formik.errors.username ? (
         <div className="error">{formik.errors.username}</div>
       ) : null}
     </div>
     <div>
       <label>Email:</label>
       <input
         type="email"
         name="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div className="error">{formik.errors.email}</div>
       ) : null}
     </div>
     <div>
       <label>Password:</label>
       <input
         type="password"
         name="password"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       {formik.touched.password && formik.errors.password ? (
         <div className="error">{formik.errors.password}</div>
       ) : null}
     </div>
     <button type="submit">Signup</button>
     <div className="switch-route">
       <p>Already have an account? <Link to="/login">Login</Link></p>
     </div>
   </form>
 </div>
 );
};

=======
import React, { useState } from 'react';
import '../styles/Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user_id);
        window.location.href = '/'; // Redirect after signup
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Error signing up, please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup-btn">Sign Up</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}
>>>>>>> 6e24f03fe32c940ca27ef850248ada6cb20280d3

export default Signup;
