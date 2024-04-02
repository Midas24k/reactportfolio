import Breadcrumb from 'react-bootstrap/Breadcrumb';

const styles = {
    footerStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        

    },
};

function Footer() {
    return (
      <Breadcrumb style={styles.footerStyle}>
        <Breadcrumb.Item href="https://github.com/Midas24k">GitHub</Breadcrumb.Item>
        <Breadcrumb.Item href="">
            LinkedIn
        </Breadcrumb.Item>
        <Breadcrumb.Item active></Breadcrumb.Item>
      </Breadcrumb>
    );
  }

export default Footer;