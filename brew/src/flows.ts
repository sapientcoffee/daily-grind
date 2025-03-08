import { genkit, z } from 'genkit';
import { vertexAI } from '@genkit-ai/vertexai';

// Define the Vertex AI location.
const vertexAILocation = 'us-central1';

// Initialize Genkit with the Vertex AI plugin.
const ai = genkit({
    plugins: [
      vertexAI({ location: vertexAILocation })
    ],
  });

const generateTipPrompt = ai.prompt('generateTip');

const generateTip = ai.defineFlow(
    {
      name: 'Generate a tip for a menu suggestion',
      inputSchema: z.string(),
      outputSchema: z.object({ tip: z.string() }),
    },
    
    async (input) => {
        console.log("Starting Chapter Summarization flow ...");

        // Step 1: Generate tip
        const response = await generateTipPrompt(
            {tipTheme: input}
        );

        // Step 2 Validate Tip
        if (response.text) {
            return { tip: response.text };
        } else {
            console.error("generateTipPrompt returned null output");
            return { tip: "Failed to generate tip." }; 
        }
    },
  );

  export { generateTip}