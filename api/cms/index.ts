import axios from "axios";
import { Visa } from "../../interfaces";
import { visaResponse } from "../../interfaces";

export const fetchVisas = async () => {
  const res = await axios.get("http://localhost:1337/api/visas?populate=*");
  const visas = res.data.map((visa: visaResponse) => {
    return {
      id: visa.id,
      name: visa.name,
      price: visa.price,
      image: visa.image,
      country: visa.country,
      description: visa.description,
      createdAt: visa.createdAt,
      updatedAt: visa.updatedAt,
    } as Visa;
  });
  return visas;
};
