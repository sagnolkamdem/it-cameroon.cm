import Image from "next/image";
import { useEffect, useState } from "react";
import useTheme from "./hooks/useTheme";
import { AuthLayoutProps } from "./layout.interface";

const AuthLayout = (props: AuthLayoutProps) => {

    const [theme, setTheme] = useState('');

    useTheme(theme);

    return ( 
        <main className="relative flex min-h-full">

            {props.children}

        </main>
     );
}
 
export default AuthLayout;