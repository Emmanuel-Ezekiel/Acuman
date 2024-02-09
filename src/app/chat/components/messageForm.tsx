import React, { useState, ChangeEvent, FormEvent } from "react";
import { ArrowDown } from "@/assets/svgs";
import { MediaStorageData, MessageOptionData } from "@/constants/formData";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const MessageForm = () => {
  const [formData, setFormData] = React.useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [selected, setSelected] = useState<any>({
    message: "",
    mediaStorage: "",
  });
  const textRef = React.useRef<any>();
  const [active, setActive] = useState<boolean>(false);
  const [active2, setActive2] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const select = () => {
    setActive(!active);
  };

  const select2 = () => {
    setActive2(!active2);
  };

  const handleMessage = (name: string) => {
    setSelected({ ...selected, message: name });
  };

  const handleMedia = (name: string) => {
    setSelected({ ...selected, mediaStorage: name });
  };

  return (
    <form>
      <form onSubmit={handleSubmit}>
        <div className="dateGroup">
          <div className="date">
            <label htmlFor="firstName">Date From</label>
            <input
              type="date"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="date">
            <label htmlFor="lastName">Date To</label>
            <input
              type="date"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="messageForm">
          <label htmlFor="email">Messages</label>

          <div className="category_container">
            <div className="dropDown" onClick={select}>
              <div className="title">
                {selected.message ? (
                  <span>{selected.message}</span>
                ) : (
                  <span>Please Select</span>
                )}
                <ArrowDown />
              </div>
              {active ? (
                <div className={"dropdown_message"}>
                  <div className="categoriesContainer">
                    {MessageOptionData.map((option: any) => (
                      <div
                        className={"show"}
                        key={option?.id}
                        onClick={(e) => {
                          handleMessage(option?.name);
                        }}
                        data-value={option?.name}
                        ref={textRef}
                      >
                        <span>{option?.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="messageForm">
          <label htmlFor="password">Media Storage Used</label>
          <div className="category_container">
            <div className="dropDown" onClick={select2}>
              <div className="title">
                {selected.mediaStorage ? (
                  <span>{selected.mediaStorage}</span>
                ) : (
                  <span>Please Select</span>
                )}
                <ArrowDown />
              </div>
              {active2 ? (
                <div className={"dropdown_message"}>
                  <div className="categoriesContainer">
                    {MediaStorageData.map((option: any) => (
                      <div
                        className={"show"}
                        key={option?.id}
                        onClick={(e) => {
                          handleMedia(option?.name);
                        }}
                        data-value={option?.name}
                        ref={textRef}
                      >
                        <span>{option?.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button type="submit">Filter Table</button>

          <span>Clear Filter</span>
          {/* <button type="submit">Submit</button> */}
        </div>
      </form>
    </form>
  );
};

export default MessageForm;
