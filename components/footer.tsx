import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-md font-semibold">What The Hack</h3>
            <p className="text-md text-muted-foreground">
              Presented by Sci-Fi Innovation Club at Chandigarh University
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-md text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#claim-badge-section" className="text-md text-muted-foreground hover:text-primary">
                  Claim Badge
                </Link>
              </li>
              <li>
                <Link href="#Theme" className="text-md text-muted-foreground hover:text-primary">
                  Theme
                </Link>
              </li>
              <li>
                <Link href="#faqs-section" className="text-md text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-md text-muted-foreground">Email: scifiinnovationclub@gmail.com</li>
              {/* <li className="text-md text-muted-foreground">Phone: +1 (555) 123-4567</li> */}
              <li className="text-md text-muted-foreground">Chandigarh University, Mohali, Punjab 140413</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Follow Us</h3>
            <ul className="space-y-2">
              <li className="text-md text-muted-foreground">Instagram: @scifiinnovationclub</li>
              {/* <li className="text-md text-muted-foreground">Facebook: /reflectapp</li> */}
              <li className="text-md text-muted-foreground">LinkedIn: scifiinnovationclub</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-md text-muted-foreground">© 2025. Created by Ashini L J</p>
        </div>
      </div>
    </footer>
  )
}

