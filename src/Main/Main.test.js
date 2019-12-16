import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';
import Searchbar from '../Searchbar/Searchbar';
import { IssuePage } from '../Searchbar/IssuePage/IssuePage';

describe('MainComponent', () => {
    it('should navigate to Searchbar page', () => {
        const component = mount(
            <MemoryRouter initialEntries={['/']}>
                <Main />
            </MemoryRouter>
        );

        expect(component.find(Searchbar)).toHaveLength(1);
        expect(component.find(IssuePage)).toHaveLength(0);
    });

    it('should navigate to Issue page of id 4', () => {
        const component = mount(
            <MemoryRouter initialEntries={['/issues/3']}>
                <Main />
            </MemoryRouter>
        );

        expect(component.find(Searchbar)).toHaveLength(0);
        expect(component.find(IssuePage)).toHaveLength(1);
    });
});
