import api from "../config/axios";

export const getDoctors = async (
  take?: number,
  skip?: number,
  requireTotalCount?: boolean,
  sort?: any[],
  filter?: any[]
) => {
  try {
    const response = await api.get("/doctor", {
      params: {
        take,
        skip,
        requireTotalCount,
        sort: sort ? JSON.stringify(sort) : undefined,
        filter: filter ? JSON.stringify(filter) : undefined,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error del servidor:", error);
    throw error;
  }
};

export const getRegions = async () => {
  try {
    const response = await api.get("/region");
    return response.data.data;
  } catch (error) {
    console.error("Error del servidor:", error);
    throw error;
  }
};

export const getSpecialties = async () => {
  try {
    const response = await api.get("/specialty");
    return response.data.data;
  } catch (error) {
    console.error("Error del servidor:", error);
    throw error;
  }
};
