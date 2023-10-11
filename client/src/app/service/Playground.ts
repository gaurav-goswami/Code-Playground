import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICreatePlaygroundRequestBody, ICreatePlaygroundResponseBody, IJoinPlaygroundRequestBody, IJoinPlaygroundResponseBody, ILeavePlaygroundResponseBody } from "../../Interface/Interface";

export const PlaygroundApi = createApi({
    reducerPath : "PlaygroundApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        createPlayground : builder.mutation <ICreatePlaygroundRequestBody, ICreatePlaygroundResponseBody> ({
            query : (playgroundDetails) => ({
                url : "/create-playground",
                method : "POST",
                body : JSON.stringify(playgroundDetails),
                headers: {
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })
        }),

        joinPlayground : builder.mutation <IJoinPlaygroundRequestBody, IJoinPlaygroundResponseBody> ({
            query : (playgroundDetails) => ({
                url : "/join-playground",
                method : "PUT",
                body : JSON.stringify(playgroundDetails),
                headers : {
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })
        }),
        
        exitPlayground : builder.mutation <string , ILeavePlaygroundResponseBody> ({
            query : (roomId) => ({
                url : "/leave-playground",
                method : "DELETE",
                body : JSON.stringify(roomId),
                headers : {
                    "Content-Type" : "application/json" 
                },
                credentials : "include"
            })
        })
    })
})

export const {useCreatePlaygroundMutation, useJoinPlaygroundMutation, useExitPlaygroundMutation} = PlaygroundApi;