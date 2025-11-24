import { currentLibraryStorage } from './currentLibraryStorage.js';

export const createCurrentStorage = function () {

    const currentStorage = currentLibraryStorage();
    const STORAGE_KEY = 'Current Library';

    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentStorage));

    return STORAGE_KEY;

}