/* https://redux-toolkit.js.org/tutorials/rtk-query/
  https://redux-toolkit.js.org/rtk-query/usage/automated-refetching
   Add this service to your store
*/
//import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../models/user.model';
import { api } from './api';

export const userServiceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query<IUser, string>({
      query: (id) => `users/${id}`
    }),
    updateUserById: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: `users/update/${body.id}`,
        method: 'PUT',
        body
      })
    }),
    deleteUserById: builder.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `users/${id}`,
          method: 'DELETE',
        }
      },
    }),
  }),
})


/* // Should be code spliting use api.injectEndpoints
export const userServiceApi = createApi({
  reducerPath: 'userServiceApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getUserById: builder.query<IUser, string>({
      query: (id) => `users/${id}`
    }),
    updateUserById: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: `users/update/${body.id}`,
        method: 'PUT',
        body
      })
    })
  }),
});
*/

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetUserByIdQuery, 
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation 
} = userServiceApi;
