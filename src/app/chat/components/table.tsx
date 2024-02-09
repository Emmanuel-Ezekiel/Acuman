import React from "react";
import { TableData } from "@/constants/tableData";
import moment from "moment";
import { bytesToMegabytes } from "@/utils/helpers";
import { Option } from "@/assets/svgs";
import { capitalizeFirstLetter } from "@/utils/helpers";
import Modal from "./modal";

const Table = ({ data, searchTerm, handleModal }: any) => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(!isModalOpen);
    // Open modal here
  };

  const filteredData = data?.filter((item: any) =>
    item?.full_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          {TableData.map((item) => (
            <th key={item.id} onClick={handleModal}>
              {item.name} {item.icon}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData?.map((item: any, index: number) => {
          return (
            <React.Fragment>
              <tr key={index}>
                <td>{capitalizeFirstLetter(item?.full_name)}</td>
                <td>{item.message_sent}</td>
                <td>{bytesToMegabytes(item.media_storage_used)} MB</td>
                <td>{moment(item.date_created).format("DD MMM, YYYY")}</td>
                <td>{item.media_sent}</td>
                <td onClick={() => handleItemClick(item)}>{Option()}</td>
                {selectedItem === item && isModalOpen && <Modal />}
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
