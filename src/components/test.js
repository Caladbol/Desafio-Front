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
const mList = [];
const sList = [];
const selectedId = [3];

for (let i = 0; i < idList.length; i++){
    { ((mailbox[i].id).toString()).indexOf(selectedId.toString()) == 0 && mList.push(mailbox[i]) }

}

for (let i = 0; i < mList.length; i++){
    sList.push(mList[i].subList)
}

console.log(nList);
console.log(sList);
