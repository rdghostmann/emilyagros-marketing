import { Sprout, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Logo from "/public/logo.png"


export function Footer() {
  const footerLinks = {
    product: [
      { label: "Features", href: "#services" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Download App", href: "#download" },
      // { label: "Pricing", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
      // { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
    legal: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      // { label: "Cookie Policy", href: "#" },
      // { label: "Refund Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/17M6ZPmHcd/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/emily.agros", label: "Instagram" },
  
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary">
              <Image src={Logo} alt="Emily-Agros" className="w-7 h-7 md:w-8 md:h-8" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Nigeria's leading agricultural marketplace connecting farmers and buyers for seamless farm produce
              trading.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Emilyagros. All rights reserved.</p>
          <p className="hidden text-sm text-muted-foreground">Made with ❤️ in Nigeria</p>
        </div>
      </div>
    </footer>
  )
}
