/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonErrorHandler } from '../commonContent.js/commonErrorHandler';
import { notification } from 'antd';
// import { useNavigate } from 'react-router-dom';

export const roleApi = createApi({
  reducerPath: "roleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL_API,
    prepareHeaders: (headers, { getState }) => {
      //Retrieve the token from your state or wherever it's stored
      const token = getState().persistedReducer.authToken;
      if (token) {
        // If a token exists, set it in the Authorization header
        headers.set('Authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    listrole: builder.query({
      query : () => {
        return {
          url: `/role/lists`,
          method: "GET"
        };
      },
      providesTags: ["roleInfo"],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
        //onStart side-effect
      try {
        const { data } = await queryFulfilled;
        // onSuccess side-effect  
      } catch (error) {
        // onError side-effect
        commonErrorHandler(error?.error,   dispatch);
      }
    },
    }),
    invalidatesTags: ["roleInfo"],
    createrole: builder.mutation({
      query : (formData) => {
        return {
          url: `/role/create-or-update`,
          method: "POST",
          body: formData
        };
      },
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            placement: 'top',
            duration: 2,
            closeIcon:true,
            message: 'role Created/Updated Successfully',
            description: 'Your role has been created/updated successfully.',
            threshold: 2
          });
          
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    }),
    deleterole: builder.mutation({
      query : (roleId) => {
        return {
          url: `/role/delete/${roleId}`,
          method: "DELETE"
        };
      },
      invalidatesTags: ["roleInfo"],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            message: 'role Deleted Successfully',
            placement: 'top',
            duration: 2,
            closeIcon:true,
            threshold: 2,
            description: 'Your role has been deleted successfully.',
          });
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error, dispatch);
        }
      },
    }),
  })
});

export const {  useListroleQuery, useDeleteroleMutation , useCreateroleMutation, } = roleApi;