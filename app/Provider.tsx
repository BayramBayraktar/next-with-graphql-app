'use client'
import 'animate.css';
import { PropsWithChildren, useEffect } from "react";
import { NormalizedCacheObject } from '@apollo/client/cache'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import ReduxProvider from "./redux-provider"
import { ThemeProvider } from '@/lib/ThemeProvider';

//graphql client connect
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API,
    cache: new InMemoryCache(),
})


export default function Providers({ children }: PropsWithChildren<any>) {

    return (
        <ApolloProvider client={client}>
            <ReduxProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </ReduxProvider>
        </ApolloProvider>
    );
}

