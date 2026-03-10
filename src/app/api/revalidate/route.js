import { revalidateTag } from "next/cache";

export async function POST(req) {

  const { tag } = await req.json();

  try {

    revalidateTag(tag);

    return Response.json({
      revalidated: true,
      tag
    });

  } catch (err) {

    return Response.json({
      revalidated: false,
      error: err.message
    });

  }

}