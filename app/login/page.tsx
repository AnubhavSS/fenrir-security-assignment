"use client";
import { useRouter } from "next/navigation";
import React,{ReactNode, SubmitEvent} from 'react'
import { FaMeta,FaApple,FaGoogle, FaCheck ,FaStar } from "react-icons/fa6";
/**
 * Login page component for user authentication.
 * Provides social login options and a standard email/password form (currently simulated).
 */
const Login = () => {
  const router = useRouter();

  /**
   * Handles the login form submission.
   * Redirects to the dashboard on success.
   */
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };
    return (
    <div className="min-h-screen flex flex-col lg:flex-row  bg-linear-to-br from-[#0A0A0A] via-[#063A38] to-[#FF7A18]">

      {/* LEFT PANEL: Hero section with branding and value proposition */}
      <div className="relative w-full lg:w-1/2 overflow-hidden">

        {/* Background Gradient */}
        <div className="absolute inset-0" />

        <div className="absolute inset-0 bg-[radial-gradient circle_at_30%_20%,rgba(12,200,168,0.25),transparent_50%)]" />

        {/* Content */}
        <div className="relative z-10 px-6 py-16 md:px-20 md:py-0 flex md:min-h-screen items-center">

          <div className="max-w-md md:max-w-lg space-y-6 md:space-y-8">

            {/* Logo */}
           <div className="absolute top-6 left-6 flex items-center gap-3">
  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
    <div className="w-2 h-2 rounded-full bg-white" />
  </div>
  <span className="text-white text-lg font-medium">aps</span>
</div>
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Expert level Cybersecurity
              <br />
              in <span className="text-primary">hours</span> not weeks.
            </h1>

            {/* Features */}
            <div className="space-y-4 text-gray-300 text-sm">

  <div className="flex items-start gap-3">
    <div className="mt-1 text-primary">
      <FaCheck size={14} />
    </div>
    <p>
      Effortlessly spider and map targets to uncover hidden security flaws
    </p>
  </div>

  <div className="flex items-start gap-3">
    <div className="mt-1 text-primary"> 
      <FaCheck size={14} />
    </div>
    <p>
      Deliver high-quality, validated findings in hours, not weeks.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <div className="mt-1 text-primary"> 
      <FaCheck size={14} />
    </div>
    <p>
      Generate professional, enterprise-grade security reports automatically.
    </p>
  </div>

</div>

            {/* Trust */}
           <div className="pt-8 space-y-2">
  <div className="flex items-center gap-2">
    <FaStar className="text-[#00B67A]" size={18} />
    <p className="text-sm font-semibold text-white">
      Trustpilot
    </p>
  </div>
  <p className="text-lg font-medium text-white">
    Rated 4.5/5.0 <span className="text-sm text-gray-400">(100k+ reviews)</span>
  </p>
</div>

          </div>
        </div>
      </div>

      {/* RIGHT PANEL / CARD */}
      <div className=" flex justify-center items-start md:items-center px-6 py-12">

        <div className="w-full max-w-md bg-white rounded-2xl px-6 md:px-8 py-8 md:py-10 space-y-6">

          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Sign up
            </h2>
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <span className="text-primary font-medium cursor-pointer">
                Log in
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <Input placeholder="First name*" />
            <Input placeholder="Last name*" />
            <Input type="email" placeholder="Email address*" />
            <Input type="password" placeholder="Password (8+ characters)*" />

         <div className="flex items-center gap-2 text-xs text-gray-500">
  <input type="checkbox" className="accent-primary" required />
  <p>
    I agree to Apps{" "}
    <span className="text-blue-500 underline font-medium">
      Terms & Conditions
    </span>{" "}
    and{" "}
    <span className="text-blue-500 underline font-medium">
      Privacy Policy
    </span>
  </p>
</div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Create account
            </button>

          </form>

          {/* Social Buttons */}
         <div className="flex gap-3 pt-2">
  <SocialButton provider="apple" icon={<FaApple />} />
  <SocialButton provider="google" icon={<FaGoogle />} />
  <SocialButton provider="meta" icon={<FaMeta />} />
</div>

        </div>
      </div>
    </div>
  );
}

function Input({
  type = "text",
  placeholder,
}: {
  type?: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm           focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent  transition"
    />
  );
}

type Provider = "apple" | "google" | "meta";

function SocialButton({
  provider,
  icon,
}: {
  provider: Provider;
  icon: ReactNode;
}) {
  const styles = {
    apple: "bg-black text-white border-black hover:bg-gray-900",
    google: "bg-gray-200 text-black border-gray-200 hover:bg-gray-50",
    meta: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700",
  };

  return (
    <button
      type="button"
      className={`flex-1 cursor-pointer rounded-full py-2 flex items-center justify-center text-lg transition border ${styles[provider]}`}
    >
      {icon}
    </button>
  );
}

export default Login