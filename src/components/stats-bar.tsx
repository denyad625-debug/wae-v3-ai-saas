interface StatsProps {
  headline?: string;
  subtitle?: string;
  stats?: Array<{ label: string; value: string }>;
}

export default function Stats({ headline = '', subtitle = '', stats = [{"label":"Documents processed monthly","value":"2.4M"},{"label":"Average accuracy","value":"99.2"},{"label":"Hours saved per week","value":"18"}] }: StatsProps) {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary">Our Impact</h2>
          <p className="mt-2 text-lg text-text-secondary">Numbers that speak for themselves.</p>
        </div>
        <div className={`mt-10 grid grid-cols-1 sm:grid-cols-4 gap-8`}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-secondary">{stat.value}</div>
              <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
