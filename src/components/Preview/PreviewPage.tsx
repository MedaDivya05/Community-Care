import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Droplets, Recycle, Users, Shield, Globe, ArrowRight, Play } from 'lucide-react';

export function PreviewPage() {
  const { t } = useTranslation();

  const features = [
    {
      key: 'healthHygiene',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
    },
    {
      key: 'waterConservation',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'wasteManagement',
      icon: Recycle,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const benefits = [
    {
      key: 'communityDriven',
      icon: Users,
    },
    {
      key: 'expertGuidance',
      icon: Shield,
    },
    {
      key: 'multilingualSupport',
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Community Care</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {t('nav.login')}
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {t('nav.signup')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t('preview.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            {t('preview.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold text-lg group"
            >
              {t('common.getStarted')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg"
            >
              {t('nav.login')}
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(`preview.features.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`preview.features.${feature.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('preview.whyChoose')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('preview.whyChooseDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex p-4 bg-gray-100 rounded-2xl mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`preview.benefits.${benefit.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`preview.benefits.${benefit.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Preview Video Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('preview.seeInAction')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('preview.seeInActionDescription')}
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="aspect-video bg-black/20 rounded-2xl flex items-center justify-center group cursor-pointer hover:bg-black/30 transition-colors">
              <div className="p-6 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                <Play className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('preview.readyToMakeDifference')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('preview.readyToMakeDifferenceDescription')}
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl group"
          >
            {t('preview.joinNowFree')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}