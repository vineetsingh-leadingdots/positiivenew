/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonErrorHandler } from '../commonContent.js/commonErrorHandler';
import { notification } from 'antd';
// import { useNavigate } from 'react-router-dom';

export const distributorApi = createApi({
  reducerPath: "distributorAPI",
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
    listdistributor: builder.query({
      query : () => {
        return {
          url: `/sDUser/lists?role=distributor`,
          method: "GET"
        };
      },
      providesTags: ["distributorInfo"],
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
    
    createdistributor: builder.mutation({
      query : (formData) => {
        return {
          url: `/sDUser/create`,
          method: "POST",
          body: formData
        };
      },
    invalidatesTags: ["distributorInfo"],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            placement: 'top',
            duration: 2,
            closeIcon:true,
            message: 'distributor Created/Updated Successfully',
            description: 'Your distributor has been created/updated successfully.',
            threshold: 2
          });
          
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    }),
    
    deletedistributor: builder.mutation({
      query : (distributorId) => {
        return {
          url: `/sDUser/delete/${distributorId}`,
          method: "DELETE"
        };
      },
      invalidatesTags: ["distributorInfo"],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            message: 'distributor Deleted Successfully',
            placement: 'top',
            duration: 2,
            closeIcon:true,
            threshold: 2,
            description: 'Your distributor has been deleted successfully.',
          });
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error, dispatch);
        }
      },
    }),
  })
});

export const {  useListdistributorQuery, useDeletedistributorMutation , useCreatedistributorMutation, } = distributorApi;



