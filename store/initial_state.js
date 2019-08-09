import { _loadData } from '../utils/api'

export const INITIAL_STATE = {
    React: {
        timestamp: Date.now() + 1,
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        timestamp: Date.now(),
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    'Capital Cities': {
        timestamp: Date.now(),
        title: 'Capital Cities',
        questions: [
            {
                question: 'Argentina',
                answer: 'Buenos Aires'
            },
            {
                question: 'China',
                answer: 'Beijing'
            },
            {
                question: 'Japan',
                answer: 'Tokyo'
            },
            {
                question: 'Spain',
                answer: 'Madrid'
            },
            {
                question: 'Italy',
                answer: 'Rome'
            },
            {
                question: 'Thailand',
                answer: 'Bangkok'
            },
        ]
    }
};