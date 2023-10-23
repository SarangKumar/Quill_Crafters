export function sortNovelsByLikesAndChapters(novels) {
   return novels.slice().sort((a, b) => {
		if (a.likes > b.likes) return -1;
		if (a.likes < b.likes) return 1;
		if (a.chapters > b.chapters) return -1;
		if (a.chapters < b.chapters) return 1;
		return 0;
   });
}

export function sortNovelsByChaptersAndLikes(novels) {
   return novels.slice().sort((a, b) => {
	   if (a.chapters > b.chapters) return 1;
	   if (a.chapters < b.chapters) return -1;
		if (a.likes > b.likes) return -1;
		if (a.likes < b.likes) return 1;
		return 0;
   });
}

