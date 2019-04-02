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
        name: 'Cioates Adriana',
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
        name: 'Vija Dragos',
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
        group: "Bride's family",
        name: 'Cornea Alexandru',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: false,
        address: "Random address",
        response: "Declined",
        sentInvitation : true,
        notes: ''
    }, {
        id: 4,
        group: "Bride's family",
        name: 'Badila Roberto',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "Declined",
        sentInvitation : false,
        notes: ''
    }, {
        id: 4,
        group: 'Wedding party',
        name: 'Murariu Ruxandra',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "Declined",
        sentInvitation : false,
        notes: ''
    }, {
        id: 5,
        group:  "Groom's family",
        name: 'Popovici Andreea',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "No response",
        sentInvitation : false,
        notes: ''
    }, {
        id: 6,
        group: "Bride's family",
        name: 'Ursu Roxana',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "No response",
        sentInvitation : false,
        notes: ''
    }, {
        id: 7,
        group: 'Wedding party',
        name: 'Pahon Flavia',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "Declined",
        sentInvitation : false,
        notes: ''
    }, {
        id: 8,
        group:  "Groom's family",
        name: 'Serban Baicu',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "Declined",
        sentInvitation : false,
        notes: ''
    }, {
        id: 9,
        group: "Mutual friends",
        name: 'Motoc Alexandru',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "Declined",
        sentInvitation : false,
        notes: ''
    }, {
        id: 10,
        group:  "Groom's family",
        name: 'Motoc Iulia',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "No response",
        sentInvitation : false,
        notes: ''
    }, {
        id: 11,
        group: "Mutual friends",
        name: 'Schiopu Rares',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "Accepted",
        sentInvitation : false,
        notes: ''
    }, {
        id: 12,
        group:  "Groom's family",
        name: 'Mihali George',
        phoneNumber: '0749049983',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "No response",
        sentInvitation : false,
        notes: ''
    }, {
        id: 13,
        group: "Mutual friends",
        name: 'Handolescu Radu',
        phoneNumber: '0755438955',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "Accepted",
        sentInvitation : false,
        notes: ''
    }, {
        id: 14,
        group: 'Wedding party',
        name: 'Samoila Carina',
        phoneNumber: '0749056698',
        membersNo:  2,
        isVegetarian: true,
        address: "Random address",
        response: "Accepted",
        sentInvitation : false,
        notes: ''
    }
]