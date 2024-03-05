import ImageUrlBuilder  from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from '@sanity/client';

export const client = createClient({
    projectId:"i1i94k0n",
    dataset:"production",
    apiVersion:"2022-03-10",
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
    if (!source) return "noImg"
    
    return builder.image(source) as unknown;
  };