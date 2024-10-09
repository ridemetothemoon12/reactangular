import axios, { AxiosInstance } from "axios";

class Api {
  private static instance: Api | null = null;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://api.thecatapi.com/v1/images",
      timeout: 1000,
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public static getInstance() {
    if (Api.instance === null) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(endpoint);
      return response.data;
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
      throw error;
    }
  }

  async post<T>(endpoint: string, params: unknown): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(endpoint, params);
      return response.data;
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
      throw error;
    }
  }
}

export default Api;
