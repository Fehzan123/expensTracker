import { render,screen } from "@testing-library/react";
import LoginButton from "./LoginButton";

test("Login",()=>{
    render(<LoginButton/>)
    const text=screen.getByText(/LoginButton/i);
    expect(text).toBeInTheDocument();
})