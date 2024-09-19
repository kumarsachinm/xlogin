// import { useState } from 'react';

// function App() {

//   const [inputs, setInputs] = useState({username: "", password:""});
//   const [submittedData, setSubmittedData] = useState(null);

// const handleSubmit = (e) => {
//   e.preventDefault(); // Prevent default form submission
//     setSubmittedData(inputs);
//     if ((submittedData.username === "user") &&  (submittedData.password === "password"))
//       console.log('user password matches');
//       return true;
// }
// const handleChange = (e) => {
//   setInputs({
//     ...inputs,
//     [e.target.name]: e.target.value
//   });
// }

//   return (
//     <div>
//     <div>
//       <h1>Login Page</h1>
//       </div>
//       {handleSubmit() && (
//         <div>
//         <p>Welcome, user!</p>
//         </div>
//       )}
//    {!handleSubmit() && (
//     <div>
//       <form onSubmit = {handleSubmit}>
//       <label>Username:
//         <input type ="text" placeHolder ="username" name ="username" value = {inputs.username} required onChange={handleChange}/>
//       </label>
//       <br/>
//       <label>Password:
//         <input type ="text" placeHolder ="password" name ="password"value = {inputs.password} required onChange={handleChange}/>
//       </label>
//       <br/>
//       <button type = "submit">Submit</button>
//       </form>
//       </div>)}
//   </div>
//   )
// }

// export default App;

import { useState } from "react";
import "./App.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setErr("");
      setIsSubmitted(true);
    } else {
      setErr("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {username}!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {err && <p className="err">{err}</p>}
          <div>
            <label htmlFor="username"> Username:</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <label htmlFor="password"> Password:</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
