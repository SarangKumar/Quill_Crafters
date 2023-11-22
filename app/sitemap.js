export default function sitemap() {
	// const profiles = await
	return [
		{
			url: 'https://quillcrafters.vercel.app/',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://quillcrafters.vercel.app/novel/1',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://quillcrafters.vercel.app/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
	];
}
