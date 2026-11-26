import Link from "next/link";
export default function SiteHeader(){return <header className="header"><Link href="/" className="brand"><span className="brandMark">✈</span><span>AEROBRIEF<small>AVIATION LEARNING</small></span></Link><nav><Link href="/learn">Mikro dersler</Link><Link href="/english">Mesleki İngilizce</Link><Link href="/cases">Kaza arşivi</Link></nav></header>}
