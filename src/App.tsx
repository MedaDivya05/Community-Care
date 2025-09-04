import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Navbar } from './components/Layout/Navbar';
import { PreviewPage } from './components/Preview/PreviewPage';
import { HomePage } from './components/Home/HomePage';
import { LoginForm } from './components/Auth/LoginForm';
import { SignupForm } from './components/Auth/SignupForm';
import { ForgotPasswordForm } from './components/Auth/ForgotPasswordForm';
import { ResetPasswordForm } from './components/Auth/ResetPasswordForm';
import { HealthPage } from './components/Health/HealthPage';
import { WaterPage } from './components/Water/WaterPage';
import { WastePage } from './components/Waste/WastePage';
import { AuthGuard } from './components/Auth/AuthGuard';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Preview Route - Only for non-authenticated users */}
            <Route
              path="/"
              element={
                user ? (
                  <div>
                    <Navbar />
                    <HomePage />
                  </div>
                ) : (
                  <PreviewPage />
                )
              }
            />

            {/* Auth Routes */}
            <Route
              path="/login"
              element={
                <AuthGuard requireAuth={false}>
                  <LoginForm />
                </AuthGuard>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <AuthGuard requireAuth={false}>
                  <ForgotPasswordForm />
                </AuthGuard>
              }
            />
            <Route
              path="/reset-password"
              element={
                <ResetPasswordForm />
              }
            />
            <Route
              path="/signup"
              element={
                <AuthGuard requireAuth={false}>
                  <SignupForm />
                </AuthGuard>
              }
            />

            {/* Protected Routes */}
            <Route path="/home" element={
              <div>
                <Navbar />
                <HomePage />
              </div>
            } />
            <Route path="/health" element={<div><Navbar /><HealthPage /></div>} />
            <Route path="/water" element={<div><Navbar /><WaterPage /></div>} />
            <Route path="/waste" element={<div><Navbar /><WastePage /></div>} />
            <Route path="*" element={
              user ? <div><Navbar /><HomePage /></div> : <PreviewPage />
            } />
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;