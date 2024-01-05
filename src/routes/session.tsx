import { useEffect, useState } from "react";

import { getAudioContext } from "@/AudioContext";
import { Settings } from "@/modules/session/components/Settings/Settings";
import { StartSession } from "@/modules/session/components/StartSession";
import { StopSession } from "@/modules/session/components/StopSession";

export function Session() {
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [source, setSource] = useState<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    async function fetchAudio() {
      const audioContext = getAudioContext();
      if (!audioContext) return;
      const arrayBuffer = await fetch("/forest-rain.mp3").then((res) =>
        res.arrayBuffer()
      );
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      setAudioBuffer(audioBuffer);
    }
    fetchAudio();
  }, []);

  return (
    <div>
      <Settings />
      {audioBuffer && (
        <StartSession audioBuffer={audioBuffer} setSource={setSource} />
      )}
      {source && <StopSession sourceNode={source} setSource={setSource} />}
    </div>
  );
}
