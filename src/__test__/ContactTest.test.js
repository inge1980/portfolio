
// Definer mock-komponenten først
const MockReCAPTCHA = forwardRef((props, ref) => {
    //console.log('MockReCAPTCHA rendered'); // For debugging
    const mockRef = useRef({
        getValue: () => 'mock-recaptcha-token',
        reset: () => {}  // Simulerer en tom reset-funksjon
    });

    // Eksponer mockRef.metoder til den overordnede ref
    useImperativeHandle(ref, () => mockRef.current);

    return (
        <button onClick={() => props.onChange(mockRef.current.getValue())}>
            Mock ReCAPTCHA
        </button>
    );
}); 

// Mock the module at the top level
jest.mock('@emailjs/browser', () => ({
    sendForm: jest.fn() // Initial empty mock
}));

import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { render, screen, fireEvent, waitFor, toHaveBeenCalled, toContain } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import * as emailjs from '@emailjs/browser'; // Import for mock verification
 
describe('Contact form', () => {
    let ContactTest;

    beforeEach(() => {
        jest.clearAllMocks(); // Rydder opp i mocks
        jest.mock('react-google-recaptcha', () => ({
            __esModule: true,
            default: MockReCAPTCHA,
        }));

        // Reset and mock sendForm to resolve with a mock response
        emailjs.sendForm.mockClear();

        // Importer modulen etter at mocken er definert
        ContactTest = require('../components/Contact/Contact').default;
    });

    test("alertMessage: send button click should not be accepted", async() => {
        // Mock window.alert
        window.alert = jest.fn();

        // Mock emailjs.sendForm to reject with an error
        emailjs.sendForm.mockRejectedValue(new Error("ReCAPTCHA failed"));

        render(<ContactTest/>);

        // Finn knappen og klikk uten å fylle inn navn
        const element = screen.getByText(/SEND BESKJED/i);
        fireEvent.click(element);

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('det kan virke som om du ikke er helt menneskelig'));
        });
    });

    test("alertMessage: send button click should be accepted", async() => {
        // Mock window.alert
        window.alert = jest.fn();

        // Mock emailjs.sendForm to resolve with a success response
        emailjs.sendForm.mockResolvedValue({ status: 200 });

        // render component
        render(<ContactTest/>);

        // Fill in the form
        await act(async () => {
            // Fill in the form
            fireEvent.change(screen.getByPlaceholderText('Skriv ditt navn her..'), { target: { value: "NN" } });
            fireEvent.change(screen.getByPlaceholderText('Skriv din epost her..'), { target: { value: "NN@NN" } });
            fireEvent.change(screen.getByPlaceholderText('Skriv ditt telefonnummer her..'), { target: { value: "333" } });
            fireEvent.change(screen.getByPlaceholderText('Skriv inn din beskjed her..'), { target: { value: "NN" } });

            // Simulate ReCAPTCHA and form submission
            fireEvent.click(screen.getByText('Mock ReCAPTCHA'));
            fireEvent.click(screen.getByText(/SEND BESKJED/i));
        });

        // Wait for the async emailjs.sendForm to resolve
        await waitFor(() => {
            expect(emailjs.sendForm).toHaveBeenCalled();
        });

        // Wait for the async window.alert to resolve 
        await waitFor(() => {
            expect(window.alert).toHaveBeenCalled();
            expect(window.alert.mock.calls[0][0]).toContain('beskjeden er sendt');
        });

    });

    test('should render MockReCAPTCHA component', () => {
        const { getByText } = render(<MockReCAPTCHA />);
        expect(getByText('Mock ReCAPTCHA')).toBeInTheDocument();
    });

    test('MockReCAPTCHA button should call onChange with token', () => {
        const onChange = jest.fn();
        const { getByText } = render(<MockReCAPTCHA onChange={onChange} />);
        fireEvent.click(getByText('Mock ReCAPTCHA'));
        expect(onChange).toHaveBeenCalledWith('mock-recaptcha-token');
    });

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
/* 
    test('Send button click is working', async() => {
        render(<ContactTest/>);
        const element = await screen.getByText(/SEND BESKJED/i);
        fireEvent.click(element);
    });
 */

    test('Message textarea renders successfully', () => {
        render(<ContactTest/>);
        const element = screen.queryByPlaceholderText(/Skriv inn din beskjed her../i);
        expect(element).toBeInTheDocument();
    });
});