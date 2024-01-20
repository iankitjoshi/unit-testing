import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it show two input box and one button", () => {
    render(<UserForm />);

    const input = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    expect(input).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test("it call the onUserAdd when the form is submitted", () => {
    render(<UserForm onUserAdd={() => { }} />);

    const [nameInput, emailInput] = screen.getAllByRole("textbox");

    userEvent.click(nameInput);
    userEvent.keyboard('Ankit Joshi');

    userEvent.click(emailInput);
    userEvent.keyboard('ajoshi@gmail.com');

    const button = screen.getByRole("button");

    userEvent.click(button)
})