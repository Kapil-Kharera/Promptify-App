import { connection as connectToDB } from "@utils/database";
import Prompt from "@models/prompts";

export const POST = async (req, res) => {
    const { userId, prompt, tag} = await req.json();
    // console.log(userId, prompt, tag);

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201});
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new prompt", { status: 500 })
    }
}