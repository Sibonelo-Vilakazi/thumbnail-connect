export class Helpers{
    constructor() {}

    isValidEmail(email: string) {
        const emailRegex = /^[A-Z0-9. _%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        return emailRegex.test(email)
    } 
}