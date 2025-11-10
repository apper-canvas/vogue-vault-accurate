import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "@/layouts/Root";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { isInitialized } = useAuth();
  const { user } = useSelector((state) => state.user);

  // Check if user is already authenticated and handle redirect
  useEffect(() => {
    if (user) {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectPath = urlParams.get("redirect") || "/";
      navigate(redirectPath);
    }
  }, [user, navigate]);

  // Wait for authentication to initialize before showing ApperUI
  useEffect(() => {
    if (isInitialized && !user && window.ApperSDK?.ApperUI) {
      window.ApperSDK.ApperUI.showSignup("#authentication");
    }
  }, [isInitialized, user]);

  // Show loading while initializing
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-primary/60">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render ApperUI if user is already authenticated
  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display font-bold text-primary mb-2">
            Create Account
          </h1>
          <p className="text-primary/60">
            Join Vogue Vault for exclusive benefits
          </p>
        </div>

        {/* ApperUI will render the signup form here */}
        <div id="authentication" className="bg-white rounded-lg p-8 shadow-sm">
          {/* ApperUI signup form will be inserted here */}
        </div>

        <div className="mt-6 text-center">
          <p className="text-primary/60">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-accent hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;