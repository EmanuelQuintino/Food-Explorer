import { Container } from "./style";

export function FormSignIn() {
  return (
    <Container>
      <form>
        <div className="box">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="box">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
      </form>
    </Container>
  )
}