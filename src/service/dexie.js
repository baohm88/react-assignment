import Dexie from 'dexie';

export const db = new Dexie('t2404e');
db.version(1).stores({
  student: '++id, name, age, pic, address',
  room: '++id, name, address'  
});