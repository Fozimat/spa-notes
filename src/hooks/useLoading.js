import { useEffect, useState } from "react";

const useLoading = (initialize = true) => {
    const [loading, setLoading] = useState(initialize);

    useEffect(() => {
        return () => {
            setLoading(true);
        }
    }, []);
    return [loading, setLoading];
}

export default useLoading;