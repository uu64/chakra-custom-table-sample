// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  firstname: string;
  lastname: string;
  sex: string;
  age: number;
  birthday: string;
  zipcode: string;
  prefecture: string;
  city: string;
  hobbies: string[];
  comment: string;
  tel: string;
  mail: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      firstname: "Taro",
      lastname: "Suzuki",
      sex: "male",
      age: 30,
      birthday: "2000-01-03",
      zipcode: "000-0000",
      prefecture: "Tokyo",
      city: "Chiyoda-ku",
      hobbies: ["running", "trip", "guitar"],
      comment: "Hi, my name is Taro Suzuki. Thanks.",
      tel: "000-0000-1111",
      mail: "taro.suzuki@example.com",
    },
  ]);
}
