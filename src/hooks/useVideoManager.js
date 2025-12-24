import { useRef, useCallback } from 'react';

export const useVideoManager = () => {
  const videoRefs = useRef([]);

  const registerVideo = useCallback((videoRef) => {
    if (videoRef && !videoRefs.current.includes(videoRef)) {
      videoRefs.current.push(videoRef);
    }
  }, []);

  const playVideo = useCallback((currentVideoRef) => {
    // Pause all other videos
    videoRefs.current.forEach(ref => {
      if (ref !== currentVideoRef && !ref.paused) {
        ref.pause();
      }
    });
  }, []);

  return { registerVideo, playVideo };
};
