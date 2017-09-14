export default function (state, action) {
    switch (action.type) {
        default:
            return [
                { title: 'Mind Power', pages: 350 },
                { title: 'The Power of Awareness', pages: 78 },
                { title: 'The Kybalion', pages: 137 },
                { title: 'The Master Mind', pages: 158 }
            ];
    }
}