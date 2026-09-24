{/*
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTA, Layout, PageIntro } from "@/components/site";
import { Button } from "@/components/ui/button";
import moulding from "@/assets/sliver-moulding.jpg";
import renovation from "@/assets/sliver-renovation.jpg";
import kitchen from "@/assets/sliver-3d-kitchen.jpg";

export const Route = createFileRoute("/services")({ head: () => ({ meta: [{ title: "Mouldings & Renovation Services | Sliver Designs" },{ name:"description",content:"Explore professional mouldings, renovations, and 3D visualization services."},{property:"og:title",content:"Services | SLIVER MOLDING DESIGNS FINISHING MASTER LTD"},{property:"og:description",content:"Creative design and construction services tailored to your space."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}] }), component: Services });
const items = [
  {n:"01",title:"Architectural mouldings",copy:"Add character to plain walls and ceilings with elegant, modern, or decorative profiles created to complement your interior.",image:moulding,alt:"Decorative wall and ceiling mouldings"},
  {n:"02",title:"Thoughtful renovations",copy:"Give an existing room or complete property a fresh, functional new direction through careful design planning and quality finishing.",image:renovation,alt:"Complete living room renovation"},
  {n:"03",title:"3D design & visualization",copy:"See layouts, colours, finishes, and design concepts before construction begins, making decisions with greater clarity.",image:kitchen,alt:"Photorealistic 3D kitchen design"},
];
function Services(){return <Layout><PageIntro kicker="Our services" title="Design, detail, and transformation." copy="We help homeowners, businesses, and property owners move from a clear idea to a beautifully finished space."/><section className="bg-paper py-20 md:py-28"><div className="shell space-y-24">{items.map((x,i)=><article key={x.n} className="grid items-center gap-10 lg:grid-cols-2"><div className={i%2?"lg:order-2":""}><span className="text-6xl font-extrabold text-ink/12">{x.n}</span><h2 className="mt-5 text-4xl font-bold text-ink">{x.title}</h2><p className="mt-5 max-w-xl font-serif text-lg leading-8 text-ink/60">{x.copy}</p><Button asChild className="mt-7"><Link to="/contact">Discuss this service <ArrowRight size={16}/></Link></Button></div><img loading="lazy" src={x.image} alt={x.alt} className="aspect-[16/10] w-full rounded-md object-cover"/></article>)}</div></section><CTA/></Layout>}
*/}

  import { createFileRoute } from "@tanstack/react-router";
  import { ComingSoon } from "@/components/ComingSoon";
  
  export const Route = createFileRoute("/services")({
    component: Services,
  });
  
  function Services() {
    return <ComingSoon title="Our Services" />;
  }