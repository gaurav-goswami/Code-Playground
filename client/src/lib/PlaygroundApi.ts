import {toast} from "react-hot-toast";
import { IPlaygroundCommonFnParam } from "../Interface/Interface";

export const createPlayground : IPlaygroundCommonFnParam = async (createPlaygroundFn , playgroundDetails, setDisable, navigate) => {
    const toastId = toast.loading("Initializing playground...");
    setDisable(true);
    try {
        const response = await createPlaygroundFn(playgroundDetails).unwrap();
        console.log("create playground response" , response);
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

        const response = await joinPlaygroundFn(playgroundDetails).unwrap();
        console.log("join playground response" , response);
        toast.success("Playground joined");
        navigate(`/playground/${playgroundDetails.roomId}`);
        
    } catch (error : any) {
        console.log("Error in join playground api" , error);
        toast.error(error.data?.message)
    }
    toast.dismiss(toastId);
    setDisable(false);
}

export const leavePlayground : IPlaygroundCommonFnParam = async (leavePlaygroundFn, playgroundId, setDisable, navigate) => {
    const toastId = toast.loading("Leaving playground...");
    setDisable(true);
    try {

        const response = await leavePlaygroundFn(playgroundId).unwrap();
        console.log("leave playground response" , response);
        toast.success("Playground left");
        navigate("/");
        
    } catch (error : any) {
        console.log("Error while leaving playground" , error);
        toast.error(error.data?.message);
    }
    toast.dismiss(toastId);
    setDisable(false);
}