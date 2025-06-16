// BotaoChat.js
import React, { useState } from "react";
import BaseBotaoFlutuante from "./BaseBotaoFlutuante";

export default function BotaoChat() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => setChatOpen(prev => !prev);

  return (
    <>
      <BaseBotaoFlutuante onClick={toggleChat} />

      {chatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "320px",
            height: "400px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            borderRadius: "8px",
            padding: "16px",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          
          <div
            style={{
              marginBottom: "12px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              color: "#e53935", 
              background: "none", 
              fontSize: "18px"
            }}
          >
            Chat
            <button
              onClick={toggleChat}
              aria-label="Fechar chat"
              style={{
                marginLeft: "auto",
                background: "none",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                flexShrink: 0,
                color: "#000",
              }}
            >
              &times;
            </button>
          </div>

          
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              marginBottom: "12px",
              background: "none"
            }}
          >
            <p>Converse conosco!</p>
          </div>

          
          <div
            style={{
              flexShrink: 0,
              background: "none", 
              padding: 0
            }}
          >
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
                borderRadius: "4px",
                border: "1px solid #ccc",
                background: "#fff", 
                color: "#222"
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
