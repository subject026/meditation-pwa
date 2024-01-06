import { useEffect, useState } from "react";

import { getAudioContext } from "@/AudioContext";
import { Settings } from "@/modules/session/components/Settings/Settings";
import { StartSession } from "@/modules/session/components/StartSession";
import { StopSession } from "@/modules/session/components/StopSession";
import { Layout } from "@/modules/session/core/componnents/Layout/Layout";

export function Session() {
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [source, setSource] = useState<AudioBufferSourceNode | null>(null);

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
      {audioBuffer && (
        <StartSession audioBuffer={audioBuffer} setSource={setSource} />
      )}
      {source && <StopSession sourceNode={source} setSource={setSource} />}
    </Layout>
  );
}
