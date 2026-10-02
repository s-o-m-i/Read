let audioContext: AudioContext | null = null;

export function playTap(enabled: boolean) {
  if (!enabled || typeof window === "undefined") return;
  const AudioCtx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) return;
  if (!audioContext) audioContext = new AudioCtx();
  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = 660;
  gain.gain.value = 0.03;
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.04);
  oscillator.stop(audioContext.currentTime + 0.05);
}

export function playComplete(enabled: boolean) {
  if (!enabled || typeof window === "undefined") return;
  const AudioCtx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) return;
  if (!audioContext) audioContext = new AudioCtx();
  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }
  [523, 784].forEach((frequency, index) => {
    const oscillator = audioContext!.createOscillator();
    const gain = audioContext!.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.value = 0.0001;
    oscillator.connect(gain);
    gain.connect(audioContext!.destination);
    const start = audioContext!.currentTime + index * 0.08;
    gain.gain.exponentialRampToValueAtTime(0.04, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.16);
    oscillator.start(start);
    oscillator.stop(start + 0.17);
  });
}

function arabicVoices() {
  if (typeof window === "undefined" || !window.speechSynthesis) return [];
  return window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith("ar"));
}

function voiceScore(voice: SpeechSynthesisVoice) {
  const name = voice.name.toLowerCase();
  const lang = voice.lang.toLowerCase();
  let score = 0;
  if (lang === "ar-sa" || lang.startsWith("ar-sa")) score += 6;
  if (lang.startsWith("ar")) score += 2;
  if (/(natural|neural|premium|enhanced|wavenet)/.test(name)) score += 5;
  if (name.includes("google")) score += 2;
  return score;
}

function bestArabicVoice() {
  return arabicVoices().sort((a, b) => voiceScore(b) - voiceScore(a))[0];
}

export function speakArabic(text: string) {
  const phrase = text.trim();
  if (!phrase || typeof window === "undefined" || !window.speechSynthesis) return false;
  const synth = window.speechSynthesis;
  const start = () => {
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(phrase);
    const arabic = /[\u0600-\u06FF]/.test(phrase);
    const voice = arabic ? bestArabicVoice() : undefined;
    utterance.lang = arabic ? voice?.lang || "ar-SA" : navigator.language || "en";
    if (voice) utterance.voice = voice;
    utterance.rate = arabic ? 0.82 : 0.95;
    utterance.pitch = 1;
    synth.speak(utterance);
  };
  if (arabicVoices().length || synth.getVoices().length) {
    start();
    return true;
  }
  const onVoices = () => {
    synth.removeEventListener("voiceschanged", onVoices);
    start();
  };
  synth.addEventListener("voiceschanged", onVoices);
  synth.getVoices();
  return true;
}

export function vibrateTap(enabled: boolean, duration = 10) {
  if (!enabled || typeof navigator === "undefined" || !navigator.vibrate) return;
  navigator.vibrate(duration);
}
