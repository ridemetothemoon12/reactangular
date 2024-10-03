import axios, { AxiosInstance } from "axios";

class Api {
  private static instance: Api | null = null;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://Api.example.com",
      timeout: 1000,
      headers: { "Content-Type": "application/json" },
    });
  }

  public static getInstance() {
    if (Api.instance === null) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  async fetchData<T>(endpoint: string): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(endpoint);
      return response.data;
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
      throw error;
    }
  }
}

export default Api;
