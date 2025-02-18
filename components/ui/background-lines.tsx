import React from "react";

interface BackgroundLinesProps {
  className?: string;
  svgOptions?: {
    duration?: number;
  };
  children?: React.ReactNode; // Make children optional
}

export const BackgroundLines: React.FC<BackgroundLinesProps> = ({
  className,
  // svgOptions,
  children, // Accept children but make it optional
}) => {
  return (
    <div className={className}>
      {/* Render your background lines here */}
      {/* Example SVG or background lines */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* Example lines */}
        <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255, 255, 255, 0.5)" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255, 255, 255, 0.5)" />
      </svg>
      {children} {/* Render children if provided */}
    </div>
  );
};
