import { NavigateFunction } from "react-router-dom";

export type FetchType={
    fetchOptions:{
        context: string;
        method: string;
        data: { [id: string]: string | number };
        hasCredentials: boolean;
        bodyFormat: "row" | "form-data";
    }
}
export type RequestValidationType = {
    showToast: (message: string, type?: string) => void,
    removeUser:()=>void,
    controllerRef:React.MutableRefObject<AbortController | null>,
    navigator:NavigateFunction
}