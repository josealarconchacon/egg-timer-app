import { useEffect, useRef } from "react";
import { audioService } from "@/services/audioService";

export const useSound = (isCompleted: boolean) => {
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    // Initialize audio service when component mounts
    audioService.initialize();
    return () => audioService.cleanup();
  }, []);

  useEffect(() => {
    if (isCompleted && !hasPlayedRef.current) {
      hasPlayedRef.current = true;
      audioService.play();
    } else if (!isCompleted) {
      hasPlayedRef.current = false;
    }
  }, [isCompleted]);
};
