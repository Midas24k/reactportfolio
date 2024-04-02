import Button from 'react-bootstrap/Button';

const styles = {    
    homePageStyle: {
      display: "block",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    homeSiteStyle: {
      
      

    },
    };


export function HomePage() {
  return (
    <div style={styles.homePageStyle} className="homePage">
      <img src="src/assets/jameswebb.jpg" alt="jameswebb"></img> 
      <p style={styles.homePageStyle}>"Endless possibilities await those who dare to dream, code, and create. Within the complexity lies the opportunity to create something truly extraordinary."</p>
      <h2 style={styles.homePageStyle}>Created by: Roderick Hughey</h2>
      <Button variant="dark" size="lg">Enter</Button>{''}
    </div>
  );
}

export default HomePage;