import React from 'react';
import { useTranslation } from 'react-i18next';
import { Baby, Users, User, Heart } from 'lucide-react';
import { healthTips } from '../../data/content';
import { HealthTip } from '../../types';

export function HealthPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = React.useState<HealthTip['category']>('children');

  const categories = [
    {
      id: 'children' as const,
      title: t('health.children.title'),
      description: t('health.children.description'),
      icon: Baby,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      id: 'teens' as const,
      title: t('health.teens.title'),
      description: t('health.teens.description'),
      icon: Users,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'adults' as const,
      title: t('health.adults.title'),
      description: t('health.adults.description'),
      icon: User,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'elderly' as const,
      title: t('health.elderly.title'),
      description: t('health.elderly.description'),
      icon: Heart,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
  ];

  const selectedTips = healthTips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('health.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('health.subtitle')}
          </p>
        </div>

        {/* Category Selection */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${category.bgColor} p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                  isSelected 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Category Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {selectedTips.map((tip) => (
            <div key={tip.id} className="mb-8 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{tip.title}</h2>
              <p className="text-gray-600 mb-6">{tip.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {tip.tips.map((tipItem, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{tipItem}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}