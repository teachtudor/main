import formidable from "formidable";
import fs from "fs";
import OpenAI from "openai";

export const config = {
  api: {
    bodyParser: false,
  },
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Upload failed" });

    try {
      const filePath = files.file.filepath;
      const audioStream = fs.createReadStream(filePath);

      // Use OpenAI API (Whisper or ChatGPT)
      // For MVP, you can call Whisper via OpenAI, then ChatGPT for grammar analysis
      const transcriptionResponse = await openai.audio.transcriptions.create({
        file: audioStream,
        model: "whisper-1",
      });

      const transcript = transcriptionResponse.text;

      // ChatGPT analysis
      const analysisResponse = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an ESL teacher. Analyze this transcript for grammar errors, provide corrections, CEFR word levels, and example sentences."
          },
          {
            role: "user",
            content: transcript
          },
        ],
      });

      const text = analysisResponse.choices[0].message.content;

      res.status(200).json({ text });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
}
