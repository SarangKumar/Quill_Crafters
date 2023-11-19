import { Loader2 } from "lucide-react";

export function ComicCardSkeleton() {
    return (
		<div className="shadow-md group border group text-white relative overflow-hidden border-border rounded-lg bg-background-secondary ring-offset-0 transition-colors focus:ring-primary hover:shadow-primary hover:ring-2 hover:ring-primary min-h-[300px] min-w-[150px] ">
			<div className="h-full w-full flex items-center justify-center animate-pulse">
				<Loader2 className="animate-spin" />
			</div>
		</div>
	);
}