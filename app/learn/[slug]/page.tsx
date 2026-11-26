import {notFound} from "next/navigation";
import Link from "next/link";
import {lessons} from "@/lib/content";
import Quiz from "@/components/Quiz";
export function generateStaticParams(){return lessons.map(l=>({slug:l.slug}));}
export default async function LessonPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const l=lessons.find(x=>x.slug===slug);if(!l)notFound();return <article className="article"><Link href="/learn" className="textButton">← Tüm dersler</Link><div className="articleMeta"><span className="pill">{l.category}</span><span>{l.minutes} dk okuma · {l.level}</span></div><h1>{l.title}</h1><p className="lead">{l.summary}</p>{l.body.map((p,i)=><p key={i}>{p}</p>)}<div className="takeaways"><h3>Akılda kalması gerekenler</h3><ul>{l.keyPoints.map(x=><li key={x}>{x}</li>)}</ul></div><Quiz question={l.question} options={l.options} answer={l.answer} explanation={l.explanation}/><div className="sourceBox"><b>Kaynak</b><a href={l.source} target="_blank" rel="noreferrer">{l.sourceLabel} ↗</a><small>Bu ders eğitim amaçlıdır. Gerçek bakım işlemleri için onaylı ve güncel uçak tipi dokümanlarını esas alın.</small></div></article>}
