import { supabase } from "../../supabase-client";

export const savePrice = async (data) => {
    const {error} = await supabase.from("Price").insert([data]);
    if(error) {
        console.error("Error saving quote: ", error);
        throw error;
    }
}