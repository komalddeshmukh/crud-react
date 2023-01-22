export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    fontSize: "30px",
    height: "35px",
    width: "373px",
    marginTop: "10px"
  };
  return (
    <div style={styles}></div>
  );
}