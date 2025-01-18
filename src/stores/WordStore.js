// Importing the 'create' function from Zustand to create a store
import { create } from "zustand";

// create function creates a store, which holds the state of the application.
// This store has state variables and functions that can update them.
const useWordStore = create((set) => ({
    // wordList will hold an array of words
    wordList: [],

    // word will hold the current word selected or used in the game
    word: '',

    // setWordList is a function to update the wordList state
    setWordList: (list) => {
        set((state) => {
            // Logging the current state to the console for debugging
            console.log("state printing", state);
            // Return a new state object with the updated wordList
            return {
                ...state, // Spread the existing state to retain other values
                wordList: list // Update the wordList with the new list
            };
        });
    },

    // setWord is a function to update the word state
    setWord: (newWord) => {
        set((state) => {
            // Return a new state object with the updated word
            return {
                ...state, // Spread the existing state to retain other values
                word: newWord // Update the word state with the new word
            };
        });
    }
}));

// Export the useWordStore hook to allow access to the store in components
export default useWordStore;
