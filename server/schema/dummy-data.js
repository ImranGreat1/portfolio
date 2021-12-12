const DUMMY_POSTS = [
  {
    id: '1',
    title: 'My first Graphql post',
    description: 'First post description',
    authorId: '1',
  },
  {
    id: '2',
    title: 'I am so lonely',
    description: 'I somehow love it like that',
    authorId: '2',
  },
  {
    id: '3',
    title: 'The act of staying focused, is the secret to success.',
    description: 'Your education and talent alone is not enough',
    authorId: '1',
  },
];

const DUMMY_AUTHORS = [
  { name: 'Imran Great', age: 25, id: '1' },
  { name: 'Jamila Bello', age: 21, id: '2' },
];

module.exports = { DUMMY_POSTS, DUMMY_AUTHORS };
