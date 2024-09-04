import Breadcrumb from 'react-bootstrap/Breadcrumb';

const styles = {
    footerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#ffffff",
      color: "white",
      fontSize: "1.5em",
      padding: "10px 10px 10px 0px",
      marginTop: "50px",
    },
};

function Footer() {
    return (
      <>
      <Breadcrumb style={styles.footerStyle}>
        <Breadcrumb.Item href="https://github.com/Midas24k">GitHub</Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.linkedin.com/in/rod-hughey24k/">
         <img src='src/assets/linkedin.png' alt="LinkedIn"/>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Coming Soon</Breadcrumb.Item>
      </Breadcrumb>
      <footer>
        &copy; RLH Designs
      </footer>
      </>
    );
  }

export default Footer;