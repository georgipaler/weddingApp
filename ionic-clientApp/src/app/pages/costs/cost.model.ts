export class Cost {
    constructor(
      public id: string,
      public title: string,
      public  dueDate: Date,
      public totalSum: number,
      public  category: string ,
      public paid: boolean,
      public notes?: string
    ) {}
    }
