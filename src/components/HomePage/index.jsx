import Button from 'react-bootstrap/Button';

const styles = {    
    homePageStyle: {
      display: "block",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    homeSiteStyle: {
      margin: "20px"
    
    },
    };


export function HomePage() {
  return (
    <div style={styles.homePageStyle} className="homePage">
      <img src="src/assets/jameswebb.jpg" alt="jameswebb"></img> 
      <p style={styles.homePageStyle}>"Endless possibilities await those who dare to dream, code, and create. Within the complexity lies the opportunity to create something truly extraordinary."</p>
      <Button variant="dark" size="lg"style={styles.homeSiteStyle}>Portfolio</Button>{''}
      <Button variant="dark" size="lg" style={styles.homeSiteStyle}>Resume</Button>{''}
    </div>
  );
}

export default HomePage;