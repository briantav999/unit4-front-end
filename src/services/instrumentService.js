// src/components/services/instrumentService.js
const API_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`; // Update the URL based on your Django API endpoint

const fetchInstruments = async () => {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch instruments:", error);
    }
};

const fetchInstrument = async (id) => {
    try {
        const res = await fetch(`${API_URL}${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const fetchCategories = async () => {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        const categories = data.map(instrument => instrument.category);
        const uniqueCategories = [...new Set(categories)];
        return uniqueCategories;
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        throw error;
    }
};

const fetchModels = async () => {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        const models = data.map(instrument => instrument.model);
        const uniqueModels = [...new Set(models)];
        return uniqueModels;
    } catch (error) {
        console.error("Failed to fetch models:", error);
        throw error;
    }
};

const fetchBrand = async () => {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        const brands = data.map(instrument => instrument.brand);
        const uniqueBrands = [...new Set(brands)];
        return uniqueBrands;
    } catch (error) {
        console.error("Failed to fetch brand:", error);
        throw error;
    }
};

const fetchIsRented = async () => {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        const isRentedValues = data.map(instrument => instrument.isRented);
        // Filter out unique boolean values
        const uniqueIsRentedValues = [...new Set(isRentedValues)];
        return uniqueIsRentedValues;
    } catch (error) {
        console.error("Failed to fetch isRented values:", error);
        throw error;
    }
};



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
    fetchCategories,
    fetchModels,
    fetchBrand,
    fetchIsRented

};
