"use client"
import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

interface GoogleProps {
    processType: string;
    text: string;
}


const GoogleBtn: React.FC<GoogleProps> = ({ processType, text }) => {
    const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID

    if (!CLIENT_ID) {
        throw new Error("CLIENT_ID is not defined in the environment variables.");
    }

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLogin
                size='large'
                width={300}
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />;
        </GoogleOAuthProvider>
    )
}

export default GoogleBtn