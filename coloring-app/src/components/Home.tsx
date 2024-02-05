import ColorPalette from "./ColorPalette";

const Home: React.FC = () => {
  const colors1 = ["03045e", "023e8a", "0077b6", "48cae4", "ade8f4"];
  const colors2 = ["fec5bb", "fcd5ce", "fae1dd", "f8edeb", "ffe5d9"];
  const colors3 = ["774936", "8a5a44", "9d6b53", "b07d62", "c38e70"];
  const colors4 = ["344e41", "3a5a40", "588157", "a3b18a", "84a98c"];
  const colors5 = ["590d22", "800f2f", "a4133c", "ff4d6d", "ff758f"];
  const colors6 = ["ff6d00", "ff7900", "ff8500", "ff9100", "ff9e00"];
  const colors7 = ["231942", "5e548e", "9f86c0", "be95c4", "e0b1cb"];
  const colors8 = ["461220", "8c2f39", "b23a48", "fcb9b2", "fed0bb"];
  const colors9 = ["ef6351", "f38375", "f7a399", "fbc3bc", "ffe3e0"];
  const colors10 = ["ff595e", "ffca3a", "8ac926", "1982c4", "6a4c93"];
  const colors11 = ["eb5e28", "252422", "403d39", "ccc5b9", "fffcf2"];
  const colors12 = ["0d3b66", "faf0ca", "f4d35e", "ee964b", "f95738"];

  return (
    <div className="ColorPalette" style={{ padding: "20px" }}>
      <ColorPalette colors={colors1} />
      <ColorPalette colors={colors2} />
      <ColorPalette colors={colors3} />
      <ColorPalette colors={colors4} />
      <ColorPalette colors={colors5} />
      <ColorPalette colors={colors6} />
      <ColorPalette colors={colors7} />
      <ColorPalette colors={colors8} />
      <ColorPalette colors={colors9} />
      <ColorPalette colors={colors10} />
      <ColorPalette colors={colors11} />
      <ColorPalette colors={colors12} />
    </div>
  );
};

export default Home;
