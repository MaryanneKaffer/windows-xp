"use client";
import { create } from "zustand";

interface AudioStore {
  audio: HTMLAudioElement | null;
  playAudio: () => void;
}

export const useAudioStore = create<AudioStore>(() => {
  let audio: HTMLAudioElement | null = null;

  return {
    audio,
    playAudio: () => {
      if (typeof window !== "undefined") {
        if (!audio) {
          audio = new Audio("/audio/startUpSound.mp3");
        }
        audio.play();
      }
    },
  };
});
