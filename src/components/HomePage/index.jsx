import Button from 'react-bootstrap/Button';

const styles = {    
    homePageStyle: {
      display: "block",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      textShadow: "1px 1px 30px black",
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
      
    </div>
  );
}

export default HomePage;