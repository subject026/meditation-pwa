import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AudioContextContext = createContext<
  { audioContext: AudioContext } | undefined
>({ audioContext: undefined });

function AudioContextProvider({ children }: { children: ReactNode }) {
  const [audioContext, setAudioContext] = useState<AudioContext | undefined>();
  useEffect(() => {
    if (!audioContext) setAudioContext(new AudioContext());
  }, [audioContext, setAudioContext]);

  return (
    <AudioContextContext.Provider value={{ audioContext }}>
      {children}
    </AudioContextContext.Provider>
  );
}

function useAudioContext() {
  const context = useContext(AudioContextContext);
  if (context === undefined) {
    throw new Error(
      "useAudioContext must be used within a AudioContextProvider"
    );
  }
  return context;
}

export { AudioContextProvider, useAudioContext };
