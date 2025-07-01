function Tone({ emailContent }) {
  const [tone, setTone] = useState('');

  return (
    <div className="tone">
      <h2>{tone}</h2>
    </div>
  );
}
