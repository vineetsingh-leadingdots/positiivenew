
import { notification } from "antd";
import { user } from "../redux/slice/authSlice";
export const commonErrorHandler = (error, dispatch) => {
    if (error?.status === 401) {
      const config=({
        placement: 'top',
        duration: 2,
        closeIcon:true,
        description: `${error.data.message}`,
        threshold:2
      });
      notification.error(config)
     
      dispatch(user('Unauthorized - Please login'));
    } else if (error?.error?.status === 404) {
      dispatch(user('Resource not found'));
    } else if (error?.error?.status === 500) {
      dispatch(user('Internal server error'));
    } else {
      dispatch(user(`Error: ${error?.error?.status}`));
    }
  };