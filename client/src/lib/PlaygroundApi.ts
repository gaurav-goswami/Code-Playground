import {toast} from "react-hot-toast";
import { ILeavePlayground, IPlaygroundCommonFnParam } from "../Interface/Interface";

export const createPlayground : IPlaygroundCommonFnParam = async (createPlaygroundFn , playgroundDetails, setDisable, navigate) => {
    const toastId = toast.loading("Initializing playground...");
    setDisable(true);
    try {
        await createPlaygroundFn(playgroundDetails).unwrap();
        toast.success("Playground created successfully");
        navigate(`/playground/${playgroundDetails.roomId}`);

    } catch (error : any) {
        console.log("Error in create playground api" , error);
        toast.error(error.data?.message)
    }
    toast.dismiss(toastId);
    setDisable(false);
}

export const joinPlayground : IPlaygroundCommonFnParam = async (joinPlaygroundFn, playgroundDetails, setDisable, navigate ) => {
    const toastId = toast.loading("Joining Playground");
    setDisable(true);
    try {

        await joinPlaygroundFn(playgroundDetails).unwrap();
        navigate(`/playground/${playgroundDetails.roomId}`);
        
    } catch (error : any) {
        console.log("Error in join playground api" , error);
        toast.error(error.data?.message)
    }
    toast.dismiss(toastId);
    setDisable(false);
}

export const leavePlayground : ILeavePlayground = async (leavePlaygroundFn, playgroundId, setDisable, navigate) => {
    const toastId = toast.loading("Leaving playground...");
    setDisable(true);
    try {
         await leavePlaygroundFn({playgroundId}).unwrap();
        toast.success("Playground left");
        navigate("/");
        
    } catch (error : any) {
        console.log("Error while leaving playground" , error);
        toast.error(error.data?.message);
    }
    toast.dismiss(toastId);
    setDisable(false);
}