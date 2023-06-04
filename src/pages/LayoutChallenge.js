import FloatingMenu from "../components/FloatingMenu";
import { Outlet } from "react-router-dom";

const LayoutChallenge = () => {
    return (
        <>
            <Outlet/>
            <FloatingMenu/>
        </>
    )
}

export default LayoutChallenge;