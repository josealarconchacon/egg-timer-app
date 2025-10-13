import { AUDIO_NOTIFICATION_URL } from "@/lib/constants";

class AudioService {
  private audio: HTMLAudioElement | null = null;
  private isInitialized = false;

  initialize(): void {
    if (typeof window !== "undefined" && !this.isInitialized) {
      try {
        this.audio = new Audio(AUDIO_NOTIFICATION_URL);
        this.audio.preload = "auto";
        this.audio.volume = 0.7;
        this.isInitialized = true;
        console.log(
          "Audio initialized successfully with URL:",
          AUDIO_NOTIFICATION_URL
        );
      } catch (error) {
        console.error("Failed to initialize audio:", error);
      }
    }
  }

  async play(): Promise<void> {
    console.log("Attempting to play audio...");

    // Initialize on first play if not already done
    if (!this.audio && typeof window !== "undefined") {
      console.log("Audio not initialized, initializing now...");
      this.initialize();
    }

    if (!this.audio) {
      console.warn("Audio not initialized, trying fallback beep");
      // Try fallback beep sound
      this.playSystemNotification();
      return;
    }

    try {
      this.audio.currentTime = 0;
      await this.audio.play();
      console.log("Audio played successfully!");
    } catch (error) {
      console.error("Audio play failed:", error);
      // Fallback: try to play system notification sound
      this.playSystemNotification();
    }
  }

  private playSystemNotification(): void {
    try {
      // Create a simple beep sound as fallback
      const AudioContextClass =
        window.AudioContext ||
        (
          window as Window &
            typeof globalThis & { webkitAudioContext?: typeof AudioContext }
        ).webkitAudioContext;

      if (!AudioContextClass) return;

      const audioContext = new AudioContextClass();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.5
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
      console.warn("System notification fallback failed:", error);
    }
  }

  cleanup(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
    this.isInitialized = false;
  }
}

export const audioService = new AudioService();
