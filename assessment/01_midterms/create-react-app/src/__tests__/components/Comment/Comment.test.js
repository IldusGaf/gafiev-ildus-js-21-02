import React from "react";
import { shallow } from 'enzyme';
import Comment from "../../../components/Comment/Comment";

describe('Comment component', () => {
    test('should render component', () => {
        const wrapper = shallow(<Comment />);
        expect(wrapper.find('div.comment')).toHaveLength(1);
    });

    test('snapshot test', () => {
        const wrapper = shallow(<Comment />);
        expect(wrapper).toMatchSnapshot();
      });

    test('should render data', () => {
        const title = 'mr';
        const firstName = 'James';
        const lastName = 'Bond';
        const publishDate = '12.06.2020';
        const text = 'Blah-blah-blah';
        const wrapper = shallow(<Comment
           title={title}
           firstName={firstName} 
           lastName={lastName}
           publishDate={publishDate}
           text={text}
        />);
        expect(wrapper.find('div.comment__owner').first().text()).toBe(`${title} ${firstName} ${lastName}`);
        expect(wrapper.find('div.comment__date').text()).toBe(publishDate);
        expect(wrapper.find('div.comment__text').text()).toBe(text);
    });
});  
