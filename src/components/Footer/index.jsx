import Breadcrumb from 'react-bootstrap/Breadcrumb';

const styles = {
    footerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "30px",
        
    },
};

function Footer() {
    return (
      <Breadcrumb style={styles.footerStyle}>
        <Breadcrumb.Item href="https://github.com/Midas24k">GitHub</Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.linkedin.com/in/rod-hughey24k/">
          LinkedIn
        </Breadcrumb.Item>
        <Breadcrumb.Item active></Breadcrumb.Item>
      </Breadcrumb>
    );
  }

export default Footer;