import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { Header } from './Header';

const renderHeader = () => render(
    <MemoryRouter>
        <Header />
    </MemoryRouter>
);

describe ('Tests for Header component', () => {
    afterEach(cleanup)

    it ('Renders without crashing', () => {
        renderHeader();
    })

    it ('Bears SpaceX title', () => {
        const { getByText } = renderHeader();
        expect( getByText(/SpaceX/i) ).toBeInTheDocument();
    })
    
    it ('Contains buttons for links to other pages', () => {
        const { getByTestId } = renderHeader();
        expect( getByTestId('home-button') ).toBeInTheDocument();
        expect( getByTestId('launches-button') ).toBeInTheDocument();
        expect( getByTestId('rockets-button') ).toBeInTheDocument();
        expect( getByTestId('history-button') ).toBeInTheDocument();
        expect( getByTestId('about-button') ).toBeInTheDocument();
    })
})