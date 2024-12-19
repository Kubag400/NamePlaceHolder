import { useState } from "react";

function usePasswordChecker() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const checkPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 10) score++; // Length check
    if (/[A-Z]/.test(password)) score++; // Uppercase letter check
    if (/[a-z]/.test(password)) score++; // Lowercase letter check
    if (/\d/.test(password)) score++; // Number check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++; // Special character check
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
    setPasswordMatchError(newRepeatPassword !== password);
  };

  const getPasswordStrengthColorContainer = () => {
    if (strength === "Weak") return "bg-red-500";
    if (strength === "Fair") return "bg-orange-500";
    if (strength === "Good") return "bg-yellow-500";
    if (strength === "Strong") return "bg-green-500";
    if (strength === "Very Strong") return "bg-indigo-500";
    return "bg-gray-300";
  };

  const getPasswordStrengthColorText = () => {
    if (strength === "Weak") return "text-red-500";
    if (strength === "Fair") return "text-orange-500";
    if (strength === "Good") return "text-yellow-500";
    if (strength === "Strong") return "text-green-500";
    if (strength === "Very Strong") return "text-indigo-500";
    return "text-gray-300";
  };

  const renderPasswordStrengthIndicator = () => {
    if (!password) return null; // Only render if password exists

    return (
      <div className="text-sm font-medium">
        <div
          className={`h-2 w-full rounded-full ${getPasswordStrengthColorContainer()}`}
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
        <p className={`mt-2 ${getPasswordStrengthColorText()}`}>
          {strength ? `Strength: ${strength}` : ""}
        </p>
      </div>
    );
  };

  return {
    password,
    repeatPassword,
    strength,
    passwordMatchError,
    handlePasswordChange,
    handleRepeatPasswordChange,
    getPasswordStrengthColorContainer,
    getPasswordStrengthColorText,
    renderPasswordStrengthIndicator,
  };
}

export default usePasswordChecker;
