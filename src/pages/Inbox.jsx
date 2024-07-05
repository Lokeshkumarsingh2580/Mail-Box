import React, { useContext, useState } from "react";
import MailCard from "../Component/MailCard";
import { MailProvider } from "../Context/ContextApi";

const Inbox = () => {
  const { state } = useContext(MailProvider);
  const [showUnread, setShowUnread] = useState(false);
  const [showStarred, setShowStarred] = useState(false);

  const filtered_Mail = state.inbox.filter((items) => {
    if (showUnread && !items.unread) return false;
    if (showStarred && !items.isStarred) return false;
    return true;
  });
  return (
    <div className="px-8 py-4">
      <div className="p-4 text-center text-3xl font-semibold">
        <h1>Lokesh Mail Box</h1>
      </div>
      <div className="my-2">
        <fieldset className="flex gap-2 items-center p-1 border">
          <legend className="text-lg font-medium "> Filters </legend>
          <input
            type="checkbox"
            id="unread"
            checked={showUnread}
            onClick={() => setShowUnread(!showUnread)}
          />
          <label htmlFor="unread">Show Unread mails</label>
          <input
            type="checkbox"
            id="read"
            checked={showStarred}
            onClick={() => setShowStarred(!showStarred)}
          />
          <label htmlFor="read">Show starred mails</label>
        </fieldset>
      </div>

      <div className="my-6">
        <MailCard mails={filtered_Mail} />
      </div>
    </div>
  );
};

export default Inbox;
