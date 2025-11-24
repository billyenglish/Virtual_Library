import { createCurrentStorage } from "./createCurrentStorage";

export const getCurrentStorage = function() {

    const currentStorage = 'Current Library';
    const currentBooks = localStorage.getItem(currentStorage);

    if (currentBooks) {
        return JSON.parse(currentBooks);
    } else {
        const createKey = createCurrentStorage();
        return JSON.parse(localStorage.getItem(createKey));
    }

}
