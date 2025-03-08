import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as flows from './flows';

const app = express();
const port = process.env.PORT || 3000;
const apiVersion = '/api/v1';

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

const handleRoot = async (req: express.Request, res: express.Response) => {
    res.status(200).json({ brew: "I'm Alive!" });
  };

// API Routes (Placeholder Response: "I'm alive")

// RAG Functionality
app.post(`${apiVersion}/rag/upload`, async (req: Request, res: Response) => {
  res.send("I'm alive");
});

app.get(`${apiVersion}/rag/query`, async (req: Request, res: Response) => {
  res.json({ response: "I'm alive" });
});

// Image Generation
app.post(`${apiVersion}/images/generate`, async (req: Request, res: Response) => {
  res.json({ imageUrl: "I'm alive" });
});

// Podcast Generation
app.post(`${apiVersion}/podcasts/generate`, async (req: Request, res: Response) => {
  res.json({ podcastUrl: "I'm alive" });
});

app.get(`${apiVersion}/podcasts/latest`, async (req: Request, res: Response) => {
  res.json({ podcastUrl: "I'm alive" });
});

// Developer/Productivity Focus
app.post(`${apiVersion}/rag/upload/dev`, async (req: Request, res: Response) => {
  res.send("I'm alive");
});

app.get(`${apiVersion}/tips/generate`, async (req: Request, res: Response) => {
    try {
        const tip = await flows.generateTip('bistro');
        res.send(tip);
    } catch (error) {
        console.error("Error generating tip:", error);
        res.status(500).send("Failed to generate tip.");
    }
});

app.get(`${apiVersion}/antics/generate`, async (req: Request, res: Response) => {
  res.json({ antic: "I'm alive" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', handleRoot);