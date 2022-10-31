import axios from "axios";
import {
    RNIT_PAYMENT_REQUEST,
    RNIT_PAYMENT_SUCCESS,
    RNIT_PAYMENT_FAILURE,
  } from "../types/rnitPaymentType";
  


export const rnitPaymentAction = (details,username,password,history) => async (dispatch) => {
  try {
    dispatch(rnitPaymentRequest());
 const {userGroup}=details
 const {bankName}=details
 const {bankAccount}=details
 const {payerNid}=details
 const  {amountToPay}=details
 const  {payerName}=details
 const {payerPhoneNumber}=details
 const {payerEmail}=details
 const {brokering}=details

    //const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
    let basicAuth='Basic ' + btoa(username + ':' + password);
    const Url='https://agentapi.mobicash.rw/api/agent/goverment-services/rnit/rest/v.4.14.01/payment';
    const res = await axios.post(Url,{
        nid:payerNid.replaceAll(/\s/g, ''),
        amount:amountToPay,
        bankAccount:bankAccount,
        payerName:payerName,
        bankName:bankName,
        payerPhone:payerPhoneNumber,
        payerEmail:payerEmail,
        brokering:brokering,
        userGroup:userGroup
   },{
    withCredentials: true,
    headers:{
    "Accept":"application/json",
    "Content-Type": "application/json",
    'Authorization': + basicAuth,
 },
  auth: {
    username,
    password
  }
   });
    const {data} = await res;
      if(res.data.responseCode===200){
       await dispatch(rnitPaymentSuccess(data));
      }
      if(res.data.responseCode===400){
        let errorMessage = 'Invalid Credential, Please provide valid Pin'
          dispatch(rnitPaymentFailure(errorMessage)); 
      }
      
      
  } catch (err) {
    if (err.response) {
       // const errorMessage = await err.response;
       let errorMessage = 'Invalid Crendentials'
      //   errorMessage="Please provide valid Pin"
     // const errorMessage = 'Error'
      // errorMessage=await err.response.data.message
        dispatch(rnitPaymentFailure(errorMessage)); 
    } else {
      dispatch(rnitPaymentFailure("Network Error"));
    }
  }
};

export const rnitPaymentRequest = () => {
  return {
    type: RNIT_PAYMENT_REQUEST,
  };
};

export const rnitPaymentSuccess = (details) => {
  return {
    type: RNIT_PAYMENT_SUCCESS,
    payload: details,
  };
};
export const rnitPaymentFailure = (error) => {
  return {
    type: RNIT_PAYMENT_FAILURE,
    payload: error,
  };
};