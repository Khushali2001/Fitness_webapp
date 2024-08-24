export const Shimmer = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#f0f0f0",
      animation: "shimmer 1.5s infinite",
    }}
  >
    <style>
      {`
          @keyframes shimmer {
            0% {
              background-position: -100% 0;
            }
            100% {
              background-position: 100% 0;
            }
          }
          .shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
          }
        `}
    </style>
  </div>
);
