/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonErrorHandler } from '../commonContent.js/commonErrorHandler';
import { notification } from 'antd';
//import { useNavigate } from 'react-router-dom';

export const subTypeApi = createApi({
  reducerPath: "subTypeApi",
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
    subTypeList: builder.query({
      query : () => {
        return {
          url: `/subType/lists`,
          method: "GET"
        };
      },
      providesTags: ['subTypeInfo'],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
        //onStart side-effect
      try {
        // const { data } = await queryFulfilled;
        // console.log(data);
        // onSuccess side-effect  
      } catch (error) {
        // onError side-effect
        commonErrorHandler(error?.error,   dispatch);
      }
    },
    }),
    subTypeCreate: builder.mutation({
      query : (formData) => {
        return {
          url: `/subType/create-or-update`,
          method: "POST",
          body: formData
        };
      },
      invalidatesTags: ['subTypeInfo'],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            placement: 'top',
            duration: 5,
            closeIcon:true,
            message: 'SubType Created/Updated Successfully',
            description: 'Your subType has been created/updated successfully.',
            threshold: 2
          });
          
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    }),
    subTypeDelete: builder.mutation({
      query : (attributeId) => {
        return {
          url: `/subType/delete/${attributeId}`,
          method: "DELETE"
        };
      },
      invalidatesTags: ['subTypeInfo'],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            message: 'SubType Deleted Successfully',
            placement: 'top',
            duration: 5,
            closeIcon:true,
            threshold: 2,
            description: 'Your subType has been deleted successfully.',
          });
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    }),
  })
});
export const { useSubTypeCreateMutation, useSubTypeDeleteMutation, useSubTypeListQuery } = subTypeApi;


