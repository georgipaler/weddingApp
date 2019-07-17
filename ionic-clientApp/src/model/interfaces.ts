
import { Cost } from 'src/app/pages/costs/cost.model';


export interface Vendor {
    id?: number;
    name: string;
    role: string;
    phoneNumber: string;
}
export interface IGROUP {
    id: number;
    name: string;
}

export interface IUser {
    id?: number;
    name?: string;
    gender?: string;
    email?: string;
    _value?: any;
}

export interface IEvent {
    title: string;
    startTime: any;
    endTime: any;
    allDay: boolean;
}

export interface IGuest {
    id: number;
    group: string;
    name: string;
    email?: string;
    phoneNumber: string;
    membersNo: number;
    tableNo?: number;
    isVegetarian: boolean;
    address: string;
    response: string;
    sentInvitation: boolean;
    notes: string;
}

export interface IInvitees {
    id?: number;
    name: string;
    phone: string;
}
export interface IAppointment {
    id: number;
    startTime?: string;
    endTime?: string;
    allDay: boolean;
    date: Date;
    title: string;
    invitees?: Array<IInvitees>;
    notes: string;
}

export interface IExpense {
    id: number;
    date: Date;
    title: string;
    cost: number;
    category?: string;
    paid: boolean;
}

export interface INote {
    id?: number;
    date: Date;
    content: string;
}


export const NOTES_LIST = [
    // {
    //     id: 1,
    //     date: new Date(2019, 4, 10),
    //     content: 'Select and order the cake'
    // },
    // {
    //     id: 2,
    //     date: new Date(2019, 4, 15),
    //     content: 'prajituri bune pe straga Narciselor, bl A, scA'
    // },
    // {
    //     id: 3,
    //     date: new Date(2019, 4, 22),
    //     content: 'i-am lasat Monicai banii pentru sucuri'
    // },
    // {
    //     id: 4,
    //     date: new Date(2019, 4, 15),
    //     content: 'Lista ospatari: \n Alina, \nClaudia, \nGabriel, \nAti, \nIoana, \nLuci, \nLaura, \nAnca'
    // },
];


export const GROUP_LIST = [{
    id: 1,
    name: 'Wedding party'
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
    name: 'Mutual friends'
},
];

export const expenses_list: Cost[] = [{
    id: '1',
    title: 'Booked officiants',
    dueDate: new Date(2018, 3, 10),
    category: 'Food & drink',
    totalSum: 3000,
    paid: true
},
{
    id: '2',
    title: 'Bought cookies',
    dueDate: new Date(2018, 10, 11),
    totalSum: 4000,
    category: 'Music',
    paid: true

},
{
    id: '3',
    title: 'Bought flowers',
    dueDate: new Date(2018, 14, 12),
    totalSum: 5600,
    category: 'Flowers',
    paid: true
},
{
    id: '4',
    title: 'Hired a photographer',
    dueDate: new Date(2019, 3, 16),
    totalSum: 1200,
    category: 'Flowers',
    paid: true
},
{
    id: '5',
    title: 'Hired a florist',
    dueDate: new Date(2019, 6, 15),
    totalSum: 300,
    category: 'Flowers',
    paid: true
},
{
    id: '6',
    title: 'Booked restaurant',
    dueDate: new Date(2019, 7, 21),
    totalSum: 10,
    category: 'Flowers',
    paid: false
},
];

