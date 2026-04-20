'use client';

import { useRef, useState, type PointerEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type VideoItem = {
  id: string;
  title: string;
  embedUrl: string;
};

type VideoDragCarouselProps = {
  videos: VideoItem[];
  className?: string;
};

export function VideoDragCarousel({ videos, className = '' }: VideoDragCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const DRAG_THRESHOLD_PX = 50;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;

    const deltaX = event.clientX - dragStartX.current;
    dragStartX.current = null;

    if (Math.abs(deltaX) < DRAG_THRESHOLD_PX) return;

    if (deltaX > 0) {
      goToPrevious();
    } else {
      goToNext();
    }
  };

  const onPointerLeave = () => {
    dragStartX.current = null;
  };

  if (videos.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      <div
        className="relative rounded-[1.5rem] overflow-hidden shadow-md border-[6px] border-[#1a1a1a] bg-[#1a1a1a] p-0.5 touch-pan-y select-none"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerLeave}
      >
        <div className="rounded-[1.1rem] overflow-hidden bg-black aspect-[9/19] w-full">
          <iframe
            key={videos[currentIndex].id}
            src={videos[currentIndex].embedUrl}
            title={videos[currentIndex].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {videos.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goToPrevious}
            className="w-9 h-9 rounded-full bg-[#EEF1F8] text-[#1A2B70] hover:bg-[#DDE5FA] transition-colors flex items-center justify-center"
            aria-label="Show previous video"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {videos.map((video, index) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-[#1A2B70]' : 'bg-[#C7D2F0]'}`}
                aria-label={`Show video ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goToNext}
            className="w-9 h-9 rounded-full bg-[#EEF1F8] text-[#1A2B70] hover:bg-[#DDE5FA] transition-colors flex items-center justify-center"
            aria-label="Show next video"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
