"use client";

import { PropsWithChildren, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import Store from "@/lib/Store/index";

export default function ReduxProvider({ children }: PropsWithChildren<any>) {
    
    return (
        <Provider store={Store}>
            {children}
        </Provider>
    );
}