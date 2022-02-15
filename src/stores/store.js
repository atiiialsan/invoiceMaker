import { writable } from "svelte/store";

export const invoiceData = writable({
    Bauvorhaben: "",
    Datum: "",
    Kunde: ""
})