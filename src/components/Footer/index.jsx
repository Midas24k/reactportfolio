import Breadcrumb from 'react-bootstrap/Breadcrumb';

const styles = {
    footerStyle: {
        
    },
};

function Footer() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="https://github.com/Midas24k">GitHub</Breadcrumb.Item>
        <Breadcrumb.Item href="">
            LinkedIn
        </Breadcrumb.Item>
        <Breadcrumb.Item active></Breadcrumb.Item>
      </Breadcrumb>
    );
  }

export default Footer;