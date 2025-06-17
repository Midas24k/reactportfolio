import "../styles/Header.css";

const styles = {
  headerStyle: {
    backgroundImage:
      "linear-gradient(to top, #212529, #26292d, #2a2d31, #2f3236, #34363a, #434549, #525558, #626568, #838688, #a6a8aa, #cacccd, #f0f1f1)",
    display: "flex",
    justifyContent: "center",
    fontFamily: "monospace",
  },

  headingStyle: {
    fontSize: "100px",
    color: "silver",
    textAlign: "center",
    padding: "20px",
    margin: "0",
    textShadow: "1px 1px 2px black",
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
