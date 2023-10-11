import axios from "axios"
import toast from "react-hot-toast"

const isPlaygroundExists = async (playgroundId : string | undefined) => {
    const toastId = toast.loading("Loading...");
    try {
        const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
        const data = await axios.get(`${url}/playground/check-playground/${playgroundId}` , {
            withCredentials : true,
            headers : {
                "Content-Type" : "application/json"
            },
            params : {
                roomId : playgroundId
            }
        });
        console.log("isPlaygroundExists" , data.data);
        toast.dismiss(toastId);
        return true;
    } catch (error : any) {
        // console.log("error in isPlaygroundExists" , error.response);
        toast.error(error.response?.data?.message);
        toast.dismiss(toastId);
        return false;
    }
}

export default isPlaygroundExists;