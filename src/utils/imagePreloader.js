/**
 * Utility to preload critical images for faster loading
 */

// Map of critical images to preload
import { 
  FGMAwareness,
  IDPCamp,
  OurStory,
  PeaceBuilding,
  GreenInitiative
} from '../assets/images';

const criticalImages = [
  FGMAwareness,
  IDPCamp,
  OurStory,
  PeaceBuilding,
  GreenInitiative
];

/**
 * Preloads critical images in the background
 * This should be called as early as possible in the app lifecycle
 */
export const preloadCriticalImages = () => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  // Use requestIdleCallback to preload during browser idle time
  const preload = () => {
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.fetchPriority = 'low'; // Don't compete with critical resources
    });
  };

  // Use requestIdleCallback if available, otherwise setTimeout
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(preload, { timeout: 2000 });
  } else {
    setTimeout(preload, 1000);
  }
};

export default preloadCriticalImages; 