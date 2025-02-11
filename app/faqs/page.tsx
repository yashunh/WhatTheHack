export default function FAQsPage() {
  const faqs = [
    {
      question: "What is Reflect?",
      answer: "Reflect is an AI-powered note-taking app that helps you organize your thoughts and ideas. It uses advanced language models to assist in taking better notes, generating ideas, and making connections between your thoughts."
    },
    {
      question: "How does the AI assistant work?",
      answer: "Our AI assistant uses advanced language models to analyze your notes, suggest connections, and help you generate new ideas. It can also help with summarizing content, creating to-do lists, and even drafting content based on your notes."
    },
    {
      question: "Is my data safe and private?",
      answer: "Yes, we take data privacy and security very seriously. All your notes are encrypted end-to-end, and we never access or share your personal data. Our AI processing is done in a way that preserves your privacy."
    },
    {
      question: "Can I use Reflect offline?",
      answer: "Yes, Reflect has an offline mode that allows you to take notes without an internet connection. Your notes will sync automatically when you're back online."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, Reflect is available on iOS and Android devices, allowing you to take notes and access your ideas on the go."
    }
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

