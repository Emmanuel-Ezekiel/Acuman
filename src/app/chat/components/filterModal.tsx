import React from "react";
import { Close } from "@/assets/svgs";
import Button from "./Button";
import MessageForm from "./messageForm";

interface props {
  setOpenModal: any;
}

type ButtonId = string | number;

const FilterModal = ({ setOpenModal }: props) => {
  const [selectedButton, setSelectedButton] = React.useState<ButtonId | null>(
    'btn1'
  ); // State to track the selected button

  // Function to handle button click
  const handleButtonClick = (buttonId: ButtonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalBox">
          <div className="title">
            <h2>FIlter Table</h2>
            <div onClick={setOpenModal}>
              <Close />
            </div>
          </div>

          <div className="button-container">
            <Button
              id="btn1"
              label="Today"
              onClick={handleButtonClick}
              isActive={selectedButton === "btn1"}
            />
            <Button
              id="btn2"
              label="Last 7 days"
              onClick={handleButtonClick}
              isActive={selectedButton === "btn2"}
            />
            <Button
              id="btn3"
              label="This Month"
              onClick={handleButtonClick}
              isActive={selectedButton === "btn3"}
            />
            <Button
              id="btn4"
              label="Last 3 months"
              onClick={handleButtonClick}
              isActive={selectedButton === "btn4"}
            />
          </div>

          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
