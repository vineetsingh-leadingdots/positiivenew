/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonErrorHandler } from '../commonContent.js/commonErrorHandler';
import { notification } from 'antd';
//import { useNavigate } from 'react-router-dom';

export const countryApi = createApi({
  reducerPath: "countryApi",
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
    countryList: builder.query({
      query : () => {
        return {
          url: `/country/lists`,
          method: "GET"
        };
      },
      providesTags: ['countryInfo'],
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
    countryCreate: builder.mutation({
      query : (formData) => {
        return {
          url: `/country/create-or-update`,
          method: "POST",
          body: formData
        };
      },
      invalidatesTags: ['countryInfo'],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            placement: 'top',
            duration: 5,
            closeIcon:true,
            message: 'Country Created/Updated Successfully',
            description: 'Your country has been created/updated successfully.',
            threshold: 2
          });
          
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    }),
    countryDelete: builder.mutation({
      query : (id) => {
        return {
          url: `/country/delete/${id}`,
          method: "DELETE"
        };
      },
      invalidatesTags: ['countryInfo'],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            message: 'Country Deleted Successfully',
            placement: 'top',
            duration: 5,
            closeIcon:true,
            threshold: 2,
            description: 'Your country has been deleted successfully.',
          });
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    }),
  })
});
export const { useCountryCreateMutation, useCountryDeleteMutation, useCountryListQuery } = countryApi;


