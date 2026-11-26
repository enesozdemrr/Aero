"use client";
import {useState} from "react";
export default function Quiz({question,options,answer,explanation}:{question:string;options:string[];answer:number;explanation:string}){
 const [choice,setChoice]=useState<number|null>(null);
 return <div className="quiz"><h3>{question}</h3><div className="options">{options.map((o,i)=><button key={o} disabled={choice!==null} onClick={()=>setChoice(i)} className={`option ${choice===i?(i===answer?"correct":"incorrect"):""}`}>{o}</button>)}</div>{choice!==null&&<p className={choice===answer?"success":"feedback"}>{choice===answer?"Doğru! ":"Tekrar incele. "}{explanation}</p>}<button className="textButton" onClick={()=>setChoice(null)}>Tekrar dene</button></div>
}
