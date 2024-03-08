
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
    } else if (error?.status === 404) {
      const config=({
        placement: 'top',
        duration: 2,
        closeIcon:true,
        description: `${error.data.message}`,
        threshold:2
      });
      notification.error(config)
      dispatch(user('Resource not found'));
    } else if (error?.status === 500) {
      const config=({
        placement: 'top',
        duration: 2,
        closeIcon:true,
        description: `${error.data.message}`,
        threshold:2
      });
      notification.error(config)
      dispatch(user('Internal server error'));
    } else {
      dispatch(user(`Error: ${error?.status}`));
      const config=({
        placement: 'top',
        duration: 2,
        closeIcon:true,
        description: `${error.data.message}`,
        threshold:2
      });
      notification.error(config)
    }
  };