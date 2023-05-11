import { connection as connectToDB } from "@utils/database";
import Prompt from "@models/prompts";

export const GET = async (req, res) => {

    try {
       await connectToDB();
       
       const prompts = await Prompt.find({}).populate("creator");

       if(!prompts) {
        return new Response("No prompts is available")
       }

       return new Response(JSON.stringify(prompts), { status: 200});
    } catch (error) {
        console.log(error);
        return new Response("No prompts is fetched, something went wrong", { status: 500});
    }
}