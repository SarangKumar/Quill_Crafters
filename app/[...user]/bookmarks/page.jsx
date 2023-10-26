import { useRouter } from "next/router"

const BookmarkPages = () => {
    const router = useRouter();

  return (
    <div>BookmarkPages, {JSON.stringify(router)}</div>
  )
}

export default BookmarkPages