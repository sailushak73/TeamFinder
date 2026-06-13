import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import messageAPI from "../api/messageApi";

function Messages() {
  const { receiver } = useParams();

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (receiver) {
      fetchMessages();
    }
  }, [receiver]);

  const fetchMessages = async () => {
    try {
      const res = await messageAPI.get(
        `/${currentUser.fullName}/${receiver}`
      );

      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async () => {
    if (!text.trim()) return;

    try {
      await messageAPI.post("/", {
        sender: currentUser.fullName,
        receiver,
        text,
      });

      setText("");

      fetchMessages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Messages
        </h1>

        {!receiver ? (
          <div className="bg-white border rounded-2xl p-10 text-center">
            <p className="text-gray-500">
              Open a user's profile and click
              "Message User"
            </p>
          </div>
        ) : (
          <div className="bg-white border rounded-2xl flex flex-col h-[600px]">

            {/* Header */}
            <div className="border-b p-5">
              <h2 className="font-bold text-2xl">
                {receiver}
              </h2>

              <p className="text-sm text-gray-500">
                Conversation
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">

              {messages.length === 0 ? (
                <p className="text-gray-500">
                  No messages yet
                </p>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg._id}
                    className={
                      msg.sender ===
                      currentUser.fullName
                        ? "flex justify-end"
                        : "flex justify-start"
                    }
                  >
                    <div
                      className={
                        msg.sender ===
                        currentUser.fullName
                          ? "bg-purple-600 text-white px-4 py-2 rounded-2xl max-w-sm"
                          : "bg-gray-100 px-4 py-2 rounded-2xl max-w-sm"
                      }
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}

            </div>

            {/* Input */}
            <div className="border-t p-4 flex gap-3">

              <input
                type="text"
                value={text}
                onChange={(e) =>
                  setText(e.target.value)
                }
                placeholder="Type a message..."
                className="flex-1 border rounded-xl px-4 py-3"
              />

              <button
                onClick={sendMessage}
                className="bg-purple-600 text-white px-6 rounded-xl hover:bg-purple-700"
              >
                Send
              </button>

            </div>

          </div>
        )}

      </div>
    </Layout>
  );
}

export default Messages;