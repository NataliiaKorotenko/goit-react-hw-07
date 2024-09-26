import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66f1665d415379191550bb2c.mockapi.io/";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const { data } = await axios.delete(`/contacts/${contactId}`);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (profile, thunkAPI) => {
      try {
        const { data } = await axios.post("/contacts", profile);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
