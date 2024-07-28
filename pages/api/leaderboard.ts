import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data, error } = await supabase
      .from('userleaderboard')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
