import {notFound} from "next/navigation";
import Link from "next/link";
import {cases} from "@/lib/content";
export function generateStaticParams(){return cases.map(c=>({slug:c.slug}));}
export default async function CasePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=cases.find(x=>x.slug===slug);if(!c)notFound();return <article className="article"><Link href="/cases" className="textButton">← Kaza arşivi</Link><span className="pill">AVIATION SAFETY CASE</span><h1>{c.title}</h1><div className="facts"><div><small>Tarih</small><b>{c.date}</b></div><div><small>Yer</small><b>{c.location}</b></div><div><small>Uçak</small><b>{c.aircraft}</b></div></div><p className="lead">{c.summary}</p><h2>Soruşturma bulguları</h2><ul>{c.findings.map(x=><li key={x}>{x}</li>)}</ul><div className="sourceBox"><b>Resmî kaynaklar</b>{c.sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a>)}<small>{c.note}</small></div></article>}
