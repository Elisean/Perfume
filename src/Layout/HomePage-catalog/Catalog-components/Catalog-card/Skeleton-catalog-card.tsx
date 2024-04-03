import React from "react"
import ContentLoader from "react-content-loader"


export const Skeleton:React.FC = (props:any) => (

<ContentLoader 
    speed={2}
    width={305}
    height={517}
    viewBox="0 0 305 517"
    backgroundColor="var(--border)"
    foregroundColor="var(--goldenWhite)"
    {...props}
    >
     <rect x="0" y="17" rx="0" ry="0" width="300" height="2" />
     <rect x="0" y="515" rx="0" ry="0" width="300" height="2" />
     <rect x="0" y="17" rx="0" ry="0" width="2" height="499" />
     <rect x="299" y="17" rx="0" ry="0" width="2" height="499" />
     <rect x="28" y="35" rx="0" ry="0" width="245" height="220" /> 
     <rect x="28" y="270" rx="4" ry="4" width="245" height="44" /> 
     <rect x="28" y="330" rx="4" ry="4" width="245" height="22" /> 
     <rect x="28" y="368" rx="4" ry="4" width="34" height="34" /> 
     <rect x="100" y="368" rx="4" ry="4" width="34" height="34" /> 
     <rect x="175" y="368" rx="4" ry="4" width="34" height="34" /> 
     <rect x="238" y="368" rx="4" ry="4" width="34" height="34" /> 
     <rect x="28" y="418" rx="4" ry="4" width="98" height="22" /> 
     <rect x="215" y="418" rx="4" ry="4" width="57" height="22" /> 
     <rect x="28" y="455" rx="4" ry="4" width="245" height="45" />
    </ContentLoader>
)

