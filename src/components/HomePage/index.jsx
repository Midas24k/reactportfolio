import Button from 'react-bootstrap/Button';


export function HomePage() {
  return (
    <div className="home-page">
      <h1> Endless Possibilities</h1>
      <p>Welcome to my Portfolio</p>
      <h3> By Roderick Hughey</h3>
      <Button variant="light" href="#">Enter</Button> 
    </div>
  );
}

export default HomePage;