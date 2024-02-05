import ColorPalette from "./ColorPalette";

const Home: React.FC = () => {
  const colors1 = ["03045e", "023e8a", "0077b6", "48cae4", "ade8f4"];
  const colors2 = ["fec5bb", "fcd5ce", "fae1dd", "f8edeb", "ffe5d9"];
  const colors3 = ["774936", "8a5a44", "9d6b53", "b07d62", "c38e70"];
  const colors4 = ["344e41", "3a5a40", "588157", "a3b18a", "84a98c"];
  const colors5 = ["590d22", "800f2f", "a4133c", "ff4d6d", "ff758f"];
  const colors6 = ["ff6d00", "ff7900", "ff8500", "ff9100", "ff9e00"];

  return (
    <div className="ColorPalette" style={{ padding: "20px" }}>
      <ColorPalette colors={colors1} />
      <ColorPalette colors={colors2} />
      <ColorPalette colors={colors3} />
      <ColorPalette colors={colors4} />
      <ColorPalette colors={colors5} />
      <ColorPalette colors={colors6} />
    </div>
  );
};

export default Home;
