import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1B1F18",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 112,
            height: 124,
            background: "#F4F6F1",
          }}
        >
          <div style={{ width: 28, height: "100%", background: "#8B1E3F" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
