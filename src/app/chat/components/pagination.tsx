import React from "react";
import Pagination from "@mui/material/Pagination";
// import { makeStyles } from "@material-ui/core/styles";
const PaginationCard = ({ setPage, postPerPage, page }: any) => {

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const customButtonStyle = {
    '& .MuiPaginationItem-root': {
      color: '#212B36', // Change the color to your desired color
     // Change the border color to your desired color
      '&:focus': {
        backgroundColor: '#fff',
        borderColor: '#0546E0',
        color: '#0546E0' // Change the background color on hover
      },
    },
  };



  return (
    <div className="pagination">
      <Pagination
        page={page}
        onChange={handlePageChange}
        count={postPerPage}
        variant="outlined"
        shape="rounded"
        siblingCount={0}
        boundaryCount={1}
        sx={customButtonStyle}
      />
    </div>
  );
};

export default PaginationCard;
