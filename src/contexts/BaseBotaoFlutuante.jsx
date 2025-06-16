
import React from "react";

export default function BaseBotaoFlutuante({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Abrir chat"
      style={{
        position: "fixed",
        bottom: "150px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#FF0000",
        color: "#fff",
        border: "none",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        zIndex: 1000,
        transition: "background-color 0.3s",
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#8B0000")}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#FF0000")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="11" r="1" />
        <circle cx="13" cy="11" r="1" />
        <circle cx="17" cy="11" r="1" />
      </svg>
    </button>
  );
}
