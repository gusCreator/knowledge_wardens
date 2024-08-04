import { NextApiRequest, NextApiResponse } from "next";

//export default function handler(req: NextApiRequest, res: NextApiResponse) {
//  if (req.method === 'GET') {
//    const courses = [
//      { name: 'Hola Mundo' }
//    ];
//    res.status(200).json(courses);
//  } else if ( req.method === 'POST' ) {
//    const newCourse = req.body;
//    res.status(201).json(newCourse);
//  } else {
//    res.setHeader('Allow', [ 'GET', 'POST' ]);
//    res.status(405).end(`Method ${req.method} Not allowed`);
//  }
//}
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const data = {
    name: 'Hola Mundo',
    id: 'xd'
  }
  return Response.json(data);
  //if (req.method === 'GET') {
  //  const courses = [
  //    { name: 'Hola Mundo' }
  //  ];
  //  res.status(200).json(courses);
  //} else if ( req.method === 'POST' ) {
  //  const newCourse = req.body;
  //  res.status(201).json(newCourse);
  //} else {
  //  res.setHeader('Allow', [ 'GET', 'POST' ]);
  //  res.status(405).end(`Method ${req.method} Not allowed`);
  //}
}
