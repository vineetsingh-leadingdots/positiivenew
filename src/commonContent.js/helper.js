import { useSelector } from "react-redux";

export function authToken() {
    const  token = useSelector((state) => state?.persistedReducer?.user?.accessToken)
    return token ? token : null;
}