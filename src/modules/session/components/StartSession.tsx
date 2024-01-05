import { getAudioContext } from "@/AudioContext";

export function StartSession({
  audioBuffer,
  setSource,
}: {
  audioBuffer: AudioBuffer;
  setSource: (source: AudioBufferSourceNode) => void;
}) {
  function handleStartSession() {
    const audioContext = getAudioContext();
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = true;
    source.connect(audioContext.destination);
    source.start();
    setSource(source);
  }

  return <button onClick={handleStartSession}>Start Session</button>;
}
