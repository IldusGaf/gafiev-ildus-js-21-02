 export interface PeopleInterface {
    next: string;
    previous: string;
    results: PersonInterface[];
    count?: number;
}

 export interface PersonInterface {
     name: string;
     height: number;
     mass: number;
     gender: string;
 }
