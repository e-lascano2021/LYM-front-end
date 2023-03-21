import { useEffect, useState} from 'react'
import Plan from '../../components/Plan/Plan.jsx'
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

  return (
    <main>
      <h1>{profile.name}</h1>
      <p>{profile.loveTypes.join(', ')}</p>
      <p>{profile.loveLanguages.join(', ')}</p>
      <p>{profile.plans[0].when}</p>
      <p>{profile.plans[0].where}</p>
      <p>{profile.plans[0].what}</p>
      <div>
        {profile.plans.map((plan,idx) => 
          <Plan key={idx} plan={plan}/>
        )}
      </div>
    </main>
  )
}

export default Profile