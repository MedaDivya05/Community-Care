import React from 'react';
import { useTranslation } from 'react-i18next';
import { Droplets, CloudRain, RefreshCw, Play } from 'lucide-react';
import { waterTips } from '../../data/content';

export function WaterPage() {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'conservation',
      title: t('water.conservation.title'),
      description: t('water.conservation.description'),
      icon: Droplets,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'harvesting',
      title: t('water.harvesting.title'),
      description: t('water.harvesting.description'),
      icon: CloudRain,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 'recycling',
      title: t('water.recycling.title'),
      description: t('water.recycling.description'),
      icon: RefreshCw,
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('water.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('water.subtitle')}
          </p>
        </div>

        {/* Featured Video */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('water.techniques')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('water.techniquesDescription')}
              </p>
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center group cursor-pointer hover:bg-gray-300 transition-colors">
                <Play className="h-16 w-16 text-gray-500 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">{t('water.didYouKnow')}</h3>
                <p className="text-blue-800 text-sm">
                  {t('water.didYouKnowText')}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">{t('water.quickTip')}</h3>
                <p className="text-green-800 text-sm">
                  {t('water.quickTipText')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Water Conservation Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {sections.map((section) => {
            const IconComponent = section.icon;
            const sectionTips = waterTips.filter(tip => tip.type === section.id);
            
            return (
              <div key={section.id} className={`${section.bgColor} border border-gray-200 rounded-2xl p-8`}>
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${section.color} mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">
                    {section.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {sectionTips.map((tip) => (
                    <div key={tip.id} className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-3">{tip.title}</h4>
                      <ul className="space-y-2">
                        {tip.steps.slice(0, 3).map((step, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                              <span className="text-white text-xs font-bold">{index + 1}</span>
                            </div>
                            <span className="text-sm text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                      {tip.steps.length > 3 && (
                        <button className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">
                          {t('water.viewAllSteps', { count: tip.steps.length })} →
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}