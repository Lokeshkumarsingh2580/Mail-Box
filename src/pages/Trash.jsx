import React, { useContext } from "react";
import { MailProvider } from "../Context/ContextApi";

const Trash = () => {
  const { state } = useContext(MailProvider);
  return (
    <div>
      <div className="sm:p-20 p-10">
        {state.trash.map(({ mId, subject, content }) => {
          return (
            <div key={mId} className="space-y-8 rounded-lg border m-4 p-8">
              <h1 className="font-bold text-2xl">Subject: {subject}</h1>
              <h1 className="font-medium">Content: {content}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trash;
