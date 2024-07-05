import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MailProvider } from "../Context/ContextApi";

const MailDetails = () => {
  const { state } = useContext(MailProvider);
  const { Id } = useParams();
  const singleData = state.inbox.filter((item) => item.mId === Id);

  return (
    <div className="sm:p-20 p-10">
      {singleData.map(({ mId, subject, content }) => {
        return (
          <div key={mId} className="space-y-8">
            <h1 className="font-bold text-2xl">Subject: {subject}</h1>
            <h1 className="font-medium">Content: {content}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default MailDetails;
