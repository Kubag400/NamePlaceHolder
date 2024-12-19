import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen flex items-center justify-center">
      <div className="glass-effect flex flex-col items-center justify-center px-10 py-12 mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 rounded-xl shadow-lg">
        <a
          href="#"
          className="flex items-center mb-8 text-3xl font-extrabold text-white"
        >
          <p className="w-10 h-10 mr-3 animate-bounce">🚀</p>
          GoTogheter
        </a>

        <div className="w-full rounded-lg shadow-md bg-gray-800/70 border border-gray-700 p-8 space-y-6">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white">
            Sign in to your account
          </h1>

          <div className="flex justify-between space-x-4">
            <button
              type="button"
              className="flex items-center font-semibold justify-center text w-1/2 border border-gray-600 rounded-lg px-5 py-2 text-gray-400 hover:text-white bg-gray-800  hover:bg-gray-700 transition duration-150"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Log in with Google
            </button>
            <button
              type="button"
              className="flex items-center font-semibold justify-center text w-1/2 border border-gray-600 rounded-lg px-5 py-2 text-gray-400 hover:text-white bg-gray-800  hover:bg-gray-700 transition duration-150"
            >
              <SiApple className="w-5 h-5 mr-2" />
              Log in with Apple
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-700" />
            <span className="mx-4 text-gray-400">or</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          <form className="space-y-6" action="#">
            <div className="transition duration-200 ease-in-out">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-field"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="transition duration-200 ease-in-out">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="input-field"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-5 h-5 border-gray-300 rounded text-indigo-600 accent-indigo-600 hover:accent-indigo-700 focus:outline-none cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <a
                href="/resetPassword"
                className="text-sm hover:underline text-indigo-400"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg px-5 py-2.5 text-center text-white font-bold focus:outline-none focus:ring-4 bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-800 transition-transform transform hover:scale-105"
            >
              Sign in
            </button>
            <p className="text-md text-gray-400">
              Don’t have an account yet?
              <a
                href="/register"
                className="ml-1 text-md font-semibold text-indigo-400 hover:underline"
              >
                Sign up here
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
