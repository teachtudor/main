export default function TranscriptDisplay({ text }) {
  return (
    <pre style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>
      {text}
    </pre>
  );
}
