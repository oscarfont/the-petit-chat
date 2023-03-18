import { AxiosInstance, AxiosRequestConfig } from 'axios';
import HttpClient from '../../lib/adapters/http/HttpClient';

describe('AxiosHttpClient', () => {
  let axiosInstance: AxiosInstance;
  let httpClient: HttpClient;

  beforeEach(() => {
    axiosInstance = {
      get: jest.fn()
    } as unknown as AxiosInstance;

    httpClient = new HttpClient(axiosInstance);
  });

  describe('HttpClient adapter class', () => {
    it('should create axios adapter correctly without passing an axiosInstance', async () => {
        const httpClient2 = new HttpClient();
        expect(httpClient2).toBeTruthy();
    })
  })

  describe('get', () => {
    it('should call axiosInstance.get with the provided URL and config', async () => {
      const url = 'https://example.com';
      const config: AxiosRequestConfig = { params: { foo: 'bar' } };
      (axiosInstance.get as jest.MockedFunction<typeof axiosInstance.get>).mockResolvedValue({ data: {} });

      await httpClient.get(url, config);

      expect(axiosInstance.get).toHaveBeenCalledWith(url, config);
    });

    it('should return the response data given a url and without axiosconfig', async () => {
      const responseData = { message: 'Hello, world!' };
      const url = 'https://example.com';
      (axiosInstance.get as jest.MockedFunction<typeof axiosInstance.get>).mockResolvedValue({ data: responseData });

      const result = await httpClient.get(url);

      expect(result).toEqual(responseData);
    });
  });
});