import { ReactNode } from "react";

export interface ContainersTypes {
    direction?: string;
    align?: string;
    justify?: string;
    wrap?: string;
    children?: ReactNode;
    width?: string;
    maxWidth?: string;
    margin?: string;
    padding?: string;
    flex?: string;
    position?: string;
    response?:string;
    footerresponse?:string;
    catalogresponse?:string;
    filtersresponse?:string;
    cardResponse?:boolean;
    btnsCardResponse?:boolean;
    registrationresponse?:string
    cardslikesresponse?:string
    ref?:any;
    onClick?:(event: MouseEvent) => void;
}