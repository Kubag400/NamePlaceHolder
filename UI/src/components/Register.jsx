import React, { useState } from "react";

function Register() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const checkPasswordStrength = (password) => {
    let score = 0;

    // Length check (at least 10 characters)
    if (password.length >= 10) score++;

    // Uppercase letter check
    if (/[A-Z]/.test(password)) score++;

    // Lowercase letter check
    if (/[a-z]/.test(password)) score++;

    // Number check
    if (/\d/.test(password)) score++;

    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    // Common patterns check
    if (/password|1234|qwerty|admin/.test(password)) score = Math.min(score, 1); // Penalize common patterns

    if (score <= 1) return "Weak";
    if (score === 2) return "Fair";
    if (score === 3) return "Good";
    if (score === 4) return "Strong";
    if (score === 5) return "Very Strong";
    return "Very Weak";
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(checkPasswordStrength(newPassword));
  };

  const handleRepeatPasswordChange = (e) => {
    const newRepeatPassword = e.target.value;
    setRepeatPassword(newRepeatPassword);

    if (newRepeatPassword !== password) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  const getStrengthColorContainer = () => {
    if (strength === "Weak") return "bg-red-500";
    if (strength === "Fair") return "bg-orange-500";
    if (strength === "Good") return "bg-yellow-500";
    if (strength === "Strong") return "bg-green-500";
    if (strength === "Very Strong") return "bg-indigo-500";
    return "bg-gray-300";
  };

  const getStrengthColorText = () => {
    if (strength === "Weak") return "text-red-500";
    if (strength === "Fair") return "text-orange-500";
    if (strength === "Good") return "text-yellow-500";
    if (strength === "Strong") return "text-green-500";
    if (strength === "Very Strong") return "text-indigo-500";
    return "text-gray-300";
  };

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
            Sign up to your account
          </h1>

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
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="transition duration-200 ease-in-out">
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

            {password && (
              <div className="text-sm font-medium">
                <div
                  className={`h-2 w-full rounded-full ${getStrengthColorContainer()}`}
                  style={{
                    width: `${
                      strength === "Weak"
                        ? 20
                        : strength === "Fair"
                        ? 40
                        : strength === "Good"
                        ? 60
                        : strength === "Strong"
                        ? 80
                        : strength === "Very Strong"
                        ? 100
                        : 0
                    }%`,
                  }}
                ></div>
                <p className={`mt-2 ${getStrengthColorText()}`}>
                  {strength ? `Strength: ${strength}` : ""}
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-lg px-5 py-2.5 text-center text-white font-bold focus:outline-none focus:ring-4 bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-800 transition-transform transform hover:scale-105 cursor-pointer"
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
