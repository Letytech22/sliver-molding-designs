{/*
import { createFileRoute } from "@tanstack/react-router";
import { CTA, Layout, PageIntro } from "@/components/site";
import renovation from "@/assets/sliver-renovation.jpg";
import kitchen from "@/assets/sliver-3d-kitchen.jpg";
import moulding from "@/assets/sliver-moulding.jpg";
import hero from "@/assets/sliver-hero.jpg";

export const Route = createFileRoute("/projects")({ head:()=>({meta:[{title:"Projects | SLIVER MOLDING DESIGNS FINISHING MASTER LTD"},{name:"description",content:"Explore moulding, renovation, and 3D visualization work by Sliver Designs."},{property:"og:title",content:"Our Work | Sliver Designs"},{property:"og:description",content:"Spaces transformed through design, renovation, and creative finishing."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Projects});
const work=[[renovation,"Living room transformation","Renovation · Residential"],[kitchen,"Modern kitchen concept","3D Design · Residential"],[moulding,"Bedroom architectural details","Mouldings · Residential"],[hero,"Warm contemporary residence","Interior finishing · Residential"]];
function Projects(){return <Layout><PageIntro kicker="Our work" title="Ideas made visible. Spaces made real." copy="Our portfolio brings together the thinking, visualization, and careful finishing behind every transformation."/><section className="bg-paper py-20 md:py-28"><div className="shell grid gap-x-6 gap-y-14 md:grid-cols-2">{work.map(([image,title,type],i)=><article key={title} className={i===0?"md:col-span-2":""}><img src={image} loading="lazy" alt={title} className={i===0?"aspect-[16/8] w-full rounded-md object-cover":"aspect-[16/10] w-full rounded-md object-cover"}/><h2 className="mt-5 text-2xl font-semibold text-ink">{title}</h2><p className="mt-1 text-sm text-ink/50">{type}</p></article>)}</div></section><CTA/></Layout>}

*/}



  import { createFileRoute } from "@tanstack/react-router";
  import { ComingSoon } from "@/components/ComingSoon";
  
  export const Route = createFileRoute("/projects")({
    component: Projects,
  });
  
  function Projects() {
    return <ComingSoon title="Our Projects" />;
  }