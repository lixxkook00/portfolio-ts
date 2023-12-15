export interface IProject {
    name : string; 
    img : string;
    linkViewPage : string;
    linkSourceCode : string;
    type : string;
    material : {
        language : string;
        color : string;
        percent : string;
    }[];
}

export interface IpifyResponse {
    ip: string;
}

export interface IWishList  {
    id: number;
    title: string;
    items: string[];
};