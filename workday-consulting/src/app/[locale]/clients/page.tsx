import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';

// Sample client data - in production, this would come from a CMS or database
const currentClients = [
  { name: 'Maple Healthcare', industry: 'healthcare', logo: 'MH' },
  { name: 'Northern Finance Group', industry: 'finance', logo: 'NF' },
  { name: 'TechVentures Inc', industry: 'technology', logo: 'TV' },
  { name: 'Quebec Manufacturing Co', industry: 'manufacturing', logo: 'QM' },
  { name: 'Atlantic Retail', industry: 'retail', logo: 'AR' },
  { name: 'Montreal University', industry: 'education', logo: 'MU' },
];

const formerClients = [
  { name: 'Pacific Solutions', industry: 'technology', logo: 'PS' },
  { name: 'Eastern Health Services', industry: 'healthcare', logo: 'EH' },
  { name: 'Western Bank', industry: 'finance', logo: 'WB' },
  { name: 'National Retail Corp', industry: 'retail', logo: 'NR' },
];

export default function ClientsPage() {
  const t = useTranslations('clients');
  const cta = useTranslations('cta');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">{t('title')}</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries({
              healthcare: '🏥',
              finance: '🏦',
              manufacturing: '🏭',
              retail: '🛒',
              technology: '💻',
              education: '🎓',
            }).map(([industry, emoji]) => (
              <div key={industry} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <span className="text-2xl mb-2 block">{emoji}</span>
                <span className="text-sm font-medium text-gray-700">{t(`industries.${industry}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Clients */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('current')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentClients.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* Former Clients */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('former')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {formerClients.map((client) => (
              <ClientCard key={client.name} client={client} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{cta('title')}</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">{cta('subtitle')}</p>
          <CTAButton />
        </div>
      </section>
    </>
  );
}

async function CTAButton() {
  const locale = await getLocale();
  const t = useTranslations('cta');

  return (
    <Link
      href={`/${locale}/contact`}
      className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-blue-600 shadow-lg hover:bg-gray-50 transition-all"
    >
      {t('button')}
    </Link>
  );
}

function ClientCard({ client, compact = false }: { client: { name: string; industry: string; logo: string }; compact?: boolean }) {
  const t = useTranslations('clients');

  const industryColors: Record<string, string> = {
    healthcare: 'bg-red-100 text-red-600',
    finance: 'bg-green-100 text-green-600',
    manufacturing: 'bg-yellow-100 text-yellow-600',
    retail: 'bg-purple-100 text-purple-600',
    technology: 'bg-blue-100 text-blue-600',
    education: 'bg-orange-100 text-orange-600',
  };

  if (compact) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 font-bold">
            {client.logo}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{client.name}</h3>
            <span className={`inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full ${industryColors[client.industry]}`}>
              {t(`industries.${client.industry}`)}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
          {client.logo}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
          <span className={`inline-block mt-1 px-3 py-1 text-sm font-medium rounded-full ${industryColors[client.industry]}`}>
            {t(`industries.${client.industry}`)}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Active Partnership
      </div>
    </div>
  );
}
