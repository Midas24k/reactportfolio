import "../styles/Header.css";

const styles = {
  headerStyle: {
    background: "",
    border: "8px silver solid",
    borderRadius: "10px"
  },
  headingStyle: {
    fontSize: "100px",
    color: "silver",
    textAlign: "center",
    padding: "20px",
    margin: "0", 
    textShadow: "1px 1px 2px black"
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
