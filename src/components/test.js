const mailbox = [
    {
        id: 1,
        subList: [{
            id: 11,
            },
            {
            id: 12,
            },
            {
            id: 13,
            }]
        },
    {
        id: 2,
        subList: [{
            id: 21,
        }]
    },
    {
        id: 3,
        subList: [{
            id: 31,
        }]
    }
];
const mList = [1];
const sList = [];
const selectedId = [3];

console.log(mailbox);

const myArray = mailbox.id.filter( function( el ) {
    return !mList.includes( el );
});
  
console.log(mailbox);