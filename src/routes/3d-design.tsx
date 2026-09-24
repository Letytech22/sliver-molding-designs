{/*
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout, PageIntro } from "@/components/site";
import { Button } from "@/components/ui/button";
import kitchen from "@/assets/sliver-3d-kitchen.jpg";

export const Route = createFileRoute("/3d-design")({head:()=>({meta:[{title:"3D Design and Visualization | Sliver Designs"},{name:"description",content:"Visualize layouts, colours, and finishes before construction begins."},{property:"og:title",content:"3D Design | Sliver Designs"},{property:"og:description",content:"See your project before you build with clear, realistic visualization."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Design3D});
const benefits=[["01","Visualize the final result","See a realistic representation of your proposed space."],["02","Explore different ideas","Compare layouts, finishes, colours, and design options."],["03","Make changes early","Adjust the design before physical construction begins."],["04","Improve communication","Give everyone involved a clear picture of the expected result."]];
function Design3D(){return <Layout><PageIntro kicker="3D design & visualization" title="See your space before you build." copy="Ideas are easier to understand when you can see them. Our 3D services bring the proposed space into view before construction or renovation begins."/><section className="bg-paper py-20 md:py-28"><div className="shell"><img src={kitchen} width={1024} height={640} alt="Photorealistic contemporary kitchen visualization" className="aspect-[16/8] w-full rounded-md object-cover"/><div className="mt-16 grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="eyebrow">Why use 3D?</p><h2 className="mt-5 text-4xl font-bold leading-none text-ink">Make confident decisions earlier.</h2></div><div className="grid gap-px overflow-hidden rounded-md border border-ink/10 md:grid-cols-2 lg:col-span-8">{benefits.map(([n,t,c])=><article key={n} className="bg-paper p-7"><span className="text-2xl font-bold text-ember">{n}</span><h3 className="mt-5 text-xl font-semibold">{t}</h3><p className="mt-3 font-serif leading-7 text-ink/55">{c}</p></article>)}</div></div><div className="mt-20 bg-ink p-9 text-paper md:p-14"><h2 className="text-4xl font-bold">From concept to reality.</h2><p className="mt-5 max-w-2xl font-serif text-lg leading-8 text-paper/65">Follow how an idea develops from a digital concept into a finished environment with aligned layouts, materials, and details.</p><Button asChild className="mt-8"><Link to="/contact">Start your 3D design <ArrowRight size={16}/></Link></Button></div></div></section></Layout>}

*/}



    import { createFileRoute } from "@tanstack/react-router";
    import { ComingSoon } from "@/components/ComingSoon";
    
    export const Route = createFileRoute("/3d-design")({
      component: ThreeDDesign,
    });
    
    function ThreeDDesign() {
        return <ComingSoon title="3D Design & Visualization" />;
      }