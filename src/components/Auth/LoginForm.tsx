import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { t } = useTranslation();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const { error } = await signIn(data.email, data.password);
      if (error) {
        setError('root', { message: t('auth.errors.authFailed') });
      } else {
        navigate(from, { replace: true });
      }
    } catch (error) {
      setError('root', { message: t('auth.errors.authFailed') });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">{t('auth.login.title')}</h2>
            <p className="mt-2 text-gray-600">{t('auth.login.subtitle')}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.login.email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  {...register('email')}
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{t('auth.errors.emailInvalid')}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.login.password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{t('auth.errors.passwordMinLength')}</p>
              )}
            </div>

            {errors.root && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{errors.root.message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {isLoading ? t('common.loading') : t('auth.login.button')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <div className="mb-4">
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                {t('auth.login.forgotPassword')}
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              {t('auth.login.noAccount')}{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                {t('auth.login.signupLink')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}