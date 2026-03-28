import {createClient} from '@supabase/supabase-js';

const supabaseUrl = "https://pwneuekgizluvjyfgldh.supabase.co";
const supabaseKey = "sb_publishable_QojECNZhOvN_AKew5ynHIQ_B6svmPl4" ;

export const supabase = createClient(supabaseUrl,supabaseKey);