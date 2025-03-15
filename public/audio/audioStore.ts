import { create } from "zustand";

interface AudioStore {
    audio: HTMLAudioElement | null;
    playAudio: () => void;
}

export const useAudioStore = create<AudioStore>((set) => {
    let audio = new Audio("/audio/startUpSound.mp3");

    return {
        audio,
        playAudio: () => {
            if (audio.paused) {
                audio.play();
            }
        },
    };
});
