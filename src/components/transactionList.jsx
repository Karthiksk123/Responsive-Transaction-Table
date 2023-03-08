import React from "react";
import { transactionDetails } from "../constants/data";
import "./transactionList.scss";

const TransactionList = () => {
  return (
    <div className="component">
      <div className="header-comp">
        <h2>Last Transactions</h2>
        <h2>View All</h2>
      </div>
      <div className="listdata-comp">
        {transactionDetails.map((data, key) => (
          <div className="list-comp">
            <div className="left-list">
              <div className="left-list-image">
                <img src={data.image} alt="" />
              </div>
              <div className="left-list-cont">
                <h4>{data.name}</h4>
                <h6>
                  <span>{data.date}</span> | <span>{data.time}</span>
                </h6>
              </div>
            </div>
            <div className="right-list">
              {data.type === "Recieved" ? (
                <h4 style={{ color: "#70e000" }}>+ {data.amount}</h4>
              ) : (
                <h4 style={{ color: "#ef233c" }}>- {data.amount}</h4>
              )}
              <h6>{data.type}</h6>
            </div>
          </div>
        ))}
      </div>

      <p> --- Done by Karthik | Developer @ 2023 --- </p>
    </div>
  );
};

export default TransactionList;
