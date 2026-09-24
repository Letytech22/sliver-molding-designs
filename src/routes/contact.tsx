import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageIntro } from "@/components/site";
import { Button } from "@/components/ui/button";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Request a Quote | SLIVER MOLDING DESIGNS FINISHING MASTER LTD",
      },
      {
        name: "description",
        content:
          "Tell Sliver Designs about your moulding, renovation, or 3D visualization project.",
      },
      {
        property: "og:title",
        content: "Contact SLIVER MOLDING DESIGNS FINISHING MASTER LTD",
      },
      {
        property: "og:description",
        content:
          "Let’s talk about the space you would like to transform.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
    const [service, setService] = useState("");
  function handleQuoteSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const selectedService = String(data.get("service") || "");
    const otherService = String(data.get("otherService") || "");
    
    const finalService =
      selectedService === "Other" && otherService
        ? otherService
        : selectedService;
            const location = String(data.get("location") || "");
    const project = String(data.get("project") || "");

    const message = `Hello Sliver Designs,

I would like to request a quote.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service required: ${finalService}
Project location: ${location}

Project details:
${project}`;

    const whatsappNumber = "256740835143";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <Layout>
      <PageIntro
        kicker="Contact"
        title="Let’s talk about your project."
        copy="Do you have a space you would like to transform? Tell us about your project and the service you need."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">

          {/* CONTACT DETAILS */}
          <div className="lg:col-span-4">
            <p className="eyebrow">
              Start a conversation
            </p>

            <h2 className="mt-5 text-3xl font-bold text-ink">
              Bring us your idea.
            </h2>

            <p className="mt-5 font-serif leading-7 text-ink/60">
              Planning a moulding, renovation, or 3D design
              project? Reach out and tell us what you have in
              mind.
            </p>

            <div className="mt-8 space-y-6">

              {/* PHONE */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-ink/45">
                  Phone
                </p>

                <a
                  href="tel:+256776532068"
                  className="mt-1 block text-lg font-semibold text-ink transition hover:text-ember"
                >
                  +256 776 532 068
                </a>
              </div>

              {/* WHATSAPP */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-ink/45">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/256740835143?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20project%20with%20Sliver%20Designs."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-lg font-semibold text-ink transition hover:text-ember"
                >
                  Chat with us on WhatsApp
                </a>
              </div>

              {/* EMAIL */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-ink/45">
                  Email
                </p>

                <a
                  href="mailto:sliversmoldingdesigns@gmail.com"
                  className="mt-1 block break-all text-lg font-semibold text-ink transition hover:text-ember"
                >
                  sliversmoldingdesigns@gmail.com
                </a>
              </div>

              {/* LOCATION */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-ink/45">
                  Location
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kyanja%2C%20Kampala%2C%20Uganda"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-lg font-semibold text-ink transition hover:text-ember"
                >
                  Kyanja, Kampala, Uganda
                </a>
              </div>
            </div>
          </div>

          {/* QUOTE FORM */}
          <form
            className="grid gap-5 lg:col-span-8 sm:grid-cols-2"
            onSubmit={handleQuoteSubmit}
          >
            <Field
              label="Full name"
              name="name"
              required
            />

            <Field
              label="Phone number"
              name="phone"
              type="tel"
              required
            />

            <Field
              label="Email address"
              name="email"
              type="email"
              required
            />

<label className="grid gap-2 text-sm font-semibold text-ink">
  Service required

  <select
    name="service"
    required
    value={service}
    onChange={(e) => setService(e.target.value)}
    className="min-h-12 rounded-md border border-ink/15 bg-paper px-4 font-normal outline-none transition focus:border-ember"
  >
    <option value="" disabled>
      Select a service
    </option>

    <option value="Mouldings">
      Mouldings
    </option>

    <option value="Renovation">
      Renovation
    </option>

    <option value="3D Design">
      3D Design
    </option>

    <option value="Other">
      Other
    </option>
  </select>
</label>

{service === "Other" && (
  <Field
    label="Please specify the service"
    name="otherService"
    required
  />
)}
            <Field
              label="Project location"
              name="location"
              required
            />

            <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
              Tell us about your project

              <textarea
                name="project"
                rows={6}
                required
                className="rounded-md border border-ink/15 bg-paper p-4 font-normal outline-none transition focus:border-ember"
                placeholder="Describe your space, goals, and preferred timeline"
              />
            </label>

            <div className="sm:col-span-2">
              <Button type="submit">
                Request a Quote
              </Button>

              <p className="mt-3 text-sm text-ink/50">
                Your project details will open in WhatsApp
                ready to send.
              </p>
            </div>
          </form>
        </div>

        {/* MAP */}
        <div className="shell mt-16">
          <div className="overflow-hidden rounded-md border border-ink/10">
            <iframe
              title="Sliver Designs location in Kyanja, Kampala"
              src="https://www.google.com/maps?q=Kyanja%2C%20Kampala%2C%20Uganda&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}

      <input
        name={name}
        type={type}
        required={required}
        className="min-h-12 rounded-md border border-ink/15 bg-paper px-4 font-normal outline-none transition focus:border-ember"
      />
    </label>
  );
}