import "../styles/Header.css";

const styles = {
  
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
      <h1 style={styles.headingStyle}></h1>
    </header>
  );
}

export default Header;
