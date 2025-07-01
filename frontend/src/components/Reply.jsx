function Reply({ emailContent, tone }) {
  const [generatedReply, setGeneratedReply] = useState('');

  const generateReply = () => {
    // Generate a reply based on the email content and tone
    setGeneratedReply(`Replying to: ${emailContent} with tone: ${tone}`);
  };

  return (
    <div className="reply">
      <h2>Generated Reply</h2>
      <p>{generatedReply}</p>
      <button onClick={generateReply}>Generate Reply</button>
    </div>
  );
}
