import { useEffect, useState} from 'react'
import Plan from '../../components/Plan/Plan.jsx'
import { getProfile } from '../../services/profileService.js'
import { deletePlan, updatePlan } from '../../services/planService.js'
import styles from './Profile.module.css'

const Profile = ({user}) => {
  let [profile, setProfile] = useState(null)
  let [plans, setPlans] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getProfile()
      setProfile(profileData)
      if(profileData.plans.length > 0) setPlans(profileData.plans)
    }
    fetchProfile()
  }, [user])

  const handleDeletePlan = (plan) => {
    deletePlan(plan._id, plan.who._id)
    setPlans(plans.filter(p => p._id !== plan._id))
  }

  const handleUpdatePlan = async (planId, planData ) => {
    const updatedPlan = await updatePlan(planId, planData)
    const newPlans = plans.map(p => (p._id === planId) ? updatedPlan : p)
    setPlans(newPlans)
  }

  if (!profile) return <h1>Loading ...</h1>

  return (
    <main>
      <div className={styles.header}>
        <div className={styles.imageContainer}>
          <img src={profile.photo} alt={`${profile.name}`}></img>
          <h2>{profile.name}</h2>
        </div>

        <div className={styles.headerInfo}>
          <h6>Love Types: </h6>
          <p>{profile.loveTypes?.join(", ")}</p>
          <br/>
          <h6>Love Languages: </h6>
          <p>{profile.loveLanguages?.join(", ")}</p>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Plans</h2>
        {plans.map((plan,idx) => 
          <Plan key={idx}
            handleUpdatePlan={handleUpdatePlan}
            handleDeletePlan={handleDeletePlan}
            plan={plan}
          />
        )}
      </div>
    </main>
  )
}

export default Profile