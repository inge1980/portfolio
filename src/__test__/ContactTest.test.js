import { render, screen, fireEvent, waitFor, queryByPlaceholderText } from '@testing-library/react'
import ContactTest from '../components/Contact/Contact';

describe('Contact form', () => {
    
    test("Header renders successfully", () => {
        render(<ContactTest/>);

        const element = screen.getByText(/KONTAKT MEG/i);

        expect(element).toBeInTheDocument();
    });

    test("Phone label renders successfully", () => {
        render(<ContactTest/>);

        const element = screen.getByText(/TELEFONNUMMER/i);

        expect(element).toBeInTheDocument();
    });

    test("Email label renders successfully", () => {
        render(<ContactTest/>);

        const element = screen.getByText(/EPOST/i);

        expect(element).toBeInTheDocument();
    });

    test("Name label renders successfully", () => {
        render(<ContactTest/>);

        const element = screen.getByText(/NAVN/i);

        expect(element).toBeInTheDocument();
    });

    test("Send button renders successfully", () => {
        render(<ContactTest/>);

        const element = screen.getByText(/SEND BESKJED/i);

        expect(element).toBeInTheDocument();
    });

    test("Message label renders successfully", () => {
        render(<ContactTest/>);

        const element = screen.getByText(/BESKJED:/i);

        expect(element).toBeInTheDocument();
    });

    test('Send button click is working', async() => {
        render(<ContactTest/>);
        const element = await screen.getByText(/SEND BESKJED/i);
        fireEvent.click(element);
    });
/*
    test("alertMessage: send button click should be accepted", async() => {
        // Mock window.alert
        window.alert = jest.fn();

        // simulate ReCaptcha

        // render component
        render(<ContactTest/>);

        // Fill in the form
        const name = screen.getByPlaceholderText('Skriv ditt navn her..');
        fireEvent.change(name, {target: { value: "NN" } });
        const email = screen.getByPlaceholderText('Skriv din epost her..');
        fireEvent.change(email, {target: { value: "NN@NN" } });
        const phone = screen.getByPlaceholderText('Skriv ditt telefonnummer her..');
        fireEvent.change(phone, {target: { value: "333" } });
        const message = screen.getByPlaceholderText('Skriv inn din beskjed her..');
        fireEvent.change(message, {target: { value: "NN" } });
        
        // Simulate clicking the submit button
        const submitButton = screen.getByText(/SEND BESKJED/i);
        fireEvent.click(submitButton);

        // Wait for the async validation to finish
        await waitFor(() => expect(window.alert).toHaveBeenCalled());

        // Check that the success alert was shown
        expect(window.alert.mock.calls[0][0]).toContain('beskjeden er sendt');
    });
*/

    test("alertMessage: send button click should not be accepted", async() => {
        // Mock window.alert
        window.alert = jest.fn();
        
        render(<ContactTest/>);

        // Finn knappen og klikk uten å fylle inn navn
        const element = screen.getByText(/SEND BESKJED/i);
        fireEvent.click(element);

        // Wait for the async validation to finish
        await waitFor(() => expect(window.alert).toHaveBeenCalled());

        // Sjekk at feilmeldingen vises
        expect(window.alert.mock.calls[0][0]).toContain('det kan virke som om du ikke er helt menneskelig');

        //expect(window.alert).toHaveBeenCalledWith(expect.stringContaining(''));
    });

    test('Message textarea renders successfully', () => {
        render(<ContactTest/>);
        const element = screen.queryByPlaceholderText(/Skriv inn din beskjed her../i);
        expect(element).toBeInTheDocument();
    });
});