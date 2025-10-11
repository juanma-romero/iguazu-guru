'use client'
import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useWeather } from '../../../../hooks/useWeather';

interface WeatherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WeatherModal({ isOpen, onClose }: WeatherModalProps) {
  const t = useTranslations('WeatherModal');
  const { weatherData, loading, error, refetch } = useWeather();

  // Solo hacer la llamada cuando el modal se abre y no tenemos datos
  useEffect(() => {
    if (isOpen && !weatherData && !loading) {
      refetch();
    }
  }, [isOpen, weatherData, loading, refetch]);

  if (!isOpen) return null;

  const getWeatherIconUrl = (iconBaseUri: string, type: string) => {
    // Google Weather API provides iconBaseUri, we need to construct the full URL
    return `${iconBaseUri}${type}.png`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {t('title')}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Cerrar"
            >
              <svg className='stroke-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-iguazu-teal"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">{t('loading')}</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-8">
              <div className="text-red-500 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-red-600 dark:text-red-400 mb-4">{t('error')}</p>
              <button
                onClick={refetch}
                className="px-4 py-2 bg-iguazu-teal text-white rounded hover:bg-iguazu-dark transition-colors"
              >
                {t('retry')}
              </button>
            </div>
          )}

          {/* Weather Data */}
          {weatherData && !loading && !error && (
            <div className="space-y-6">
              {/* Main Weather Info */}
              <div className="text-center">
                {/*
                {weatherData.weatherCondition.iconBaseUri && (
                  
                  <img
                    src={getWeatherIconUrl(weatherData.weatherCondition.iconBaseUri, weatherData.weatherCondition.type)}
                    alt={weatherData.weatherCondition.description.text}
                    className="mx-auto w-20 h-20 mb-4"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.textContent = '☀️';
                    }}
                  />
                )}
                  */}
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {Math.round(weatherData.temperature.degrees)}°{weatherData.temperature.unit === 'CELSIUS' ? 'C' : 'F'}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 capitalize">
                  {weatherData.weatherCondition.description.text}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {t('feels-like')}: {Math.round(weatherData.feelsLikeTemperature.degrees)}°{weatherData.feelsLikeTemperature.unit === 'CELSIUS' ? 'C' : 'F'}
                </p>
              </div>

              {/* Weather Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💧</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('humidity')}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{weatherData.relativeHumidity}%</div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🌧️</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('rain-probability')}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{weatherData.precipitation.probability.percent}%</div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💨</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('wind')}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {Math.round(weatherData.wind.speed.value)} {weatherData.wind.speed.unit === 'KILOMETERS_PER_HOUR' ? 'km/h' : 'mph'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{weatherData.wind.direction.cardinal}</div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">👁️</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('visibility')}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {weatherData.visibility.distance} {weatherData.visibility.unit === 'KILOMETERS' ? 'km' : 'mi'}
                  </div>
                </div>
              </div>

              {/* UV Index */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">☀️</div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{t('uv-index')}</div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">{weatherData.uvIndex}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      {weatherData.uvIndex <= 2 ? t('uv-low') :
                       weatherData.uvIndex <= 5 ? t('uv-moderate') :
                       weatherData.uvIndex <= 7 ? t('uv-high') :
                       weatherData.uvIndex <= 10 ? t('uv-very-high') : t('uv-extreme')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
              {t('last-updated')}: {new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
