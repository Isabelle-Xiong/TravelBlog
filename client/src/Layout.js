import Header from "./Header"
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <main>
            <Header />
            {/* Outlet allows nested routes. Here we have post or login depending on situation */}
            <Outlet />
        </main>
    );
}