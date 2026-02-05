import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';

// Sample testimonials - in production, this would come from a CMS or database
const testimonials = [
  {
    id: 1,
    quote: "The team at Workday Consulting Montreal transformed our HR operations. Their deep expertise and personalized approach made our Workday implementation a huge success.",
    author: "Sarah Chen",
    role: "VP of Human Resources",
    company: "Maple Healthcare",
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with this boutique firm was a breath of fresh air. They took the time to understand our unique challenges and delivered solutions that exceeded our expectations.",
    author: "Marc Dubois",
    role: "CFO",
    company: "Northern Finance Group",
    rating: 5,
  },
  {
    id: 3,
    quote: "Their integration expertise is unmatched. They seamlessly connected Workday with our existing systems, saving us countless hours of manual work.",
    author: "Jennifer Williams",
    role: "IT Director",
    company: "TechVentures Inc",
    rating: 5,
  },
  {
    id: 4,
    quote: "The training programs they developed for our team were comprehensive and easy to follow. User adoption has been outstanding thanks to their efforts.",
    author: "Pierre Tremblay",
    role: "Operations Manager",
    company: "Quebec Manufacturing Co",
    rating: 5,
  },
  {
    id: 5,
    quote: "Excellent ongoing support. Whenever we have questions or issues, their team responds quickly and resolves everything efficiently.",
    author: "Amanda Ross",
    role: "HR Manager",
    company: "Atlantic Retail",
    rating: 5,
  },
  {
    id: 6,
    quote: "Their reporting and analytics solutions have given us insights we never had before. We can now make data-driven decisions with confidence.",
    author: "Dr. Michael Laurent",
    role: "Dean of Administration",
    company: "Montreal University",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  const t = useTranslations('testimonials');
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

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Client Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Project Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-12 h-12 text-blue-200 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 leading-relaxed">
            "Choosing Workday Consulting Montreal was one of the best decisions we made. Their boutique approach means you get senior consultants who truly care about your success, not junior resources learning on your dime."
          </blockquote>
          <div className="mt-8">
            <div className="font-semibold text-gray-900">Executive Team</div>
            <div className="text-gray-600">Fortune 500 Company</div>
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

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[number] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
          {testimonial.author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.author}</div>
          <div className="text-sm text-gray-600">{testimonial.role}</div>
          <div className="text-sm text-blue-600">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}
