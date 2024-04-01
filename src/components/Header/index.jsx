import "../styles/Header.css";

const styles = {
  headerStyle: {
    background: "",
    border: "8px silver solid",
    radius: "10px"
  },
  headingStyle: {
    fontSize: "100px",
    color: "white",
    textAlign: "center",
    padding: "20px",
    margin: "0", 
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Endless Possibilities</h1>
    </header>
  );
}

export default Header;
