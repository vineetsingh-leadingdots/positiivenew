import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authToken, user } from "../redux/slice/authSlice";
import { commonErrorHandler } from "../commonContent.js/commonErrorHandler";

export const authApi = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_API,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (formData) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: formData,
        };
      },
      async onQueryStarted(
        arg,
        { dispatch, queryFulfilled }
      ) {
        //onStart side-effect
        dispatch(user("Fetching post..."));
        try {
          const { data } = await queryFulfilled;
          // onSuccess side-effect
          dispatch(user(data));
          dispatch(authToken(data?.accessToken));
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error, dispatch);
        }
      },
    }),
    registerUser: builder.mutation({
      query: (formData) => {
        return {
          url: `/auth/register`,
          method: "POST",
          body: formData,
        };
      },
      async onQueryStarted(
        arg,
        { dispatch, queryFulfilled }
      ) {
        //onStart side-effect
        dispatch(user("Fetching post..."));
        try {
          const { data } = await queryFulfilled;
          // onSuccess side-effect
          dispatch(user(data));
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error, dispatch);
        }
      },
    }),
    logoutUser: builder.mutation({
      query: (formData) => {
        return {
          url: `/auth/logout`,
          method: "GET",
          body: formData,
        };
      },
      async onQueryStarted(
        arg,
        { dispatch, queryFulfilled }
      ) {
        //onStart side-effect
        dispatch(user("Fetching post..."));
        try {
          const { data } = await queryFulfilled;
          // onSuccess side-effect
          dispatch(user(data));
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error, dispatch);
        }
      },
    }),
  }),
});
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
