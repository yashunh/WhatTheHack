export default function ContactUsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-8">
        We'd love to hear from you! Whether you have a question about our product, need support, or just want to share your thoughts, don't hesitate to reach out.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>Email: support@reflect.app</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 AI Street, Tech City, TC 12345</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>Twitter: @reflectapp</li>
            <li>Facebook: /reflectapp</li>
            <li>LinkedIn: /company/reflect-app</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

