import { ImageResponse } from "next/og";

export const alt = "Pakistan Expert Reports - Pakistan Expert Report Services";
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
          justifyContent: "flex-end",
          backgroundColor: "#191D18",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#A8AEA3",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Tribunal folio
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 56,
            fontWeight: 700,
            color: "#F2F5EF",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Pakistan Expert Reports
        </div>
        <p
          style={{
            marginTop: 20,
            fontSize: 26,
            fontWeight: 500,
            color: "rgba(244,246,241,0.7)",
            lineHeight: 1.35,
            maxWidth: 820,
          }}
        >
          Country expert evidence for immigration and asylum tribunals
        </p>
      </div>
    ),
    { ...size },
  );
}
