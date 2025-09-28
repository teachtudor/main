export default function RecordingButton({ recording, onStart, onStop }) {
  return (
    <button onClick={recording ? onStop : onStart}>
      {recording ? "Stop Recording" : "Start Recording"}
    </button>
  );
}
