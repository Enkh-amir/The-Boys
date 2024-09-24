import LoginLogo from "./LoginLogo";

const Login = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container">
        <div className="bg-red-500">
          <LoginLogo />
          <p>Geld</p>
          <p>Welcome Back</p>
          <p>Welcome back, Please enter your details</p>
        </div>
        <div>
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
          <button>Log in</button>
          <div>
            <p>don't have account?</p>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
