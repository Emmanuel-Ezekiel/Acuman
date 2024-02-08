const handleError = (err: any) => {
    let message = '';
    let status;
    let data = '';
    if (err?.response) {
      // error from API
      status = err?.config?.status || err.response.status;
      message = err?.response?.data?.errors?.[0].message || err?.response?.data?.error || err?.response?.data?.message;
      data = err?.response.data?.error || err?.response?.data;
    }
  
    if (err.request && !err.response) {
      // a network error
      if (err.request._response?.indexOf('internet') !== -1) {
        message = err.request._response;
      }
    }
  
    if (status && Number(status) === 401) {
      message = 'Sorry, something went wrong, please login again';
    }
  
    if (status && Number(status) >= 500) {
      message = 'Sorry, Server Temporarily Unavailable, Try again later';
    }
    message = message || err?.message || err || 'Unknown error occurred. Please try again';
    
    return {
      error: {
        message,
        status,
        data,
        // conditionally spread remaining error properties if it an object
        ...(typeof err === 'object' ? err : {}),
      },
    };
  };
  
  export default handleError;