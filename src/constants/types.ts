export interface sidebarTypes {
    id: number;
    name: string;
    icon: JSX.Element;
    link: string;
}

export interface lineTypes {
    variant: string;
}

export interface cardTypes {
  name: string;
  number: any;
}

export interface AnalyticsTypes {
  dashboard: number | any;
peakConcurrency: number;
usersActiveThisMonth : number;
usersActiveToday : number;
usersOnline: number;
  // Add more properties as needed
}

export interface chatTypes {
  numberOfUsers: number | any;
  totalMessagesSent: number;
  totalStorageUsed : number;
  totalMediaSent : number;
}

