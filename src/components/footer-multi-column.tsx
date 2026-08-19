import Link from 'next/link';

interface FooterProps {
  description?: string;
  columns?: number;
  showLinks?: boolean;
  showNewsletter?: boolean;
  showSocial?: boolean;
  layout?: string;
  links?: Array<{ title: string; items: Array<{ label: string; url?: string }> }>;
  social?: Array<{ platform: string; url: string; icon?: string }>;
  copyright?: string;
}

export default function Footer({
  description = '',
  columns = 4,
  showLinks = true,
  showNewsletter = false,
  showSocial = true,
  layout = "centered",
  links = [{"title":"Pages","items":[{"label":"Features","url":"/features"},{"label":"Contact","url":"/contact"}]},{"title":"Products","items":[{"label":"Nimbus Extract"},{"label":"Nimbus Summarize"},{"label":"Nimbus Route"}]},{"title":"Offices","items":[{"label":"San Francisco, USA","url":"/contact"},{"label":"Lisbon, Portugal","url":"/contact"}]},{"title":"Contact","items":[{"label":"hello@nimbus.example","url":"mailto:hello@nimbus.example"}]}],
  social = [{"platform":"linkedin","url":"https://linkedin.com/company/nimbus"}],
  copyright = "2025",
}: FooterProps) {

  return (
    <footer className="bg-background border-t border-text-secondary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`flex flex-col md:flex-row md:justify-center gap-8`}>
          <div className="max-w-sm">
            <h3 className="text-lg font-bold text-secondary">Nimbus</h3>
            <p className="mt-2 text-sm text-text-secondary">Nimbus is an AI SaaS platform that extracts, summarizes and routes unstructured documents into your existing workflows.</p>
            <div className="mt-4 flex gap-4">
        <a href="https://linkedin.com/company/nimbus" aria-label="linkedin" className="text-text-secondary hover:text-text-secondary">
          linkedin
        </a></div>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-1`}>
        <div>
          <h4 className="text-sm font-semibold text-secondary">Pages</h4>
          <ul className="mt-4 space-y-2">
            
              <li>
                <a href="/features" className="text-sm text-text-secondary hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-text-secondary hover:text-primary">
                  Contact
                </a>
              </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-secondary">Products</h4>
          <ul className="mt-4 space-y-2">
            
              <li>
                <span className="text-sm text-text-secondary">
                  Nimbus Extract
                </span>
              </li>
              <li>
                <span className="text-sm text-text-secondary">
                  Nimbus Summarize
                </span>
              </li>
              <li>
                <span className="text-sm text-text-secondary">
                  Nimbus Route
                </span>
              </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-secondary">Offices</h4>
          <ul className="mt-4 space-y-2">
            
              <li>
                <a href="/contact" className="text-sm text-text-secondary hover:text-primary">
                  San Francisco, USA
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-text-secondary hover:text-primary">
                  Lisbon, Portugal
                </a>
              </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-secondary">Contact</h4>
          <ul className="mt-4 space-y-2">
            
              <li>
                <a href="mailto:hello@nimbus.example" className="text-sm text-text-secondary hover:text-primary">
                  hello@nimbus.example
                </a>
              </li>
          </ul>
        </div></div>
        </div>
        <div className="mt-8 pt-8 border-t border-text-secondary/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            &copy; 2026 Nimbus
          </p>
          
        </div>
      </div>
    </footer>
  );
}
