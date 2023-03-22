import { useEffect, useState} from 'react'
import Plan from '../../components/Plan/Plan.jsx'
import * as profileService from '../../services/profileService.js'
import styles from './Profile.module.css'

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
      <div className={styles.container}>
        <h2>Plans</h2>
        {profile.plans.map((plan,idx) => 
          <Plan key={idx} plan={plan}/>
        )}
      </div>
    </main>
  )
}

export default Profile