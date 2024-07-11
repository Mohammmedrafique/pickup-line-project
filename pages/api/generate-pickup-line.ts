import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { crushInfo, style } = req.body;
      
      const response = await openai.completions.create({
        engine: "text-davinci-002",
        prompt: `Generate two ${style} pickup lines based on the following information: "${crushInfo}".`,
        max_tokens: 100,
        n: 2,
      });

      const pickupLines = response.data.choices.map(choice => choice.text.trim());
      res.status(200).json({ pickupLines });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while generating pickup lines.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
