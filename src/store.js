import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialContacts = [
  {
    id: "1",
    name: "Marina Costa",
    email: "marina.costa@email.com",
    phone: "(11) 99876-1234",
    isNew: false,
  },
  {
    id: "2",
    name: "Rafael Nogueira",
    email: "rafael.nogueira@email.com",
    phone: "(21) 98765-4321",
    isNew: false,
  },
  {
    id: "3",
    name: "Camila Ferreira",
    email: "camila.ferreira@email.com",
    phone: "(31) 99123-7788",
    isNew: false,
  },
  {
    id: "4",
    name: "Lucas Almeida",
    email: "lucas.almeida@email.com",
    phone: "(41) 99654-1122",
    isNew: false,
  },
  {
    id: "5",
    name: "Sofia Martins",
    email: "sofia.martins@email.com",
    phone: "(51) 99881-4432",
    isNew: false,
  },
  {
    id: "6",
    name: "Bruno Oliveira",
    email: "bruno.oliveira@email.com",
    phone: "(85) 98876-2190",
    isNew: false,
  },
];

function getStoredContacts() {
  try {
    const stored = window.localStorage.getItem("orbit-contacts");
    return stored ? JSON.parse(stored) : initialContacts;
  } catch {
    return initialContacts;
  }
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: getStoredContacts() },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.unshift(action.payload);
      },
      prepare: (contact) => ({
        payload: { ...contact, id: crypto.randomUUID(), isNew: true },
      }),
    },
    updateContact: (state, action) => {
      const contact = state.items.find((item) => item.id === action.payload.id);
      if (contact)
        Object.assign(contact, action.payload.changes, { isNew: false });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload,
      );
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactsSlice.actions;

export const store = configureStore({
  reducer: { contacts: contactsSlice.reducer },
});

store.subscribe(() => {
  try {
    window.localStorage.setItem(
      "orbit-contacts",
      JSON.stringify(store.getState().contacts.items),
    );
  } catch {
    // Persistência é um recurso adicional; o estado em memória continua funcionando.
  }
});
