import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function NavigationHook() {
    const navigate = useNavigate();

    const navigateTo = useCallback((path) => {
        navigate(path);
    }, [navigate]);

    return navigateTo;
}

export default NavigationHook;