import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Reflect</h3>
            <p className="text-sm text-muted-foreground">
              An AI-powered note-taking app designed to mirror the way your mind works.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-sm text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: support@reflect.app</li>
              <li className="text-sm text-muted-foreground">Phone: +1 (555) 123-4567</li>
              <li className="text-sm text-muted-foreground">123 AI Street, Tech City, TC 12345</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Twitter: @reflectapp</li>
              <li className="text-sm text-muted-foreground">Facebook: /reflectapp</li>
              <li className="text-sm text-muted-foreground">LinkedIn: /company/reflect-app</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">© 2023 Reflect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

