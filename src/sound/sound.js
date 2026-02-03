
export const playNotificationSound = () => {
  try {
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    const notes = [
      { freq: 800, time: 0, duration: 0.15 },
      { freq: 800, time: 0.2, duration: 0.15 },
      { freq: 1000, time: 0.4, duration: 0.3 },
    ];

    notes.forEach(({ freq, time, duration }) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      
      osc.connect(gain);
      gain.connect(audioContext.destination);
      
      osc.frequency.value = freq;
      osc.type = "sine";
      
      gain.gain.setValueAtTime(0.3, now + time);
      gain.gain.exponentialRampToValueAtTime(0.01, now + time + duration);
      
      osc.start(now + time);
      osc.stop(now + time + duration);
    });
  } catch (error) {
    console.warn("Could not play sound:", error);
  }
};

export const playCompleteSound = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    
    // Success chime
    const notes = [
      { freq: 523.25, time: 0, duration: 0.1 },
      { freq: 659.25, time: 0.12, duration: 0.1 },
      { freq: 783.99, time: 0.24, duration: 0.2 },
    ];

    notes.forEach(({ freq, time, duration }) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      
      osc.connect(gain);
      gain.connect(audioContext.destination);
      
      osc.frequency.value = freq;
      osc.type = "sine";
      
      gain.gain.setValueAtTime(0.2, now + time);
      gain.gain.exponentialRampToValueAtTime(0.01, now + time + duration);
      
      osc.start(now + time);
      osc.stop(now + time + duration);
    });
  } catch (error) {
    console.warn("Could not play sound:", error);
  }
};
