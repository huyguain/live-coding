'use client';

import React from 'react';
import { Event } from '@/types/event';
import { CATEGORIES } from '@/utils/constants';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface EventCardProps {
  event: Event;
  className?: string;
}

export function EventCard({ event, className = '' }: EventCardProps) {
  const category = CATEGORIES.find(c => c.value === event.category);

  const formatPrice = (min: number, max: number) => {
    if (min === 0 && max === 0) return 'Miễn phí';
    if (min === max) return `${min.toLocaleString('vi-VN')} VND`;
    return `${min.toLocaleString('vi-VN')} - ${max.toLocaleString('vi-VN')} VND`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'EEEE, dd/MM/yyyy', { locale: vi });
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${className}`}>
      {/* Event Image */}
      <div className="relative h-48 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
        
        {/* Featured Badge */}
        {event.isFeatured && (
          <div className="absolute top-2 left-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              ⭐ Nổi bật
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {category?.icon} {category?.label}
          </span>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {event.description}
        </p>

        {/* Date and Time */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formatDate(event.date)} • {event.time}
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {event.location.city} • {event.location.venue}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-semibold text-green-600">
            {formatPrice(event.price.min, event.price.max)}
          </span>
          <span className="text-sm text-gray-500">
            {event.registeredCount}/{event.capacity} đã đăng ký
          </span>
        </div>

        {/* Organizer */}
        <div className="text-sm text-gray-500 mb-3">
          <span className="font-medium">Tổ chức bởi:</span> {event.organizer}
        </div>

        {/* Tags */}
        {event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {event.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
              >
                #{tag}
              </span>
            ))}
            {event.tags.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                +{event.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Action Button */}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
