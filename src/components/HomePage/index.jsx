import Button from 'react-bootstrap/Button';

const styles = {    
    homePageStyle: {
      display: "block",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "300px",
      backgroundImage: "url('src/assets/jameswebb.jpg')"
    },
    homeSiteStyle: {
      color: "white",
      

    },
    };


export function HomePage() {
  return (
    <div style={styles.homePageStyle} className="homePage">
      <p style={styles.homeSiteStyle}>"Endless possibilities await those who dare to dream, code, and create. Within the complexity lies the opportunity to create something truly extraordinary."</p>
      <h1 style={styles.homeSiteStyle}>Created by:Roderick Hughey</h1>
      <Button variant="light">Enter</Button>
    </div>
  );
}

export default HomePage;