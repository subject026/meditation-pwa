export function StopSession({
  sourceNode,
  setSource,
}: {
  sourceNode: AudioBufferSourceNode;
  setSource: (sourceNode: AudioBufferSourceNode | null) => void;
}) {
  function handleStop() {
    sourceNode.stop();
    setSource(null);
  }

  return <button onClick={handleStop}>Stop Session</button>;
}
