"use client";

import React, { createContext, useState } from "react";
import { useRouter } from "next/navigation";

export type SignInData = {
    username: string;
    password: string;
}

type AtuhContextType = {
    login: (data:SignInData) => void;
    authError:string | null;
    isAuthenticated: boolean;
}

export const AtuhContext = createContext({} as AtuhContextType);

export default function AuthProvider({ children } : {children: React.ReactNode}){
    const [authError, setAuthError] = useState<string | null>(null);
    
}