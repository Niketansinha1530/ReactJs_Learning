import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
function Login() {
  const [username, SetUsername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        onChange={(e) => SetUsername(e.target.value)}
        type="text"
        placeholder="username"
      />{" "}
      <input
        onChange={(e) => setpassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
