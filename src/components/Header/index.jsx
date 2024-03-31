import "../styles/Header.css";

const styles = {
  headerStyle: {
    background: "radial-gradient(circle, rgba(195,174,238,1) 0%, rgba(6,60,125,1) 100%)",
  },
  headingStyle: {
    fontSize: "100px",
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
