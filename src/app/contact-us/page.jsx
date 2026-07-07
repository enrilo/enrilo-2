import ContactUsClient from "./ContactUsClient";

export const metadata = {
  title: "Contact Us - Talk to the Enrilo Team",
  description:
    "Have questions about Enrilo's consultancy management software? Reach out to our team for a demo, pricing details, or support for your education consultancy.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Enrilo - Consultancy Management Software",
    description:
      "Reach out to our team for a demo, pricing details, or support for your education consultancy.",
    url: "/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
