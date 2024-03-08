import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { user } from '../redux/slice/authSlice';
import { commonErrorHandler } from '../commonContent.js/commonErrorHandler';

export const authApi = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_API
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query : (formData) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: formData
        };
      },
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
          dispatch(user('Fetching post...'))
        try {
          const { data } = await queryFulfilled
          // onSuccess side-effect
          dispatch(user(data))
        } catch (error) {
          console.log(error?.error?.status, "error");
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    })
  })
});
export const { useLoginUserMutation } = authApi;


