import { useEffect } from "react";
import { audioService } from "@/services/audioService";

export const useSound = (isCompleted: boolean) => {
  useEffect(() => {
    audioService.initialize();
    return () => audioService.cleanup();
  }, []);

  useEffect(() => {
    if (isCompleted) {
      audioService.play();
    }
  }, [isCompleted]);
};
