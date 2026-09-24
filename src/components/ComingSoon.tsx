import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site";

export function ComingSoon({
  title,
}: {
  title: string;
}) {
  return (
    <Layout>
      <section className="flex min-h-[70vh] items-center bg-paper py-24">
        <div className="shell text-center">
          <p className="eyebrow">
            Sliver Designs & Construction
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold text-ink md:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-8 text-ink/70">
            We are currently preparing this page.
            More project information and content will be added soon.
          </p>

          <Button asChild className="mt-9 h-14 px-8">
            <Link to="/">
              <ArrowLeft size={18} />
              Back to homepage
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}