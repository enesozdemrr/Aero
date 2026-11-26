import type {Metadata} from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
export const metadata:Metadata={title:"AeroBrief | Havacılık Öğrenme Platformu",description:"Uçak sistemleri, bakım bilgisi, havacılık kazaları ve mesleki İngilizce için mikro öğrenme platformu."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body><SiteHeader/><main>{children}</main><footer className="footer"><b>AEROBRIEF</b><p>Eğitim amaçlıdır. Gerçek bakım işlemlerinde daima ilgili uçak tipi için geçerli, onaylı bakım dokümanlarını kullanın.</p></footer></body></html>}
