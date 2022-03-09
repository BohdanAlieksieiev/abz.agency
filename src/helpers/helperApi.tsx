export const createErrorApi = (error: any) => {
  return {
    message: error.message,
    responseDataError: error.response ? error.response.data.error : false,
    status: error.response ? error.response.status : false,
    statusText: error.response ? error.response.statusText : false,
    isError: true,
  };
};
