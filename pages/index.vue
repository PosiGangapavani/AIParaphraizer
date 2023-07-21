//...

// Define a default function component called Home
export default function Home() {

  // Define three state variables for the original text, paraphrased text, and paraphrase mode
  const [originalText, setOriginalText] = useState<string>("");
  const [paraphrasedText, setParaphrasedText] = useState<string>("");
  const [paraphraseMode, setParaphraseMode] = useState<string>("Standard");

  // Define a ref for the text area element
  const textAreaRef = useRef(null);

  // Define a state variable for the loading state of the paraphrasing operation
  const [loading, setLoading] = useState<boolean>(false);

  // Construct a prompt string based on the original text and paraphrase mode
  const prompt = `Paraphrase "${originalText}" using ${paraphraseMode} mode. Do not add any additional word.`;

  // Define an async function to handle the paraphrasing operation
  const handleParaphrase = async (e: React.FormEvent) => {
    // Prevent form submission if original text is empty
    if (!originalText) {
      toast.error("Enter text to paraphrase!");
      return;
    }

    // Set the loading state and reset the paraphrased text
    setLoading(true);

    // Send a POST request to the "/api/paraphrase" API endpoint with the prompt in the request body
    const response = await fetch("/api/paraphrase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    // Parse the response as JSON
    const data = await response.json();

    // Set the paraphrased text to the first choice's message content in the response
    setParaphrasedText(data.choices[0].message.content);

    // Reset the loading state
    setLoading(false);
  };

  // Return the JSX for the Home component
  return (
    <>
    {/* //... */}
    </>
  );
}