"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971559890724"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 1000,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.7)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.5)";
      }}
      title="Chat with us on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.494.651 4.936 1.888 7.09L2 30l7.13-1.87A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.89-1.61l-.42-.25-4.23 1.11 1.13-4.12-.27-.43A11.6 11.6 0 1 1 16 27.6zm6.37-8.67c-.35-.17-2.06-1.02-2.38-1.13-.32-.12-.56-.17-.79.17-.24.35-.9 1.13-1.1 1.37-.2.23-.41.26-.76.09-.35-.17-1.48-.55-2.82-1.75-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.62.17-.2.23-.35.35-.58.12-.23.06-.44-.03-.62-.09-.17-.79-1.9-1.08-2.6-.28-.68-.57-.59-.79-.6h-.67c-.23 0-.6.09-.91.44-.32.35-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.06-.84 2.35-1.66.29-.81.29-1.51.2-1.66-.09-.14-.32-.23-.67-.4z"/>
      </svg>
    </a>
  );
}
