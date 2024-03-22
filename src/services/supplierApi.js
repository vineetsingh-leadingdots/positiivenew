import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonErrorHandler } from '../commonContent.js/commonErrorHandler';
import { notification } from 'antd';
// import { useNavigate } from 'react-router-dom';

export const supplierApi = createApi({
  reducerPath: "supplierAPI",
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
    listsupplier: builder.query({
      query : () => {
        return {
          url: `/supplierDistributor/supplier/lists`,
          method: "GET"
        };
      },
    }),
    // createsupplier: builder.mutation({
    //   query : (formData) => {
    //     return {
    //       url: `/supplier/create-or-update`,
    //       method: "POST",
    //       body: formData
    //     };
    //   },
    //   async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
    //       //onStart side-effect
    //     try {
    //       //const { data } = await queryFulfilled
    //       // onSuccess side-effect
    //       notification.success({
    //         placement: 'top',
    //         duration: 2,
    //         closeIcon:true,
    //         message: 'supplier Created/Updated Successfully',
    //         description: 'Your supplier has been created/updated successfully.',
    //         threshold: 2
    //       });
          
    //     } catch (error) {
    //       // onError side-effect
    //       commonErrorHandler(error?.error,   dispatch);
    //     }
    //   },
    // }),
    deletesupplier: builder.mutation({
      query : (supplierId) => {
        return {
          url: `/supplierDistributor/delete/supplier/${supplierId}`,
          method: "DELETE"
        };
      },
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
          //onStart side-effect
        try {
          //const { data } = await queryFulfilled
          // onSuccess side-effect
          notification.success({
            message: 'supplier Deleted Successfully',
            placement: 'top',
            duration: 2,
            closeIcon:true,
            threshold: 2,
            description: 'Your supplier has been deleted successfully.',
          });
        } catch (error) {
          // onError side-effect
          commonErrorHandler(error?.error, dispatch);
        }
      },
    }),
  })
});
export const {  useListsupplierQuery, useDeletesupplierMutation } = supplierApi;


// export const {  useListsupplierQuery, useDeletesupplierMutation , useCreatesupplierMutation, } = supplierApi;