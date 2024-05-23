interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}


interface Directors extends Teacher{
    numberOfReports: number;
}

function printTeacher(arg1: string, arg2:string): string {
    return (arg1.charAt(0) + ". " + arg2);
}


interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface Students {
    workOnHomework(): string;
    displayName(): string;
}


class StudentClass implements Students{
    firstName: string;
    lastName: string;

    constructor({firstName, lastName}: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return `Currently working`;
    }

    displayName(): string {
        return `${this.firstName}`;
    }
}