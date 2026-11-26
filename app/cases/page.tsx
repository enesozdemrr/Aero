import Link from "next/link";
import {cases} from "@/lib/content";
export default function Cases(){return <section className="page"><div className="eyebrow">AVIATION SAFETY FILES</div><h1 className="pageTitle">Kaza incelemeleri</h1><p className="lead">Resmî soruşturma raporları temelinde olayın ne zaman, nerede ve neden yaşandığını incele.</p>{cases.map(c=><Link className="caseTeaser" href={`/cases/${c.slug}`} key={c.slug}><div><span className="pill">CASE STUDY</span><h3>{c.title}</h3><p>{c.date} · {c.location} · {c.aircraft}</p></div><b>İncele →</b></Link>)}</section>}
