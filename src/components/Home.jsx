import { Button, Image } from "react-bootstrap"

export const Home = () => {
  return (
    <>
      <Image src="https://picsum.photos/200" alt="profile image" roundedCircle />
      <h1>Gerardo Mansilla</h1>
      <h4>Dev Web Full Stack Jr</h4>

      <Button className="mx-1 button-github" size="lg">
        <i className="bi bi-github"></i>
        Github
      </Button>
      <Button className="mx-1" variant="primary" size="lg">
        <i className="bi bi-linkedin"></i>
        LinkedIn
      </Button>
      <Button className="mx-1" variant="danger" size="lg">
        <i class="bi bi-cloud-download-fill"></i>
        My CV
      </Button>
    </>
  )
}
