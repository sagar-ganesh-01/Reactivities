
export interface Duck {
    name: string;
    age: number;
    makesound: (sound: string) => void;
}


const duck1 = {
    name : 'huey',
    age: 2,
    makesound: (sound:string) => console.log(sound)
}


const duck2 = {
    name : 'dewey',
    age: 2,
    makesound: (sound:any) => console.log(sound)
}


export const ducks = [duck1, duck2]