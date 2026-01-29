import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ChevronRight } from "lucide-react";
import logo from "../assets/solstra.png";

const Logo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <ellipse
      cx="50"
      cy="50"
      rx="40"
      ry="15"
      transform="rotate(-45 50 50)"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
    />
    <ellipse
      cx="50"
      cy="50"
      rx="40"
      ry="15"
      transform="rotate(45 50 50)"
      fill="none"
      stroke="#f59e0b"
      strokeWidth="6"
    />
    <path
      d="M50 30 C 65 30, 70 45, 50 50 C 30 55, 35 70, 50 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Please select a role before signing in.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin && onLogin(selectedRole);
    }, 1200);
  };

  const roles = [
    { id: "Super Admin", label: "Super Admin", color: "bg-blue-50 text-[#2e2a69]" },
    { id: "HR Manager", label: "HR Manager", color: "bg-green-50 text-green-700" },
    { id: "Mentor", label: "Mentor", color: "bg-green-50 text-blue-400" },
    { id: "Intern", label: "Intern", color: "bg-orange-50 text-orange-700" },
  ];

  return (
    <div className="min-h-screen w-screen bg-slate-50 flex items-center justify-center p-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#2e2a69] transform -skew-y-6 origin-top-left z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#f59e0b] opacity-10 rounded-full blur-3xl z-0"></div>

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-4 md:mx-0 flex overflow-hidden relative z-10 min-h-[600px] md:min-h-[720px]">
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#2e2a69] to-[#1a1640] text-white p-12 flex-col justify-between relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <img src={logo} className="w-9 h-9 object-contain" alt="Solstra Logo" />
              <h1 className="text-lg font-semibold tracking-wide text-white">Solstra</h1>
            </div>

            <p className="text-blue-200 text-sm tracking-widest">IT SOLUTION LLP</p>
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-bold leading-tight">IMS Dashboard</h2>
            <p className="text-blue-200 font-light">Manage your IMS, Recruitment, and IMS from a single centralized hub.</p>

            <div className="flex gap-2 mt-4">
              <div className="w-12 h-1 bg-[#f59e0b] rounded-full"></div>
              <div className="w-4 h-1 bg-white/30 rounded-full"></div>
              <div className="w-4 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>

          <div className="text-xs text-blue-300 relative z-10">© 2025 Solstra Info. All rights reserved.</div>
        </div>

        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h3>
            <p className="text-gray-500">Please verify your identity to access the panel.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-[#2e2a69] transition-colors" />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2e2a69] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="admin@solstrainfo.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-[#2e2a69] transition-colors" />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2e2a69] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="••••••••"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex justify-end mt-2">
                <a href="#" className="text-sm text-[#f59e0b] hover:underline font-medium">Forgot Password?</a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#2e2a69] text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-[#231f50] transform transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In to Dashboard <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-xs text-center text-gray-400 mb-3 uppercase tracking-wider">Select Role :</p>
            <div className="flex justify-center gap-2">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRole(r.id)}
                  className={`${r.color} px-3 py-1 text-xs font-medium rounded border ${selectedRole === r.id ? "ring-2 ring-[#2e2a69]" : "border-transparent"}`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {selectedRole && (
              <p className="text-center text-sm text-gray-500 mt-3">Selected role: <span className="font-medium text-gray-700">{selectedRole}</span></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
