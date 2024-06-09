// src/components/services/instrumentService.js
const API_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`; // Update the URL based on your Django API endpoint

const fetchInstruments = async () => {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const fetchInstrument = async (id) => {
    try {
        const res = await fetch(`${API_URL}${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const createInstrument = async (formData) => {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const updateInstrument = async (formData, id) => {
    try {
        const res = await fetch(`${API_URL}${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const deleteInstrument = async (id) => {
    try {
        const res = await fetch(`${API_URL}${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    fetchInstruments,
    fetchInstrument,
    createInstrument,
    updateInstrument,
    deleteInstrument,
};
