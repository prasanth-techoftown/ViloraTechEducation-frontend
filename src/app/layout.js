import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Vilora Tech Education || Pondicherry’s top institute for Python, AI, Java, ReactJS, MERN, and MEAN Training Center ",
description: "Vilora Tech Education is Pondicherry’s top institute for Python, AI, Java, ReactJS, MERN, and MEAN Training Center. Learn job-ready skills from industry experts.",
 keywords: [
  // Core Education & Training Keywords
  "AI training institute in Pondicherry",
  "AI training institute in Puducherry",
  "Artificial Intelligence course Pondicherry",
  "Artificial Intelligence course Puducherry",
  "Machine Learning training Pondicherry",
  "Deep Learning course Pondicherry",
  "AI and Data Science institute in Pondicherry",
  "Python for AI training Pondicherry",
  "AI developer training Puducherry",
  "AI internship program Pondicherry",
  "AI career course in Puducherry",
  "Neural Networks training Pondicherry",
  "AI programming course Pondicherry",
  "AI certification program in Pondicherry",

  "Software development course in Pondicherry",
  "Software development course in Puducherry",
  "Full Stack Developer course Pondicherry",
  "Full Stack Developer course Puducherry",
  "Front-end development training Pondicherry",
  "Back-end development training Pondicherry",
  "Python full stack course Pondicherry",
  "Java course in Pondicherry",
  "Advanced Java training Pondicherry",
  "React JS course Pondicherry",
  "React developer course Pondicherry",
  "Node.js course Pondicherry",
  "JavaScript training Pondicherry",
  "HTML CSS JavaScript course Pondicherry",
  "MERN stack training Pondicherry",
  "MEAN stack course Pondicherry",
  "Web development institute in Pondicherry",
  "Web development training Puducherry",
  "Database and SQL training Pondicherry",
  "Software testing course Pondicherry",
  "App development course Pondicherry",
  "Web application development Pondicherry",

  // Multimedia & Creative Skills
  "Multimedia institute in Pondicherry",
  "Multimedia institute in Puducherry",
  "Photoshop classes Pondicherry",
  "Graphic design course Pondicherry",
  "Video editing training Pondicherry",
  "Animation and VFX course Pondicherry",
  "UI UX design course Pondicherry",

  // Business & Language Skills
  "Accounts training Pondicherry",
  "Tally course Pondicherry",
  "MS Office course Pondicherry",
  "Spoken English course Pondicherry",
  "English speaking classes Pondicherry",
  "Communication skills training Pondicherry",
  "Personality development classes Pondicherry",

  // Career & Local Keywords
  "Best training institute in Pondicherry",
  "Best training institute in Puducherry",
  "Top AI institute in Pondicherry",
  "Top software institute in Pondicherry",
  "Best computer institute Pondicherry",
  "Career-oriented courses Pondicherry",
  "IT training center Pondicherry",
  "Tech education in Pondicherry",
  "Online tech courses Pondicherry",
  "Professional certification courses Pondicherry",
  "Job-ready courses in Pondicherry",
  "Career-oriented IT courses Pondicherry",
  "Hands-on AI training Pondicherry",
  "AI and Software institute Pondicherry",
  "Vilora Tech Education Pondicherry",
  "Vilora Tech Education Puducherry",
  "Best AI and Software training center in Pondicherry",
  "Top coding institute in Pondicherry",
  "Full stack developer course in Pondicherry",
  "Python, AI, Java, ReactJS, MERN, MEAN training Pondicherry"
],

  areaServed: ["Pondicherry", "Puducherry", "Tamil Nadu", "India"],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  authors: [{ name: "Vilora Tech Education", url: "https://viloratecheducation.com" }],
  metadataBase: new URL("https://viloratecheducation.com"),
    openGraph: {
    title: "Vilora Tech Education | Pondicherry Best Institute for AI & Software Training",
    description:
      "Join Vilora Tech Education, the best institute in Pondicherry for AI, Software, Multimedia, and Career courses. Learn hands-on skills from industry experts.",
    url: "https://viloratecheducation.com",
    siteName: "Vilora Tech Education Pondicherry",
    images: [
      {
        url: "/assets/LOGO.jpg",
        width: 1200,
        height: 630,
        alt: "Vilora Tech Education Pondicherry Institute for AI, Software & Multimedia",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilora Tech Education | Best Institute in Pondicherry",
    description:
      "Learn AI, Software Development, and Multimedia at Vilora Tech Education U+2013 the leading institute in Pondicherry.",
    images: ["/assets/LOGO.jpg"],
    creator: "@ViloraTech",
  },
  alternates: {
    canonical: "https://viloratecheducation.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      
  <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YHBB3SEGP2"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YHBB3SEGP2');
          `}
        </Script>
      
      <body>
        {/* Favicons and manifest */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="../../src/app/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../../src/app/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../../src/app/favicon-16x16.png" />
        <link rel="manifest" href="../../src/app/site.webmanifest" /> */}
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />

        {/* Schema.org JSON-LD for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Vilora Tech Education",
              url: "https://viloratecheducation.com",
              logo: "https://viloratecheducation.com/images/og-image.png",
              description:
                "Vilora Tech Education provides hands-on training in AI, Software Development, Multimedia, Accounts, and Spoken English.",
              // sameAs: [
              //   "https://www.facebook.com/viloratech",
              //   "https://www.instagram.com/viloratech",
              //   "https://www.linkedin.com/company/viloratech",
              // ],

//               Address: 1st Floor, 62, Vallalar Salai Rd, Venkata Nagar, Puducherry, 605011
// Phone: 086103 91458

              address: {
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 11.9413258,
                  "longitude": 79.8217365
                }
                ,
                "@type": "PostalAddress",
                streetAddress: "1st Floor, 62, Vallalar Salai Rd, Venkata Nagar",
                addressLocality: "Puducherry",
                addressRegion: "Pondicherry,Puducherry",
                postalCode: "605011",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9944025562",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English,Tamil",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
