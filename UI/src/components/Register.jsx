import usePasswordChecker from "../hooks/passwordChecker.jsx";

function Register() {
  const {
    password,
    repeatPassword,
    strength,
    passwordMatchError,
    handlePasswordChange,
    handleRepeatPasswordChange,
    getPasswordStrengthColorContainer,
    getPasswordStrengthColorText,
    renderPasswordStrengthIndicator,
  } = usePasswordChecker();

  return (
    <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen flex items-center justify-center">
      <div className="glass-effect flex flex-col items-center justify-center px-10 py-12 mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 rounded-xl shadow-lg">
        <a
          href="#"
          className="flex items-center mb-8 text-3xl font-extrabold text-white"
        >
          <p className="w-10 h-10 mr-3 animate-bounce">🚀</p>
          GoTogether
        </a>

        <div className="w-full rounded-lg shadow-md bg-gray-800/70 border border-gray-700 p-8 space-y-6">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white">
            Sign up to your account
          </h1>

          <form className="space-y-6" action="#">
            <div>
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

            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="input-field"
                placeholder="Max"
                required
              />
            </div>

            <div>
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
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Repeat password
              </label>
              <input
                type="password"
                name="repeat-password"
                id="repeat-password"
                placeholder="••••••••"
                className="input-field"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
                required
              />
              {passwordMatchError && (
                <p className="text-red-500 text-sm mt-2">
                  Passwords do not match.
                </p>
              )}
            </div>

            {/* Password Check Container */}
            {renderPasswordStrengthIndicator()}

            <button
              type="submit"
              className="w-full rounded-lg px-5 py-2.5 text-center text-white font-bold bg-indigo-700 hover:bg-indigo-800 transition-transform transform hover:scale-105 cursor-pointer"
              disabled={passwordMatchError}
            >
              Sign up
            </button>
            <p className="text-md text-gray-400">
              You have an account?
              <a
                href="/login"
                className="ml-1 text-md font-semibold text-indigo-400 hover:underline"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
