import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonErrorHandler } from '../commonContent.js/commonErrorHandler';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

export const brandApi = createApi({
  reducerPath: "brandAPI",
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
    listBrand: builder.query({
      query : () => {
        return {
          url: `/brand/lists`,
          method: "GET"
        };
      },
    }),
    createBrand: builder.mutation({
      query : (formData) => {
        return {
          url: `/brand/create-or-update`,
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
            duration: 5,
            closeIcon:true,
            message: 'Brand Created/Updated Successfully',
            description: 'Your brand has been created/updated successfully.',
            threshold: 2
          });
          
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    }),
    deleteBrand: builder.mutation({
      query : (brandId) => {
        return {
          url: `/brand/delete/${brandId}`,
          method: "DELETE"
        };
      },
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            message: 'Brand Deleted Successfully',
            placement: 'top',
            duration: 5,
            closeIcon:true,
            threshold: 2,
            description: 'Your brand has been deleted successfully.',
          });
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error,   dispatch);
        }
      },
    }),
  })
});
export const { useCreateBrandMutation, useListBrandQuery, useDeleteBrandMutation } = brandApi;


