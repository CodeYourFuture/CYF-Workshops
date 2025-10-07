let name1 = "Morgan"; // implicitly type string
let name2: string = "Morgan"; // explicitly type string
const name4 = "Morgan"; // implicitly typed to the literal string "Samuel"
const name3: string = "Morgan"; // explicitly type string

let age1 = 40; // implicitly type number
let age2: number = 40; // explicitly type number
const age3 = 40; // implicitly typed to the literal number 40
const age4: number = 40; // explicitly type number

let isFriendly = true; // implicitly type boolean
let isAngry: boolean = true; // explicitly type boolean
const isOpen = true; // implicitly typed to the literal boolean true
const isClosed: boolean = true; // explicitly type boolean

let anything1; // implicitly type any
let anything2: any; // explicitly type any
let anything3: unknown; // explicitly type unknown

let nothing1 = undefined; // implicitly type undefined
let nothing2: undefined = undefined; // explicitly type undefined
let nothing3 = null; // implicitly type null
let nothing4: null = null; // explicitly type null

let numberSet1 = [1, 2, 3]; // implicitly type number[]
let numberSet2: number[] = [1, 2, 3]; // explicitly type number[]

// Ignore this export. Something must be exported for TypeScript to not treat the above types as global definitions.
export {};
