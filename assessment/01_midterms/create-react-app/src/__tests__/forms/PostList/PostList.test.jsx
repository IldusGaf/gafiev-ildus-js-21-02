import React from "react";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, mount } from 'enzyme';
import PostList from "../../../forms/PostList/PostList";
import * as actions from '../../../actions/loadPostList';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

jest.mock('../../../actions/loadPostList');
jest.mock('../../../components/Post/Post', () => () => {
    return <div className="post" />
});
jest.mock('../../../components/Loader/Loader', () => () => {
    return <div className="loader" />
});
jest.mock('../../../wrappers/ComponentForModal/ComponentForModal', () => () => {
    return <div className="modal" />
});

const mockStore = configureStore([thunk]);

describe('PostList form', () => {
    test('should render posts', () => {
        const store = mockStore({
            posts: {
                postList: [
                    {
                        owner: {
                            id: '123sfsd',
                            avatar: "some url",
                            title: 'mr',
                            firstName: 'Masyanya',
                            lastName: 'Bukin',
                        },
                        date: '13.06.20',
                        picture: 'url',
                        text: 'some text',
                    },
                    {
                        owner: {
                            id: '123sfsd',
                            avatar: "some url",
                            title: 'mr',
                            firstName: 'Masyanya',
                            lastName: 'Bukin',
                        },
                        date: '13.06.20',
                        picture: 'url',
                        text: 'some text',
                    },
                    {
                        owner: {
                            id: '123sfsd',
                            avatar: "some url",
                            title: 'mr',
                            firstName: 'Masyanya',
                            lastName: 'Bukin',
                        },
                        date: '13.06.20',
                        picture: 'url',
                        text: 'some text',
                    },
                ],
                loading: false,
            },
            theme: {
                darkTheme: false,
            }
        });
        const wrapper = render(<PostList store={store} />);
        expect(wrapper.find('div.post')).toHaveLength(3);
    });

    test('should render loading', () => {
        const store = mockStore({
            posts: {
                postList: [],
                loading: true,
            },
            theme: {
                darkTheme: false,
            }
        });
        const wrapper = render(<PostList store={store} />);
        expect(wrapper.find('div.loader')).toHaveLength(1);
    });

    test('should call loading action', () => {
        const store = mockStore({
            posts: {
                postList: [],
                loading: false,
            },
            theme: {
                darkTheme: false,
            }
        });
        store.dispatch = jest.fn();
        mount(<PostList store={store} />);
        expect(actions.loadPostList).toBeCalledWith(0, 6);
    });

    test('should open modal', () => {
        const store = mockStore({
            posts: {
                postList: [],
                loading: false,
                isOpen: true,
                post: {
                    id: 'ghdfghdgdfbv',
                    publishDate: '21.12.2019',
                    picture: 'url',
                    text: 'Blah-blah',
                    owner: {
                        avatar: 'url',
                        ownerId: '1323423fegefg',
                        title: 'mr',
                        firstName: 'James',
                        lastName: 'Bond',
                    }
                }
            },
            theme: {
                darkTheme: false,
            }
        });
        const wrapper = render(<PostList store={store} />);
        expect(wrapper.find('div.modal')).toHaveLength(1);
    });
});
