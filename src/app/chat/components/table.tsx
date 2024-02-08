import React from "react";
import { TableData } from "@/constants/tableData";
import moment from "moment";
import { bytesToMegabytes } from "@/utils/helpers";
import { Option } from "@/assets/svgs";

const Table = ({ data, searchTerm }: any) => {
  function capitalizeFirstLetter(str: string) {
    return str.replace(/\b\w/g, function (l: string) {
      return l.toUpperCase();
    });
  }

  const filteredData = data?.filter((item: any) =>
    item?.full_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          {TableData.map((item) => (
            <th key={item.id}>
              {item.name} {item.icon}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData?.map((item: any) => {
          return (
            <tr>
              <td>{capitalizeFirstLetter(item?.full_name)}</td>
              <td>{item.message_sent}</td>
              <td>{bytesToMegabytes(item.media_storage_used)} MB</td>
              <td>{moment(item.date_created).format("DD MMM, YYYY")}</td>
              <td>{item.media_sent}</td>
              <td>{Option()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
