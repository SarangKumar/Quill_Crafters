import { useRouter } from "next/router";

const ProfilePage = () => {
    const router = useRouter();
  return (
    <div>ProfilePage, {JSON.stringify(router)}</div>
  )
}

export default ProfilePage