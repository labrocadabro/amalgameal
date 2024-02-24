import { OpenAI } from 'openai';
import { generateTextPrompt, generateImagePrompt } from './prompts';
import { Recipe } from './types';

export interface Env {
	OPENAI_API_KEY: string;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const corsHeaders = {
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Methods': 'POST,OPTIONS',
			'Access-Control-Allow-Origin': '*',
		};
		try {
			if (request.method === 'OPTIONS') {
				return new Response('OK', {
					headers: corsHeaders,
				});
			} else if (request.method !== 'POST') {
				return new Response('Method not allowed', {
					status: 405,
					headers: corsHeaders,
				});
			}
			const ingredients: string[] = await request.json();

			const openai = new OpenAI({
				apiKey: env.OPENAI_API_KEY,
			});
			const completion = await openai.chat.completions.create({
				messages: [
					{ role: 'system', content: 'You are a helpful assistant.' },
					{ role: 'user', content: generateTextPrompt(ingredients) },
				],
				model: 'gpt-3.5-turbo',
				max_tokens: 500,
			});
			const reply = completion.choices[0].message.content;
			if (!reply) return new Response('error');
			const recipe: Recipe = JSON.parse(reply);
			if (!recipe.success) return Response.json({ image: null, recipe });
			const response = await openai.images.generate({
				model: 'dall-e-3',
				prompt: generateImagePrompt(recipe.title, recipe.description),
				n: 1,
				size: '1024x1024',
			});
			const url = response.data[0].url;
			let result;
			if (!url) result = { image: null, recipe };
			else result = { image: url, recipe };
			return new Response(JSON.stringify(result), {
				headers: {
					'Content-type': 'application/json',
					...corsHeaders,
				},
			});
		} catch (e) {
			console.log(e);
			if (e instanceof Error) {
				return new Response(e.message, {
					status: 500,
					headers: {
						'Content-type': 'application/json',
						...corsHeaders,
					},
				});
			} else {
				return new Response('Sorry, something went wrong', {
					status: 500,
					headers: {
						'Content-type': 'application/json',
						...corsHeaders,
					},
				});
			}
		}
	},
};
