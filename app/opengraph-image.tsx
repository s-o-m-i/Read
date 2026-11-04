import { ImageResponse } from "next/og";

export const alt = "Tasbih Hub – Meaning, Islamic Guide and Online Tasbih Counter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B2545",
          color: "#FCFAF5",
          padding: "72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E3C77F",
          }}
        >
          Tasbih Hub
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 920 }}>
          <div style={{ display: "flex", fontSize: 58, lineHeight: 1.12, fontWeight: 600 }}>
            Tasbih – Meaning, Islamic Guide & Online Tasbih Counter
          </div>
          <div style={{ display: "flex", fontSize: 28, lineHeight: 1.4, color: "#EEF1F6" }}>
            Explore Tasbih, its meaning and significance in Islam. Use a free online Tasbih counter for Dhikr.
          </div>
        </div>
        <div style={{ display: "flex", color: "#C9A961", fontSize: 24 }}>tasbihhub.com</div>
      </div>
    ),
    { ...size },
  );
}
