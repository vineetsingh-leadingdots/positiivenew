/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonErrorHandler } from '../commonContent.js/commonErrorHandler';
import { notification } from 'antd';
//import { useNavigate } from 'react-router-dom';

export const subRegionApi = createApi({
  reducerPath: "subRegionApi",
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
    subRegionList: builder.query({
      query : () => {
        return {
          url: `/subRegion/lists`,
          method: "GET"
        };
      },
      providesTags: ['subRegionInfo'],
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
    subRegionCreate: builder.mutation({
      query : (formData) => {
        return {
          url: `/subRegion/create-or-update`,
          method: "POST",
          body: formData
        };
      },
      invalidatesTags: ['subRegionInfo'],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            placement: 'top',
            duration: 5,
            closeIcon:true,
            message: 'SubRegion Created/Updated Successfully',
            description: 'Your subRegion has been created/updated successfully.',
            threshold: 2
          });
          
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    }),
    subRegionDelete: builder.mutation({
      query : (id) => {
        return {
          url: `/subRegion/delete/${id}`,
          method: "DELETE"
        };
      },
      invalidatesTags: ['subRegionInfo'],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            message: 'SubRegion Deleted Successfully',
            placement: 'top',
            duration: 5,
            closeIcon:true,
            threshold: 2,
            description: 'Your subRegion has been deleted successfully.',
          });
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    }),
  })
});
export const { useSubRegionCreateMutation, useSubRegionDeleteMutation, useSubRegionListQuery } = subRegionApi;


