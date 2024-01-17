import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICreatePlaygroundRequestBody, ICreatePlaygroundResponseBody, IJoinPlaygroundRequestBody, IJoinPlaygroundResponseBody, ILeavePlaygroundResponseBody } from "../../Interface/Interface";

export const PlaygroundApi = createApi({
    reducerPath : "PlaygroundApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        createPlayground : builder.mutation <ICreatePlaygroundResponseBody, ICreatePlaygroundRequestBody> ({
            query : (playgroundDetails) => ({
                url : "playground/create-playground",
                method : "POST",
                body : JSON.stringify(playgroundDetails),
                headers: {
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })
        }),

        joinPlayground : builder.mutation <IJoinPlaygroundResponseBody, IJoinPlaygroundRequestBody> ({
            query : (playgroundDetails) => ({
                url : "playground/join-playground",
                method : "PUT",
                body : JSON.stringify(playgroundDetails),
                headers : {
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })
        }),
        
        exitPlayground : builder.mutation <ILeavePlaygroundResponseBody, string | any> ({
            query : (playgroundId) => ({
                url : "playground/leave-playground",
                method : "PUT",
                body : JSON.stringify(playgroundId),
                headers : {
                    "Content-Type" : "application/json" 
                },
                credentials : "include"
            })
        })
    })
})

export const {useCreatePlaygroundMutation, useJoinPlaygroundMutation, useExitPlaygroundMutation} = PlaygroundApi;