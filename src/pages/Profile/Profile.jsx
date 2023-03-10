import { useEffect, useState} from 'react'
import * as profileService from '../../services/profileService.js'

const Profile = ({user}) => {
  let [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(user.profile)
      setProfile(profileData)
    }
    fetchProfile()
  }, [user])

  if (!profile) return <h1>Loading ...</h1>
  console.log(profile)

  return (
    <>
      <h1>{profile.name}</h1>
    </>
  )
}

export default Profile