import GoogleLogin from "react-google-login"
import { useGoogleLogin } from "react-google-login"

const responseGoogle = (googleData: any) => {
  console.log(googleData.profileObj)
}
const Login = () => {
  return (
    <>
      <form className="flex-col flex items-center justify-center w-96 h-96 bg-white space-y-4 rounded shadow-md">
        <div className="flex flex-col w-80 space-y-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input type="email" id="email" className="rounded border-gray-400" />
        </div>
        <div className="flex flex-col w-80 space-y-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="rounded border-gray-400"
          />
        </div>
        <div className="flex items-center justify-around w-full">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Remember Me</span>
          </div>
          <div>
            <span className="text-sm text-teal-500">Forgot Password?</span>
          </div>
        </div>
        <button
          type="submit"
          className="w-80 rounded text-teal-100 bg-teal-500 my-2 p-2"
        >
          Sign in
        </button>
        <GoogleLogin
          clientId="297309992579-gm8squuqqgk1rl39rs2re77em296ga4c.apps.googleusercontent.com"
          buttonText="Google"
          isSignedIn={true}
          uxMode='redirect'
          redirectUri="http://localhost:3000"
          fetchBasicProfile={true}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </form>
    </>
  )
}
export default Login
