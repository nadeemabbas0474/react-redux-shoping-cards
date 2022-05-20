import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
    return async(dispatch) => {
        
        const fetchHandler = async() => {
            const res = await fetch("https://redux-http-5ee51-default-rtdb.firebaseio.com/cartItems.json")
            const data = await res.json();
            return data;
        }
        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData))
        }
        catch (err) {
            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "Sending Request Failed",
                    type: "error",
                  })
                  );
                
        }
    }
}
export const sendCartData = (carts) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
            open: true,
            message: "Sending Request",
            type: "warning"
          })
          );
 
 const sendRequest = async () => {
    // Send state as Sending request

    const res = await fetch(
      "https://redux-http-5ee51-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: "PUT",
        body: JSON.stringify(),
      }
    );
    const data = await res.json(carts);
    // Send state as Request is successfull
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Sent Request To Database Successfully",
                type: "success",
            })
            );
  };
  try {
      await sendRequest();
  } catch (err) {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Sending Request Failed",
                type: "error",
              })
              );
            }
      
        }
    };