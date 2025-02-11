import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to Reflect</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Reflect is your AI-powered note-taking companion, designed to help you capture, connect, and cultivate your ideas effortlessly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>AI-assisted note-taking</li>
            <li>Seamless idea connections</li>
            <li>Cross-platform synchronization</li>
            <li>Powerful search capabilities</li>
          </ul>
        </div>
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-muted-foreground mb-4">
            Ready to revolutionize your note-taking experience? Start your journey with Reflect today!
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-purple-900 to-purple-700 text-white hover:from-purple-800 hover:to-purple-600 h-10 py-2 px-4"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  )
}

