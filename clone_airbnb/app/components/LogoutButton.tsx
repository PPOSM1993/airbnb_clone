'user client';
import { useRouter } from "next/navigation";

import { resetAuthCookies } from "../lib/action";


import MenuLink from "./navbar/MenuLink";
import React from "react";

const LogoutButton: React.FC = () => {
    const router = useRouter();

    const submitLogout = async () => {
        resetAuthCookies();

        router.push('/')
    }

    return (
        <MenuLink label="Log Out" onClick={submitLogout} />
    )
}

export default LogoutButton;