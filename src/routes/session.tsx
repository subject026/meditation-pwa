import { useEffect, useState } from "react";

import { getAudioContext } from "@/AudioContext";
import { Settings } from "@/modules/session/components/Settings/Settings";
import { StartSession } from "@/modules/session/components/StartSession";
import { StopSession } from "@/modules/session/components/StopSession";
import { Layout } from "@/modules/core/componnents/Layout/Layout";
import { useTimer } from "@/modules/session/hooks/useTimer/useTimer";

export function Session() {
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [source, setSource] = useState<AudioBufferSourceNode | null>(null);
  const { secondsCount, startTimer, stopTimer, resetTimer } = useTimer();

  useEffect(() => {
    async function fetchAudio() {
      const audioContext = getAudioContext();
      if (!audioContext) return;
      const arrayBuffer = await fetch("/audio/forest-rain.mp3").then((res) =>
        res.arrayBuffer()
      );
      audioContext
        .decodeAudioData(arrayBuffer)
        .then((audioBuffer) => {
          setAudioBuffer(audioBuffer);
        })
        .catch((err): void => {
          console.log({ err });
        });
    }
    fetchAudio();
  }, []);

  return (
    <Layout>
      <Settings />
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold py-6">{secondsCount}</div>
        <button
          className="px-4 py-2 rounded bg-red-600 text-neutral-300 font-bold"
          onClick={startTimer}
        >
          start timer
        </button>
        <button
          className="px-4 py-2 rounded bg-red-600 text-neutral-300 font-bold"
          onClick={stopTimer}
        >
          timez
        </button>
        <button
          className="px-4 py-2 rounded bg-red-600 text-neutral-300 font-bold"
          onClick={resetTimer}
        >
          reset timer
        </button>
      </div>
      {audioBuffer && (
        <StartSession audioBuffer={audioBuffer} setSource={setSource} />
      )}
      {source && <StopSession sourceNode={source} setSource={setSource} />}
    </Layout>
  );
}
