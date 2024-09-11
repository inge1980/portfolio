import { render, screen } from '@testing-library/react'
import FooterTest from '../components/Footer/Footer';

test("Footer renders successfully", () => {
    render(<FooterTest/>);

    const element = screen.getByText(/INGE PEDERSEN/i);

    expect(element).toBeInTheDocument();
})