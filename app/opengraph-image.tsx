import { ImageResponse } from "next/og";

export const alt = "Pakistan Expert Reports - Pakistan Expert Report Services UK";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0C3547",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Pakistan Expert Reports
        </div>
        <p
          style={{
            marginTop: 32,
            fontSize: 36,
            fontWeight: 600,
            color: "#2E7D52",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Pakistan Expert Report Services UK
        </p>
      </div>
    ),
    { ...size },
  );
}
