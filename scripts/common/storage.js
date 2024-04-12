// export const storage = {

  // -//   // используется для удаления события
  // -//   eventIdToDelete: null,
  // -//   // хранит дату понедельника той отображаемой недели
  // -//   displayedWeekStart: null,
  // -//   // хранит массив всех событий
  // -//   events: [],
  // -//   // это все данные, которые вам нужно хранить для работы приложения
  // -// };
  // -// console.log(storage)
  
  export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
// -export const setItem = (key, value) => {
//   -  // ф-ция должна устанавливать значения в объект storage
//   -  // Object.assign(storage, { [key]: value });
//   -  localStorage.setItem(key, JSON.stringify(value));
//   -};



// export const getItem = (key) => storage[key];

export const getItem = (key) => JSON.parse(localStorage.getItem(key));
  // ф-ция должна возвращать по ключу значения из объекта storage


// пример объекта события
const eventExample = {
  id: 0.7520027086457333, // id понадобится для работы с событиями
  title: 'Title',
  description: 'Some description',
  start: new Date('2020-03-17T01:10:00.000Z'),
  end: new Date('2020-03-17T04:30:00.000Z'),
};
