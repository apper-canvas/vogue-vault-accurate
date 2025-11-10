// This hook is no longer used for authentication - authentication is now handled by ApperUI
// through Root.jsx callbacks and Redux state management.
// Keeping this file for backwards compatibility if needed elsewhere in the codebase.

import { useState, useEffect } from "react";
import authService from "@/services/api/authService";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return {
    user,
    loading,
    logout,
    isAuthenticated
  };
};