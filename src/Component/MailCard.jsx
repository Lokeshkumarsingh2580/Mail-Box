import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MailProvider } from "../Context/ContextApi";
import {
  Delete_Mail,
  MarkAsRead,
  ReportSpam,
  Star_Mail,
} from "../Reducer/MailReducer";

const MailCard = (data) => {
  const { state, dispatch } = useContext(MailProvider);

  return (
    <div className="flex flex-col gap-4 justify-center min-h-full">
      {data.mails.map((items) => {
        return (
          <div key={items.mId} className="border p-5 space-y-6 rounded-xl">
            <div className="flex justify-between p-2 font-bold">
              <h1>{items.subject}</h1>
              <button
                className="font-semibold"
                onClick={() =>
                  dispatch({ type: Star_Mail, payload: items.mId })
                }
              >
                {items.isStarred && "⭐"} {items.unread && "🔵"}
              </button>
            </div>
            <p className="font-semibold px-2">{items.content}</p>
            <div className="flex justify-between items-center px-3">
              <Link
                to={`/details/${items.mId}`}
                className="text-sm font-medium underline text-blue-500"
              >
                View Details
              </Link>
              <div className="flex gap-4 items-center text-sm md:text-md justify-center">
                <button
                  onClick={() =>
                    dispatch({ type: Delete_Mail, payload: items.mId })
                  }
                  className="p-2 font-medium text-red-400 bg-zinc-50 rounded-lg"
                >
                  Delete
                </button>
                <button
                  className="p-2 bg-zinc-50 font-medium text-yellow-300 rounded-lg"
                  onClick={() =>
                    dispatch({ type: MarkAsRead, payload: items.mId })
                  }
                >
                  Mark as Read
                </button>
                <button
                  className="p-2 font-medium bg-zinc-50 text-green-300 rounded-lg"
                  onClick={() =>
                    dispatch({ type: ReportSpam, payload: items.mId })
                  }
                >
                  Report Spam
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MailCard;
