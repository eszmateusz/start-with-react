export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search!',
    icon: 'search',
  },
  header: {
    icon: 'plane',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const infoContent = {
  title: 'INFO',
  image: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  content: 'Lorem ipsum lorem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const FAQContent = {
  title: 'FAQ',
  image: 'https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum lorem.',
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'list-2',
    title: 'Countries to visit in the near <sub>future!</sub>',
    description: 'Places to visit during the next year.',
    image: 'https://images.pexels.com/photos/4577858/pexels-photo-4577858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'list-3',
    title: 'CDs to listen next <sup>month!</sup>',
    description: 'Albums that I have to listen!',
    image: 'https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Europe',
    icon: 'globe-africa',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Asia',
    icon: 'umbrella-beach',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'USA',
    icon: 'hotel',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Pop',
    icon: 'compact-disc',
  },
  {
    id: 'column-8',
    listId: 'list-3',
    title: 'Rock',
    icon: 'guitar',
  },
  {
    id: 'column-9',
    listId: 'list-3',
    title: 'Hip-hop',
    icon: 'headphones-alt',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
  {
    id: 'card-7',
    columnId: 'column-4',
    title: 'Sweden',
  },
  {
    id: 'card-8',
    columnId: 'column-4',
    title: 'Georgia',
  },
  {
    id: 'card-9',
    columnId: 'column-5',
    title: 'Israel',
  },
  {
    id: 'card-10',
    columnId: 'column-5',
    title: 'Nepal',
  },
  {
    id: 'card-11',
    columnId: 'column-6',
    title: 'Argentina',
  },
  {
    id: 'card-12',
    columnId: 'column-6',
    title: 'Mexico',
  },
  {
    id: 'card-13',
    columnId: 'column-7',
    title: 'Shakira',
  },
  {
    id: 'card-14',
    columnId: 'column-7',
    title: 'Billie Eilish',
  },
  {
    id: 'card-15',
    columnId: 'column-8',
    title: 'The Black Eyed Peas',
  },
  {
    id: 'card-16',
    columnId: 'column-8',
    title: 'Mumford & Sons',
  },
  {
    id: 'card-17',
    columnId: 'column-9',
    title: 'Eminem',
  },
  {
    id: 'card-18',
    columnId: 'column-9',
    title: '2Pac',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;