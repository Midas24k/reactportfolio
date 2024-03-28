import Button from 'react-bootstrap/Button';


export default function HomePage() {
  return (
    <div className="Hero">
      <h1> Endless Possibilities</h1>
      <p>Welcome to my Portfolio</p>
      <h3> By Roderick Hughey</h3>
      <Button href="#">Link</Button> <Button variant="light">Enter</Button>{' '}
    </div>
  );
}