import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ILoginRequestBody,
  ILoginResponseBody,
  ISendOtpRequestBody,
  ISendOtpResponseBody,
  ISignUpRequestBody,
  ISignUpResponseBody,
} from "../../Interface/Interface";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_SERVER_URL,
  }),
  endpoints: (builder) => ({
    // send otp
    sendOtp: builder.mutation<ISendOtpResponseBody, ISendOtpRequestBody>({
      query: (email) => ({
        url: "auth/send-otp",
        method: "POST",
        body: JSON.stringify(email),
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    // signup
    signUp: builder.mutation<ISignUpResponseBody, ISignUpRequestBody>({
      query: (signUpDetails) => ({
        url: "auth/signup",
        method: "POST",
        body: JSON.stringify(signUpDetails),
        headers: {
          "Content-Type": "application/json",
        },
        credentials : "include"
      }),
    }),

    // login
    login: builder.mutation<ILoginResponseBody, ILoginRequestBody>({
      query: (loginDetails) => ({
        url: "auth/login",
        method: "POST",
        body: JSON.stringify(loginDetails),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
  }),
});

export const {useSendOtpMutation, useSignUpMutation, useLoginMutation} = AuthApi;