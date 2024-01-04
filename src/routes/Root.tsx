import { useEffect, useState } from "react";

const audioCtx = new window.AudioContext();

export function Root() {
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [source, setSource] = useState<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    async function fetchAudio() {
      const arrayBuffer = await fetch("/forest-rain.mp3").then((res) =>
        res.arrayBuffer()
      );
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
      setAudioBuffer(audioBuffer);
    }
    fetchAudio();
  }, []);

  function handleStart() {
    if (!audioBuffer) return;
    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = true;
    source.connect(audioCtx.destination);
    source.start();
    setSource(source);
  }

  function handleStop() {
    if (!source) return;
    source.stop();
    setSource(null);
  }

  return (
    <div className="min-h-screen bg-orange-400 flex items-center justify-center flex-col gap-12">
      <h1 className="font-bold text-4xl text-purple-800">Heyy :)</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
}
