{/*
import { createFileRoute } from "@tanstack/react-router";
import { CTA, Layout, PageIntro } from "@/components/site";
import craft from "@/assets/sliver-craft.jpg";

export const Route = createFileRoute("/about")({head:()=>({meta:[{title:"About SLIVER MOLDING DESIGNS FINISHING MASTER LTD"},{name:"description",content:"Learn about Sliver Designs' creative, client-focused approach to transforming spaces."},{property:"og:title",content:"About SLIVER MOLDING DESIGNS FINISHING MASTER LTD"},{property:"og:description",content:"Creating spaces that reflect your vision."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:About});
function About(){return <Layout><PageIntro kicker="About us" title="Creating spaces that reflect your vision." copy="We provide creative design and construction solutions focused on mouldings, renovations, and 3D visualization."/><section className="bg-paper py-20 md:py-28"><div className="shell grid items-center gap-14 lg:grid-cols-2"><img src={craft} alt="Detailed moulding craftsmanship" className="aspect-square w-full rounded-md object-cover"/><div><p className="eyebrow">Our approach</p><h2 className="mt-5 text-4xl font-bold leading-none text-ink">Every space has the potential to become something better.</h2><p className="mt-6 font-serif text-lg leading-8 text-ink/60">We begin by listening to your ideas and understanding what you want to achieve. From there, we develop the concept, visualize the design where necessary, and work toward bringing the approved idea to life.</p><div className="mt-10 grid gap-7 border-t border-ink/10 pt-8 sm:grid-cols-2"><div><h3 className="text-xl font-semibold">Our mission</h3><p className="mt-3 font-serif leading-7 text-ink/55">To transform spaces through creative design, thoughtful planning, and quality-focused execution.</p></div><div><h3 className="text-xl font-semibold">Our vision</h3><p className="mt-3 font-serif leading-7 text-ink/55">To become a trusted design and renovation partner known for creative solutions and visually impressive spaces.</p></div></div></div></div></section><CTA/></Layout>}

*/}

import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return <ComingSoon title="About Us" />;
}