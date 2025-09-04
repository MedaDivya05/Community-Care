import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Droplets, Recycle, ArrowRight, Play } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { videoContent } from '../../data/content';
import { VideoPlayer } from './VideoPlayer';
import { Chatbot } from '../Chatbot/Chatbot';

export function HomePage() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [selectedVideo, setSelectedVideo] = React.useState<{ videoId: string; title: string } | null>(null);

  const sections = [
    {
      id: 'hygiene',
      title: t('home.hygiene.title'),
      description: t('home.hygiene.description'),
      icon: Heart,
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      link: '/health',
    },
    {
      id: 'water',
      title: t('home.water.title'),
      description: t('home.water.description'),
      icon: Droplets,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      link: '/water',
    },
    {
      id: 'waste',
      title: t('home.waste.title'),
      description: t('home.waste.description'),
      icon: Recycle,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      link: '/waste',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('home.subtitle')}
          </p>
        </div>

        {/* Main Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                className={`${section.bgColor} ${section.borderColor} border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${section.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <Link
                    to={section.link}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all"
                  >
                    <span>{t('common.learnMore')}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Video Section */}
        {user && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Educational Content
              </h2>
              <p className="text-gray-600">
                Watch our curated videos to learn more about community health and environmental awareness
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {videoContent.map((video) => (
                <div key={video.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div 
                    className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center group cursor-pointer hover:bg-gray-300 transition-colors"
                    onClick={() => setSelectedVideo({ videoId: video.videoId, title: video.title })}
                  >
                    <Play className="h-12 w-12 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {video.category}
                    </span>
                    <h3 className="font-semibold text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                    <button 
                      onClick={() => setSelectedVideo({ videoId: video.videoId, title: video.title })}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {t('common.watchVideo')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Guest Video Preview */}
        {!user && (
          <>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('home.featuredContent')}
            </h2>
            <p className="text-gray-600">
              {t('home.featuredContentDescription')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              {videoContent.slice(0, 3).map((video) => (
                <div key={video.id} className="bg-gray-50 rounded-xl p-6">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center group cursor-pointer">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">{t('home.loginToWatch')}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {video.category}
                  </span>
                  <h3 className="font-semibold text-gray-900">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                  <Link to="/login" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    {t('home.loginToWatchLink')}
                  </Link>
                </div>
              </div>
              ))}
            </div>
          </div>
          </>
        )}
      </div>

      {/* Chatbot */}
      <VideoPlayer
        videoId={selectedVideo?.videoId || ''}
        title={selectedVideo?.title || ''}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
      <Chatbot />
    </div>
  );
}