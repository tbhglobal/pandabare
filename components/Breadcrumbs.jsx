import { breadcrumbs, jsonLd } from '@/lib/seo.mjs';
export default function Breadcrumbs({items}) {
  return <><nav className="pb-breadcrumb" aria-label="Breadcrumb">{items.map(([name,path],i)=><span key={path}>{i>0&&<span aria-hidden="true" style={{marginRight:12}}>/</span>}{i===items.length-1?<span aria-current="page">{name}</span>:<a href={path}>{name}</a>}</span>)}</nav><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(breadcrumbs(items))}}/></>;
}
