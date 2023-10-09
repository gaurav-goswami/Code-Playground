import toast from "react-hot-toast";

function handleError (e : any, navigate : any) {
    console.log("Socket error" , e);
    toast.error("Socket connection failed, try again later");
    navigate("/");
}

export default handleError;