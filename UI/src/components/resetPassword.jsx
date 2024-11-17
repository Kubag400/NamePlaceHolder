import { useState } from "react";

function resetPassword() {
  const [currentStep, setCurrentStep] = useState(1);
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (element.value.length > 1) return;
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    if (element.value && index < code.length - 1) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

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

        <div className="w-full rounded-lg shadow-md bg-gray-800/70 border border-gray-700 p-8 space-y-4">
          <ol className="flex justify-center items-center w-full gap-12 text-sm font-medium text-center text-gray-500 sm:text-base">
            <li
              className={`flex flex-col items-center justify-center sm:w-auto cursor-pointer ${
                currentStep >= 1 ? "text-indigo-600 " : "text-gray-400"
              }`}
              onClick={() => setCurrentStep(1)}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 1
                    ? "border-indigo-600 bg-indigo-700 text-white"
                    : "border-gray-500 bg-transparent text-gray-500"
                }`}
              >
                <span className="text-sm">1</span>
              </div>
              <span className="mt-2 hidden sm:inline-flex">Email</span>
            </li>

            <li
              className={`flex flex-col items-center justify-center sm:w-auto cursor-pointer ${
                currentStep >= 2 ? "text-indigo-600 " : "text-gray-400"
              }`}
              onClick={() => setCurrentStep(2)}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 2
                    ? "border-indigo-600 bg-indigo-700 text-white"
                    : "border-gray-500  bg-transparent text-gray-500"
                }`}
              >
                <span className="text-sm">2</span>
              </div>
              <span className="mt-2 hidden sm:inline-flex">Verification</span>
            </li>

            <li
              className={`flex flex-col items-center justify-center sm:w-auto cursor-pointer ${
                currentStep >= 3 ? "text-indigo-600 " : "text-gray-400"
              }`}
              onClick={() => setCurrentStep(3)}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 3
                    ? "border-indigo-600 bg-indigo-700 text-white"
                    : "border-gray-500  bg-transparent text-gray-500"
                }`}
              >
                <span className="text-sm">3</span>
              </div>
              <span className="mt-2 hidden sm:inline-flex">Password</span>
            </li>
          </ol>

          {currentStep === 1 && (
            <>
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-white">
                Forgot your password?
              </h1>
              <p className="text-gray-400">
                Type in your email below, and we’ll send you a code to reset
                your password.
              </p>
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
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="w-full rounded-lg px-5 py-2.5 text-center text-white font-bold focus:outline-none focus:ring-4 bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-800 transition-transform transform hover:scale-105"
                >
                  Send code
                </button>
              </form>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-white">
                Enter the verification code
              </h1>
              <p className="text-gray-400">
                We sent a verification code to your email. Enter it below to
                continue.
              </p>
              <form className="space-y-6" action="#">
                <div className="flex justify-center gap-4 my-8">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      id={`code-${index}`}
                      value={digit}
                      onChange={(e) => handleChange(e.target, index)}
                      className="w-14 h-14 text-lg text-center uppercase font-bold text-white input-field"
                      maxLength="1"
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="w-full rounded-lg px-5 py-2.5 text-center text-white font-bold focus:outline-none focus:ring-4 bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-800 transition-transform transform hover:scale-105"
                >
                  Verify
                </button>
              </form>
              <div className="flex items-center justify-between mt-8">
                <p className="text-md text-gray-400">
                  Your code isn’t there yet?
                  <a
                    href=""
                    className="ml-1 text-md font-semibold text-indigo-400 hover:underline"
                  >
                    Resend the code
                  </a>
                </p>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-white">
                Forgot your password?
              </h1>
              <p className="text-gray-400">
                Enter a new password below to reset your account password.
              </p>
              <form className="space-y-6" action="#">
                <div className="transition duration-200 ease-in-out">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="input-field"
                    placeholder="New password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg px-5 py-2.5 text-center text-white font-bold focus:outline-none focus:ring-4 bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-800 transition-transform transform hover:scale-105"
                >
                  Reset Password
                </button>
              </form>
            </>
          )}
          <div>
            <a
              href="/login"
              className="text-sm hover:underline text-indigo-400"
            >
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default resetPassword;
