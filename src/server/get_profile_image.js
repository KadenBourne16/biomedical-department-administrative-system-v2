"use server";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export const GetProfileImage = async (account_type, id) => {
  console.log(account_type)
    try {
    if (account_type === "student") {
      const data = await client.fetch(`*[_type == "student" && indexNo == $id]{ image }`, { id });
      if (data && data[0] && data[0].image) {
        const imageUrl = builder.image(data[0].image).url();
        return { image: imageUrl };
      } else {
        return { image: null }; // or some default image
      }
    }
  } catch (err) {
    console.error("Error fetching profile image", err);
    return { image: null }; // or some default image
  }
}
