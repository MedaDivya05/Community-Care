import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trash2, RotateCcw, MapPin, ExternalLink } from 'lucide-react';
import { wasteTips } from '../../data/content';

export function WastePage() {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'segregation',
      title: t('waste.segregation.title'),
      description: t('waste.segregation.description'),
      icon: Trash2,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
    },
    {
      id: 'reuse',
      title: t('waste.reuse.title'),
      description: t('waste.reuse.description'),
      icon: RotateCcw,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'recycling',
      title: t('waste.recycling.title'),
      description: t('waste.recycling.description'),
      icon: MapPin,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('waste.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('waste.subtitle')}
          </p>
        </div>

        {/* Waste Management Principles */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t('waste.principles.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['reduce', 'reuse', 'recycle'].map((principle, index) => (
              <div key={principle} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t(`waste.principles.${principle}.title`)}</h3>
                <p className="text-gray-600 text-sm">
                  {t(`waste.principles.${principle}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Waste Management Sections */}
        <div className="space-y-8">
          {sections.map((section) => {
            const IconComponent = section.icon;
            const sectionTips = wasteTips.filter(tip => tip.type === section.id);
            
            return (
              <div key={section.id} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color} mr-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {sectionTips.map((tip) => (
                    <div key={tip.id} className={`${section.bgColor} rounded-xl p-6`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h3>
                      <p className="text-gray-600 mb-4">{tip.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">{t('waste.materials')}:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tip.materials.map((material, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">{t('waste.process')}:</h4>
                        <ul className="space-y-2">
                          {tip.process.slice(0, 4).map((step, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                                <span className="text-white text-xs font-bold">{index + 1}</span>
                              </div>
                              <span className="text-sm text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recycling Centers Map */}
                {section.id === 'recycling' && (
                  <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-green-900">
                        {t('waste.findNearby')}
                      </h3>
                      <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium">
                        <MapPin className="h-4 w-4" />
                        <span>{t('waste.useLocation')}</span>
                      </button>
                    </div>
                    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                        <p>{t('waste.mapPlaceholder')}</p>
                        <p className="text-sm">{t('waste.mapInstructions')}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}