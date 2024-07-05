export const Delete_Mail = "Delete";
export const Star_Mail = "Star";
export const MarkAsRead = "Mark as read";
export const ReportSpam = "Report Spam";
export const MailReducer = (state, action) => {
  switch (action.type) {
    case Delete_Mail:
      return {
        ...state,
        inbox: state.inbox.filter((item) => item.mId !== action.payload),
        trash: [
          ...state.trash,
          state.inbox.find((mail) => mail.mId === action.payload),
        ],
      };
    case Star_Mail:
      return {
        ...state,
        inbox: state.inbox.map((mail) =>
          mail.mId === action.payload
            ? { ...mail, isStarred: !mail.isStarred }
            : mail
        ),
      };

    case MarkAsRead:
      return {
        ...state,
        inbox: state.inbox.map((mail) =>
          mail.mId === action.payload ? { ...mail, unread: false } : mail
        ),
      };
    case ReportSpam:
      return {
        ...state,
        inbox: state.inbox.filter((mail) => mail.mId !== action.payload),
        spam: [
          ...state.spam,
          state.inbox.find((mail) => mail.mId === action.payload),
        ],
      };
    default:
      state;
  }
};
