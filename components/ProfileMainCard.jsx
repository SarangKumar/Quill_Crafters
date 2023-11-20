'use client';
import { cn } from '@/lib/utils';
import { BirdIcon, Bot, Loader2, Webhook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants, planVariant } from './ui/Button';
import { useState } from 'react';

const ProfileMainCard = ({ session, trueUsername }) => {
	const [edit, setEdit] = useState(false);
	const [profile, setProfile] = useState(session?.user);
	const [bio, setBio] = useState(profile?.bio);
	const [loading, setLoading] = useState(false);

	const handleProfile = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch('/api/profile', {
				method: 'POST',
				body: JSON.stringify({
					session,
					bio,
				}),
			});
			const data = await res.json();
			setProfile(data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
			setEdit(false);
		}
	};

	return (
		<aside className="p-4 rounded flex flex-col md:flex-row lg:flex-col gap-x-5">
			<Image
				src={profile?.avatar}
				quality={100}
				width={200}
				height={200}
				alt="Profile Picture"
				className="rounded-md w-full h-full xs:h-32 xs:w-32 object-cover"
			/>
			<div className="space-y-3 flex-grow md:mt-4">
				<h2 className="text-lg md:text-2xl font-semibold">
					{profile?.username}
				</h2>
				<div>
					<Link
						href={`/${trueUsername}`}
						className="md:text-base lg:text-xs font-medium text-primary hover:underline"
					>
						{trueUsername}
					</Link>
					<p className="text-sm">{profile?.email}</p>
				</div>

				<div className="flex items-center gap-x-2 md:mt-4">
					{profile?.plan === 'PREMIUM' ? (
						<span
							className={cn(
								planVariant({
									variant: profile?.plan.toLowerCase(),
									size: 'icon',
								})
							)}
						>
							<Bot size={16} />
						</span>
					) : profile?.plan === 'PRO' ? (
						<span
							className={cn(
								planVariant({
									variant: profile?.plan.toLowerCase(),
									size: 'icon',
								})
							)}
						>
							<BirdIcon size={16} />
						</span>
					) : profile?.plan === 'BASIC' ? (
						<span
							className={cn(
								planVariant({
									variant: profile?.plan.toLowerCase(),
									size: 'icon',
								})
							)}
						>
							<Webhook size={16} />
						</span>
					) : (
						<></>
					)}

					<span
						className={cn(
							planVariant({
								variant: profile?.plan.toLowerCase(),
								className: 'w-full flex-1 rounded h-7',
							})
						)}
					>
						{profile?.plan}
					</span>
				</div>

				{edit ? (
					<form
						onSubmit={(e) => handleProfile(e)}
						className=""
					>
						<textarea
							value={bio !== null ? bio : ''}
							maxLength={100}
							placeholder="Enter your bio here..."
							autoCorrect="false"
							rows={3}
							onChange={(e) => setBio(e.target.value)}
							className="flex rounded border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-xs gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-1 flex-grow"
						/>
						<p className="text-xs py-1.5">
							{bio !== null ? bio.length : 0} / 100
						</p>
						<div className="flex gap-2 mt-2 w-full">
							<button
								onClick={() => setEdit(true)}
								className={cn(
									buttonVariants({
										variant: 'default',
										className: 'lg:flex-grow px-5',
									})
								)}
								loading={loading}
							>
								{loading ? (
									<Loader2
										className="animate-spin"
										size={16}
									/>
								) : (
									<>Save</>
								)}
							</button>
							<button
								onClick={() => {
									setEdit(false);
								}}
								className={cn(
									buttonVariants({
										variant: 'default',
										className: 'lg:flex-grow px-5',
									})
								)}
								loading={loading}
							>
								Cancel
							</button>
						</div>
					</form>
				) : (
					<>
						<p className="text-xs">
							{profile?.bio || 'No bio yet.'}
						</p>

						<button
							onClick={() => setEdit(true)}
							className={cn(
								buttonVariants({
									variant: 'default',
									className: 'lg:w-full px-5',
								})
							)}
						>
							Edit bio
						</button>
					</>
				)}
			</div>
		</aside>
	);
};

export default ProfileMainCard;
