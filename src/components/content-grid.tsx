interface ContentGridProps {
  headline?: string;
  subtitle?: string;
  columns?: number;
  gap?: 'small' | 'medium' | 'large';
  responsive?: boolean;
  items?: Array<{ title: string; description?: string; icon?: string }>;
  media?: Array<string | { url: string; alt?: string; width?: number; height?: number; role?: string }>;
}

export default function ContentGrid({ headline = '', subtitle = '', columns = 4, gap = 'medium', responsive = true, items = [{"title":"Nimbus Extract","description":"Turn PDFs, invoices and contracts into clean structured data."},{"title":"Nimbus Summarize","description":"Concise summaries of long documents, tuned to the questions your team asks."},{"title":"Nimbus Route","description":"Route each document to the right person or system without rules that break."}], media = [] }: ContentGridProps) {

  return (

    <section className="py-16 bg-background" data-wae-responsive="compact-table">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary">What We Offer</h2>
          <p className="mt-2 text-lg text-text-secondary">Everything you need to succeed.</p>
        </div>
        <div className={`mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}>
          
        <div className="p-6 bg-surface rounded-lg shadow-sm border border-text-secondary/15">
          
          <h3 className="mt-3 text-lg font-semibold text-secondary">Nimbus Extract</h3>
          <p className="mt-2 text-sm text-text-secondary">Turn PDFs, invoices and contracts into clean structured data.</p>
        </div>
        <div className="p-6 bg-surface rounded-lg shadow-sm border border-text-secondary/15">
          
          <h3 className="mt-3 text-lg font-semibold text-secondary">Nimbus Summarize</h3>
          <p className="mt-2 text-sm text-text-secondary">Concise summaries of long documents, tuned to the questions your team asks.</p>
        </div>
        <div className="p-6 bg-surface rounded-lg shadow-sm border border-text-secondary/15">
          
          <h3 className="mt-3 text-lg font-semibold text-secondary">Nimbus Route</h3>
          <p className="mt-2 text-sm text-text-secondary">Route each document to the right person or system without rules that break.</p>
        </div>
        </div>
      </div>
    </section>
  );
}
