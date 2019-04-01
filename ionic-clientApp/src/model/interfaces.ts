export interface IGROUP  {
    id: number;
    name: string;
}

export interface IGuest{
    id: number;
    group: string;
    name: string;
    phoneNumber: string;
    membersNo: number;
    tableNo ?: number;
    isVegetarian: boolean;
    address: string;
    response: string;
    sentInvitation : boolean;
    notes: string;
}


export const GROUP_LIST =[{
    id: 1,
    name: "Wedding party"
  },
  {
    id: 2,
    name: "Bride's family"
  },
  {
    id: 3,
    name: "Groom's family"
  },
  {
    id: 4,
    name: "Mutual friends"
  },
];

export const GUEST_LIST: Array<IGuest> = [
    {
        id: 1,
        group: 'Wedding party',
        name: 'Popescu Ion',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: false,
        address: "Random address",
        response: "Accepted",
        sentInvitation : true,
        notes: ''
    },
    {
        id: 2,
        group: 'Wedding party',
        name: 'Gigel Ion',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: false,
        address: "Random address",
        response: "No response",
        sentInvitation : false,
        notes: ''
    },
    {
        id: 3,
        group: 'Wedding party',
        name: 'Marin Ion',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: false,
        address: "Random address",
        response: "Accepted",
        sentInvitation : true,
        notes: ''
    }, {
        id: 4,
        group: 'Wedding party',
        name: 'Vasiliu Ion',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "No response",
        sentInvitation : false,
        notes: ''
    }
]