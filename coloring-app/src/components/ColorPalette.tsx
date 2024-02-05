import React, { useState } from "react";

interface ColorPaletteProps {
  colors: string[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);

    setTimeout(() => {
      setCopiedColor(null);
    }, 2000);
  };

  return (
    <div className="color-container">
      <div className="palette-wrapper">
        <div className="palette">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color"
              style={{ backgroundColor: `#${color}` }}
              onClick={() => handleColorClick(color)}
            >
              <span>{color === copiedColor ? "Copied!" : color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ColorPalette;
