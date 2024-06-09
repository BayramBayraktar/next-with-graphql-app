
import React from "react";

export interface IThemeType {
    colorTheme: 'light' | 'dark' | '' 
}

export interface SearchModalProps {
    isActive: boolean | null;
    setIsActive: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export interface DropMenuProps {
    IsMenuHover: boolean;
    setIsMenuHover: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface QuerySignArgs {

    Name: string;
    EmailOrPhone: string;
    Password: string;
}

export interface MailOptions {
    from: string;
    to: string;
    subject: string;
    html: string
}

export interface NodemailerProps {
    Name: string;
    Email: string
    HashedPassword: string
}