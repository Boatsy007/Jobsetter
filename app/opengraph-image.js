import { ImageResponse } from "next/og";

export const alt = "JobSetter — Turn leads into jobs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#0c1520",
          padding: "54px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "3px solid #0c1520", paddingBottom: 28 }}>
          <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: -2 }}>
            Job<span style={{ color: "#1769ff" }}>Setter</span>
          </div>
          <div style={{ fontSize: 21, fontWeight: 800 }}>LEAD → CONTACT → BOOK → QUOTE → WIN</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, lineHeight: .88, fontWeight: 900, letterSpacing: -7 }}>
            Turn leads into
          </div>
          <div style={{ fontSize: 104, lineHeight: .88, fontWeight: 900, letterSpacing: -7, color: "#1769ff" }}>
            jobs.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #d8dee5", paddingTop: 22, fontSize: 22, fontWeight: 700 }}>
          <span>Human-led follow-up for tradies</span>
          <span>jobsetter.com.au</span>
        </div>
      </div>
    ),
    size
  );
}
