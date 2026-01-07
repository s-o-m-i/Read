import Script from "next/script";

export type FAQItem = {
  question: string;
  answer: string;
};

interface FAQProps {
  title?: string;
  faqs: FAQItem[];
}

export default function FAQ({ title = "Frequently Asked Questions", faqs }: FAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="space-y-4">
      {/* Schema for Google */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2 className="text-2xl text-gray-900 font-semibold dark:text-gray-300">{title}</h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-900 dark:text-gray-300">{faq.question}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
