import HttpService from "@/app/common/HttpService";

export const ecocheck = async (url: string) => {
    const response = await HttpService.get(`https://admin.thegreenwebfoundation.org/api/v3/greencheck/${url}`);
    return response.data;
}