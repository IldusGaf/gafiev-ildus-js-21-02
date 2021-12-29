import React from "react";
import { shallow } from 'enzyme';
import UserCard from "../../../components/UserCard/UserCard";

describe('UserCard component', () => {
    test('should render component', () => {
        const wrapper = shallow(<UserCard />);
        expect(wrapper.find('div.user__container')).toHaveLength(1);
    });

    test('snapshot test', () => {
        const wrapper = shallow(<UserCard />);
        expect(wrapper).toMatchSnapshot();
      });

    test('should render data', () => {
        const id = '216544654697498';
        const title = 'mr';
        const firstName = 'James';
        const lastName = 'Bond';
        const dateOfBirth = '12.06.1989';
        const registerDate = '13.12.2020';
        const gender = 'male';
        const email = 'ex@ex.com';
        const phone = '12315465656';
        const picture = 'pictureUrl';
        const wrapper = shallow(<UserCard
           title={title}
           firstName={firstName} 
           lastName={lastName}
           dateOfBirth={dateOfBirth}
           registerDate={registerDate}
           picture={picture}
           id={id}
           email={email}
           phone={phone}
           gender={gender}
        />);
        expect(wrapper.find('div.user__info').find('h2').text()).toBe(`${title} ${firstName} ${lastName}`);
        expect(wrapper.find('div.user__id').find('span').last().text()).toBe(id);
        expect(wrapper.find('figure').find('img').prop('src')).toBe(picture);
        expect(wrapper.find('div.gender').find('span').last().text()).toBe(gender);
        expect(wrapper.find('div.birthday').find('span').last().text()).toBe(dateOfBirth);
        expect(wrapper.find('div.regday').find('span').last().text()).toBe(registerDate);
        expect(wrapper.find('div.email').find('span').last().text()).toBe(email);
        expect(wrapper.find('div.phone').find('span').last().text()).toBe(phone);
    });
});