export const Appointment_List: Array<IAppointment> = [
    {
        id: 1,
        startTime: '12:30',
        endTime: '13:30',
        allDay: false,
        date: new Date(2019, 3, 10),
        title: 'Send a group playlist',
        invitees: [],
        notes: ''
    },
    {
        id: 2,
        startTime: '12:30',
        endTime: '13:30',
        allDay: false,
        date: new Date(2019, 3, 12),
        title: 'Meeting with the florist',
        invitees: [{ id: 1, name: 'Roxana', phone: '0745987833' }],
        notes: 'Some notes'
    },
    {
        id: 3,
        startTime: '12:30',
        endTime: '13:30',
        allDay: false,
        date: new Date(2019, 3, 16),
        title: 'Meeting with the manager of the restaurant',
        invitees: [{ id: 1, name: 'Laura', phone: '0745987833' }],
        notes: 'Some notes'
    },
    {
        id: 4,
        allDay: true,
        date: new Date(2019, 3, 22),
        title: 'Make a banquet menu',
        invitees: [],
        notes: 'Some notes'
    },
    {
        id: 5,
        startTime: '12:30',
        endTime: '13:30',
        allDay: false,
        date: new Date(2019, 3, 22),
        title: 'Make a banquet menu',
        invitees: [],
        notes: 'Some notes'
    },
    {
        id: 6,
        allDay: true,
        date: new Date(2019, 3, 22),
        title: 'Make a banquet menu',
        invitees: [],
        notes: 'Some notes'
    },
    {
        id: 7,
        startTime: '12:30',
        endTime: '13:30',
        allDay: false,
        date: new Date(2019, 3, 16),
        title: 'Make a banquet menu',
        invitees: [],
        notes: 'Some notes'
    },
];

export const GUEST_LIST: Array<IGuest> = [
    {
        id: 1,
        group: 'Wedding party',
        name: 'Cioates Adriana',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: false,
        address: 'Random address',
        response: 'Accepted',
        sentInvitation: true,
        notes: ''
    },
    {
        id: 2,
        group: 'Wedding party',
        name: 'Vija Dragos',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: false,
        address: 'Random address',
        response: 'No response',
        sentInvitation: false,
        notes: ''
    },
    {
        id: 3,
        group: "Bride's family",
        name: 'Cornea Alexandru',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: false,
        address: 'Random address',
        response: 'Declined',
        sentInvitation: true,
        notes: ''
    }, {
        id: 4,
        group: "Bride's family",
        name: 'Badila Roberto',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'Declined',
        sentInvitation: false,
        notes: ''
    }, {
        id: 4,
        group: 'Wedding party',
        name: 'Murariu Ruxandra',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'Declined',
        sentInvitation: false,
        notes: ''
    }, {
        id: 5,
        group: "Groom's family",
        name: 'Popovici Andreea',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'No response',
        sentInvitation: false,
        notes: ''
    }, {
        id: 6,
        group: "Bride's family",
        name: 'Ursu Roxana',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'No response',
        sentInvitation: false,
        notes: ''
    }, {
        id: 7,
        group: 'Wedding party',
        name: 'Pahon Flavia',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'Declined',
        sentInvitation: false,
        notes: ''
    }, {
        id: 8,
        group: "Groom's family",
        name: 'Serban Baicu',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'Declined',
        sentInvitation: false,
        notes: ''
    }, {
        id: 9,
        group: 'Mutual friends',
        name: 'Motoc Alexandru',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'Declined',
        sentInvitation: false,
        notes: ''
    }, {
        id: 10,
        group: "Groom's family",
        name: 'Motoc Iulia',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'No response',
        sentInvitation: false,
        notes: ''
    }, {
        id: 11,
        group: 'Mutual friends',
        name: 'Schiopu Rares',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'Accepted',
        sentInvitation: false,
        notes: ''
    }, {
        id: 12,
        group: "Groom's family",
        name: 'Mihali George',
        phoneNumber: '0749049983',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'No response',
        sentInvitation: false,
        notes: ''
    }, {
        id: 13,
        group: 'Mutual friends',
        name: 'Handolescu Radu',
        phoneNumber: '0755438955',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'Accepted',
        sentInvitation: false,
        notes: ''
    }, {
        id: 14,
        group: 'Wedding party',
        name: 'Samoila Carina',
        phoneNumber: '0749056698',
        membersNo: 2,
        isVegetarian: true,
        address: 'Random address',
        response: 'Accepted',
        sentInvitation: false,
        notes: ''
    }
]